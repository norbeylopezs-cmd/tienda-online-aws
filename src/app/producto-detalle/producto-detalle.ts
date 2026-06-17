import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Cart } from '../cart';

@Component({
  selector: 'app-producto-detalle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-detalle.html',
  styleUrl: './producto-detalle.css',
})
export class ProductoDetalle {

  product: any;
  selectedSize: string = '';

  completeLookProducts = [
    {
      name: 'Shorts Run It',
      price: 159950,
      category: 'Performance',
      image:
        'https://assets.adidas.com/images/w_600,f_auto,q_auto/80373963335b41af95091bcf1e3e9a1a_9366/Shorts_Run_It_Negro_IL7232_HM1.jpg'
    },
    {
      name: 'Chaqueta De Running Bogotá',
      price: 319950,
      category: 'Performance',
      image:
        'https://assets.adidas.com/images/w_600,f_auto,q_auto/cc56bc17069f49cb820a260bbd12900d_9366/Chaqueta_de_Running_Bogota_Negro_KV7990_01_laydown.jpg'
    },
    {
      name: 'Esqueleto All-Time Classics',
      price: 249950,
      category: 'Performance',
      image:
        'https://assets.adidas.com/images/w_600,f_auto,q_auto/04d32e899b534e3a83df2f10c4ed0bc0_9366/Esqueleto_All-Time_Classics_Blanco_JY8623_000_plp_model.jpg'
    },
    {
      name: 'Visera De Running AEROREADY',
      price: 89950,
      category: 'Performance',
      image:
        'https://assets.adidas.com/images/w_600,f_auto,q_auto/d81738fd7198453cb2e8ab06434825d4_9366/Visera_de_Running_AEROREADY_Verde_KR9005_00_plp_standard.jpg'
    }
  ];
  relatedProducts = [
  {
    name: 'Tenis Runfalcon 6 ATR',
    price: 349950,
    category: 'Performance',
    image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e99b3721b9c9407388bb044211d87c53_9366/Tenis_Runfalcon_6_ATR_Negro_IH1826_HM1.jpg'
  },
  {
    name: 'Tenis De Running Runfalcon 6 Cloudfoam',
    price: 299950,
    category: 'Performance',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/5253505b8c074fdb895862e03d240419_9366/Tenis_de_Running_Runfalcon_6_Cloudfoam_Negro_IH9532_HM1.jpg'
  },
  {
    name: 'Tenis De Running Supernova Ease 2',
    price: 479950,
    category: 'Performance',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/a58797a7e85f4281a6caba88304ef464_9366/Tenis_de_Running_Supernova_Ease_2_Azul_KJ1831_00_plp_standard.jpg'
  },
  {
    name: 'Tenis Adizero Pacer',
    price: 529950,
    category: 'Performance',
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/91633c29e80f4a7b999a46e5a974e1ad_9366/Tenis_Adizero_Pacer_Negro_KZ6848_00_plp_standard.jpg'
  }
];

  constructor(
    public cartService: Cart,
    private router: Router
  ) {

    this.product = this.cartService.selectedProduct;

    if (!this.product) {
      this.router.navigate(['/']);
    }
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }

  agregarAlCarrito() {
    this.cartService.addToCart(this.product);
    this.router.navigate(['/carrito']);
  }

}