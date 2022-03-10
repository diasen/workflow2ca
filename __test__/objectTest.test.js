import { createProduct } from '../scripts/helpers/objectHelpers';

test('Test that the function createProduct', () => {
  expect(
    createProduct({
      id: 1234,
      code: 'Banansplitt',
      title: 'I love dessert',
    })
  ).toStrictEqual({
    id: 1234,
    code: 'BANANSPLITT',
    title: 'I_love_desse',
  });
});
