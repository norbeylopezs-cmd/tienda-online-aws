import { Component } from '@angular/core';
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
export class App {
  constructor(
  public cartService: Cart,
  private router: Router,
  private productService: ProductService
) {}
  mostrarTienda() {
  return window.location.pathname === '/';
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
  products = [
    {
      name: 'Tenis Runfalcon 6 ATR',
      price: 349950,
      image: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e99b3721b9c9407388bb044211d87c53_9366/Tenis_Runfalcon_6_ATR_Negro_IH1826_HM1.jpg'
    },
    {
      name: 'Tenis De Running Runfalcon 6 Cloudfoam',
      price: 299950,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/5253505b8c074fdb895862e03d240419_9366/Tenis_de_Running_Runfalcon_6_Cloudfoam_Negro_IH9532_HM1.jpg'
    },
    {
      name: 'Tenis De Running Supernova Ease 2',
      price: 479950,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/a58797a7e85f4281a6caba88304ef464_9366/Tenis_de_Running_Supernova_Ease_2_Azul_KJ1831_00_plp_standard.jpg'
    },
    {
      name: 'Tenis Adizero Pacer',
      price: 529950,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/91633c29e80f4a7b999a46e5a974e1ad_9366/Tenis_Adizero_Pacer_Negro_KZ6848_00_plp_standard.jpg'
    },
    {
      name: 'Tenis De Running Supernova Glide',
      price: 629950,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/4a43d06545b04e00a9558f42eb390aae_9366/Tenis_de_Running_Supernova_Glide_Negro_KK2062_HM1.jpg'
    },
    {
      name: 'Tenis De Entrenamiento Dropset 4',
      price: 599950,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/099e246b4f35491db18fe7415eaa81ad_9366/Tenis_de_Entrenamiento_Dropset_4_Gris_KJ6611_HM1.jpg'
    },
    {
      name: 'Tenis De Entrenamiento Dropset Control',
      price: 449950,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/06f89e24437a4f639a079e2aae66c832_9366/tenis_de_entrenamiento_Dropset_Control_Gris_JQ1768_00_plp_standard.jpg'
    },
    {
      name: 'Tenis Runfalcon 6 ATR',
      price: 349950,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/435b373f65a04544b61542488b267779_9366/Tenis_Runfalcon_6_ATR_Verde_IH1830_00_plp_standard.jpg'
    },
    {
      name: 'Tenis Runvista',
      price: 269950,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/4a6f747cb10b4ca0a64295c0947c6940_9366/Tenis_Runvista_Blanco_JR4615_00_plp_standard.jpg'
    },
    {
      name: 'Tenis De Running Runfalcon 6 Cloudfoam',
      price: 299950,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/477fa9123c55462ba2ee66499b5806c9_9366/Tenis_de_Running_Runfalcon_6_Cloudfoam_Azul_KH5565_HM1.jpg'
    },
    {
      name: 'Zapatillas De Running Galaxy 8',
      price: 279950,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/97d40398732b4cc084b3969271cf2b2b_9366/Zapatillas_De_Running_Galaxy_8_Gris_IH9808_HM1.jpg'
    },
    {
      name: 'TENIS RESPONSE RUNNER 2',
      price: 219950,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/b233f1575a0844b2a8557b58c77c03d1_9366/TENIS_RESPONSE_RUNNER_2_Blanco_KK4299_00_plp_standard.jpg'
    },
  ];
  newsProducts = [
  {
    name: 'Tenis Runfalcon 6 ATR',
    price: 349950,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/e99b3721b9c9407388bb044211d87c53_9366/Tenis_Runfalcon_6_ATR_Negro_IH1826_HM1.jpg'
  },
  {
    name: 'Camiseta Local Real Madrid 26/27',
    price: 429950,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/d469289ff63043dfa85dda7aac99125f_9366/Camiseta_Local_Real_Madrid_26-27_Blanco_JZ7206_000_plp_model.jpg'
  },
  {
    name: 'Tenis De Running Runfalcon 6 Cloudfoam',
    price: 299950,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/5253505b8c074fdb895862e03d240419_9366/Tenis_de_Running_Runfalcon_6_Cloudfoam_Negro_IH9532_HM1.jpg'
  },
  {
    name: 'Tenis De Running Supernova Ease 2',
    price: 479950,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/a58797a7e85f4281a6caba88304ef464_9366/Tenis_de_Running_Supernova_Ease_2_Azul_KJ1831_00_plp_standard.jpg'
  },
  {
    name: 'Tenis Adizero Pacer',
    price: 399950,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/91633c29e80f4a7b999a46e5a974e1ad_9366/Tenis_Adizero_Pacer_Negro_KZ6848_00_plp_standard.jpg'
  },
  {
    name: 'Tenis De Running Supernova Glide',
    price: 629950,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/4a43d06545b04e00a9558f42eb390aae_9366/Tenis_de_Running_Supernova_Glide_Negro_KK2062_HM1.jpg'
  },
  {
    name: 'Tenis De Entrenamiento Dropset 4',
    price: 599950,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/099e246b4f35491db18fe7415eaa81ad_9366/Tenis_de_Entrenamiento_Dropset_4_Gris_KJ6611_HM1.jpg'
  },
  {
    name: 'Tenis De Entrenamiento Dropset Control',
    price: 449950,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/06f89e24437a4f639a079e2aae66c832_9366/tenis_de_entrenamiento_Dropset_Control_Gris_JQ1768_00_plp_standard.jpg'
  },
  {
    name: 'Tenis Runfalcon 6 ATR',
    price: 349950,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/435b373f65a04544b61542488b267779_9366/Tenis_Runfalcon_6_ATR_Verde_IH1830_00_plp_standard.jpg'
  },
  {
    name: 'Guayos F50 Hyperfast League Terreno Firme',
    price: 469950,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/b90b4d6d0a35425782f1408dfc43ad0f_9366/Guayos_F50_Hyperfast_League_Terreno_Firme_Rosa_IH9346_HM1.jpg'
  },
  {
    name: 'Tenis Runvista',
    price: 269950,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/4a6f747cb10b4ca0a64295c0947c6940_9366/Tenis_Runvista_Blanco_JR4615_00_plp_standard.jpg'
  },
  {
    name: 'Tenis De Running Runfalcon 6 Cloudfoam',
    price: 299950,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/477fa9123c55462ba2ee66499b5806c9_9366/Tenis_de_Running_Runfalcon_6_Cloudfoam_Azul_KH5565_HM1.jpg'
  }
];
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
