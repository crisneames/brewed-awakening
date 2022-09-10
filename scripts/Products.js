import { getProducts } from './database.js';

const products = getProducts();

export const Products = () => {
  let html = '<ul>';

  for (const product of products) {
    html += `<li id="product--${product.id}">${product.name}</li>`;
  }

  html += '</ul>';

  return html;
};

document.addEventListener('click', (clickEvent) => {
  const itemClicked = clickEvent.target;
  if (itemClicked.id.startsWith('product')) {
    //This splits a string any place there is a '--' into an array  For example:
    //"this--is--a--string" -> ["this", "is", "a", "string"]
    const productId = itemClicked.id.split('--')[1];

    for (const product of products) {
      if (product.id === parseInt(productId)) {
        window.alert(`${product.name} costs $${product.price.toFixed(2)}`);
      }
    }
  }
});
