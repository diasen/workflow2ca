import {
  makeUppercase,
  replaceSpaces,
  limitLength,
} from '../scripts/helpers/stringHelpers.ts';

// stringhelpers
test('makes the text uppercase', () => {
  expect(makeUppercase('aLex')).toBe('ALEX');
});

test('Replaces space with _', () => {
  expect(replaceSpaces('hi my name is alex')).toBe('hi_my_name_is_alex');
});

test('removes the first two letters in the word', () => {
  expect(limitLength(4, 'Hansen')).toBe('Hans');
});
