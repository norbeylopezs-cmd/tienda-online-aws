import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { Cart } from './cart';
import { ProductService } from './services/product.service';
import { Product } from './interfaces/product';

// Configuración del componente principal
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  constructor(
  public cartService: Cart,
  private router: Router,
  private productService: ProductService
) {}
  mostrarTienda() {
  return window.location.pathname === '/';
}
ngOnInit() {
  const productosGuardados = localStorage.getItem('productosHombre');

  if (productosGuardados) {
    const data = JSON.parse(productosGuardados);

    this.products = data.products;
    this.newsProducts = data.newsProducts;
  }

  this.productService.getProducts().subscribe({
    next: (data) => {
      const productosHombre = data.filter(product =>
        product.categoria === 'hombre'
      );

      this.products = productosHombre
        .filter(product => product.seccion === 'products')
        .map(product => ({
          name: product.nombre,
          price: product.precio,
          image: product.imagen
        }));

      this.newsProducts = productosHombre
        .filter(product => product.seccion === 'newsProducts')
        .map(product => ({
          name: product.nombre,
          price: product.precio,
          image: product.imagen
        }));

      localStorage.setItem('productosHombre', JSON.stringify({
        products: this.products,
        newsProducts: this.newsProducts
      }));
    },
    error: (error) => {
      console.error('Error al consumir productos de hombre desde AWS:', error);
    }
  });
}
mostrarHeader() {
  return window.location.pathname === '/'
    || window.location.pathname === '/carrito'
    || window.location.pathname === '/producto-detalle';
}
goToCart() {
  this.router.navigate(['/carrito']);
}

   // Lista de productos disponibles en la tienda
  products: any[] = [];
  newsProducts: any[] = [];
lookProducts = [
  {
    image:'https://brand.assets.adidas.com/image/upload/c_fill,f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920,ar_9:16/6998674_CAM_LAM_FTD_SS_26_MAR_25_FOOTBALL_LAM_AWAY_CO_CORRECT_ONSITE_STYLING_CAROUSEL_1080x1920_FITM_2_8ea7b35764.png',
    items: '3 artículos'
  },
  {
    image: 'https://brand.assets.adidas.com/image/upload/c_fill,f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920,ar_9:16/6998674_CAM_LAM_FTD_SS_26_MAR_25_FOOTBALL_LAM_AWAY_CO_CORRECT_ONSITE_STYLING_CAROUSEL_1080x1920_FITM_1_756a704d7e.png',
    items: '2 artículos'
  },
  {
    image: 'https://brand.assets.adidas.com/image/upload/c_fill,f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920,ar_9:16/6906349_CAM_LAM_ONSITE_FOOTBALL_IS_THE_MUSE_SS_26_PT_3_ARG_LOOBOOKS_DAT_CAROUSEL_STYLING_1080x1920_11_d_0b5dad61fa.jpg',
    items: '3 artículos'
  },
  {
    image: 'https://brand.assets.adidas.com/image/upload/c_fill,f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920,ar_9:16/6906349_CAM_LAM_ONSITE_FOOTBALL_IS_THE_MUSE_SS_26_PT_3_ARG_LOOBOOKS_DAT_CAROUSEL_STYLING_1080x1920_13_d_60b01dcab3.jpg',
    items: '4 artículos'
  }, 
  {
    image: 'https://brand.assets.adidas.com/image/upload/c_fill,f_auto,q_auto,fl_lossy/if_w_gt_1920,w_1920,ar_9:16/6906349_CAM_LAM_ONSITE_FOOTBALL_IS_THE_MUSE_SS_26_PT_3_ARG_LOOBOOKS_DAT_CAROUSEL_STYLING_1080x1920_8_d_c51d076e4b.jpg',
    items: '5 artículos'
  }
];
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
mostrarFooterCompleto() {
  return window.location.pathname === '/'
    || window.location.pathname === '/producto-detalle'
    
}
}
