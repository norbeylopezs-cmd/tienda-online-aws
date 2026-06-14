import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Configuración del componente principal
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

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
  // Carrito de compras
  cart: any[] = [];

  // Total acumulado de compra
  total = 0;

  // Agrega productos al carrito y actualiza el total
  addToCart(productName: string, price: number) {

    this.cart.push({
      name: productName,
      price: price
    });

    this.total += price;

    console.log(this.cart);
  }
  // Elimina productos del carrito
  removeFromCart(index: number) {

    this.total -= this.cart[index].price;

    this.cart.splice(index, 1);
  }
}