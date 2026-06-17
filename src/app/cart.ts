import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Cart {

  cart: any[] = JSON.parse(
    localStorage.getItem('cart') || '[]'
  );

  selectedProduct: any = JSON.parse(
    localStorage.getItem('selectedProduct') || 'null'
  );

  total = this.cart.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  );

  setSelectedProduct(product: any) {
    this.selectedProduct = product;

    localStorage.setItem(
      'selectedProduct',
      JSON.stringify(product)
    );
  }

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

    localStorage.setItem(
      'cart',
      JSON.stringify(this.cart)
    );
  }

  removeFromCart(index: number) {

    this.total -= this.cart[index].price * this.cart[index].quantity;

    this.cart.splice(index, 1);

    localStorage.setItem(
      'cart',
      JSON.stringify(this.cart)
    );
  }

  increaseQuantity(item: any) {

    item.quantity++;
    this.total += item.price;

    localStorage.setItem(
      'cart',
      JSON.stringify(this.cart)
    );
  }

  decreaseQuantity(index: number) {

    const item = this.cart[index];

    item.quantity--;
    this.total -= item.price;

    if (item.quantity === 0) {
      this.cart.splice(index, 1);
    }

    localStorage.setItem(
      'cart',
      JSON.stringify(this.cart)
    );
  }

  getTotalItems() {

    return this.cart.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }

}