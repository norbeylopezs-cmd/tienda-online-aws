import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cart {

  cart: any[] = [];

  total = 0;

  addToCart(product: any) {

  const existingProduct = this.cart.find(
    item => item.name === product.name
  );

  if (existingProduct) {

    existingProduct.quantity++;

  } else {

    this.cart.push({
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1
    });
  }

  this.total += product.price;
}
  removeFromCart(index: number) {

    this.total -= this.cart[index].price;

    this.cart.splice(index, 1);
  }
  increaseQuantity(item: any) {

  item.quantity++;
  this.total += item.price;
}

decreaseQuantity(index: number) {

  const item = this.cart[index];

  item.quantity--;
  this.total -= item.price;

  if (item.quantity === 0) {
    this.cart.splice(index, 1);
  }
}

getTotalItems() {

  return this.cart.reduce(
    (total, item) => total + item.quantity,
    0
  );
}

}