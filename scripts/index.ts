import { createProduct } from './helpers/objectHelpers';
import { interfaceProduct } from './interfaces/interfaceProduct';
import {
  makeUppercase,
  replaceSpaces,
  limitLength,
} from './helpers/stringHelpers';

const newProduct: interfaceProduct = createProduct({
  id: 12,
  code: 'd f g',
  title: 'd f g',
});

console.log(newProduct);
console.log(makeUppercase('AlexAnder'));
console.log(replaceSpaces('Russia should never invaded ukrain'));
console.log(limitLength(4, 'Norway'));
