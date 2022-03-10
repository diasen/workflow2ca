import { createProduct } from './helpers/objectHelpers';
import { newProduct } from './interfaces/newProduct';
import { makeUppercase } from './helpers/stringHelpers';

const newProduct: newProduct = createProduct({
  id: 12,
  code: 'd f g',
  title: 'd f g',
});

console.log(newProduct);

console.log(makeUppercase('AlexAnder'));
