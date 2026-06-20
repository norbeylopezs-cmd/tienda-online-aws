import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Cart } from '../cart';
import { ProductService } from '../services/product.service';
import { Product } from '../interfaces/product';

// Configuración del componente principal
@Component({
  selector: 'app-mujer',
  standalone: true,
  imports: [
  CommonModule,
  FormsModule,
  RouterLink
],
  templateUrl: './mujer.html',
  styleUrl: './mujer.css'
})
export class Mujer implements OnInit {
 constructor(
  public cartService: Cart,
  private router: Router,
  private productService: ProductService
) {}

  mostrarTienda() {
  return window.location.pathname !== '/carrito';
}
goToCart() {
  this.router.navigate(['/carrito']);
}
cargandoProductos = true;
   // Lista de productos disponibles en la tienda
  products: any[] = [];
  newsProducts: any[] = [];
ngOnInit() {
  const productosGuardados = localStorage.getItem('productosMujer');

  if (productosGuardados) {
    const data = JSON.parse(productosGuardados);

    this.products = data.products;
    this.newsProducts = data.newsProducts;
  }

  this.productService.getProducts().subscribe({
    next: (data) => {
      const productosMujer = data.filter(product =>
        product.categoria === 'mujer'
      );

      this.products = productosMujer
        .filter(product => product.seccion === 'products')
        .map(product => ({
          name: product.nombre,
          price: product.precio,
          image: product.imagen
        }));

      this.newsProducts = productosMujer
        .filter(product => product.seccion === 'newsProducts')
        .map(product => ({
          name: product.nombre,
          price: product.precio,
          image: product.imagen
        }));

      localStorage.setItem('productosMujer', JSON.stringify({
        products: this.products,
        newsProducts: this.newsProducts
      }));
    },
    error: (error) => {
      console.error('Error al consumir productos de mujer desde AWS:', error);
    }
  });
}
  // Texto del buscador
  searchText = '';
  filteredProducts(products: any[]) {
  return products.filter(product =>
    product.name.toLowerCase().includes(this.searchText.toLowerCase())
  );
}
  // Agrega productos al carrito y actualiza el total
addToCart(product: any) {
  this.cartService.addToCart(product);
}
verDetalle(product: any) {
  this.cartService.setSelectedProduct(product);
  this.router.navigate(['/producto-detalle']);
}
  // Elimina productos del carrito
  removeFromCart(index: number) {
  this.cartService.removeFromCart(index);
}
}