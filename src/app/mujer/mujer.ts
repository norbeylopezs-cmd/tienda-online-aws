import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Cart } from '../cart';

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
export class Mujer {
  constructor(
  public cartService: Cart,
  private router: Router
) {}
  mostrarTienda() {
  return window.location.pathname !== '/carrito';
}
goToCart() {
  this.router.navigate(['/carrito']);
}

   // Lista de productos disponibles en la tienda
  products = [
    {
      name: 'Tenis De Running Galaxy 8',
      price: 279950,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/df881abefe3f42e4aac1cd2513208f05_9366/Tenis_de_Running_Galaxy_8_Negro_IH9795_00_plp_standard.jpg'
    },
    {
      name: 'Tenis Runfalcon 6',
      price: 299950,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/a6bec765f30b4389bebd1c46133d3bac_9366/Tenis_Runfalcon_6_Negro_IH9537_HM1.jpg'
    },
    {
      name: 'Tenis Barreda Mary Jane',
      price: 349950,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/1b304a8e6939473b803e9d30e3b2788e_9366/Tenis_Barreda_Mary_Jane_Blanco_KI2755_00_plp_standard.jpg'
    },
    {
      name: 'Tenis Samba Jane adidas Pixar Toy Story',
      price: 499950,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/92de16a7e36f4786a90fb680c9504a6d_9366/Tenis_Samba_Jane_adidas_Pixar_Toy_Story_Blanco_LA1428_00_plp_standard.jpg'
    },
    {
      name: 'Tenis De Running Response 2',
      price: 349950,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/a40cc1a006444b8195382b880769059d_9366/Tenis_de_Running_Response_2_Azul_KK4287_00_plp_standard.jpg'
    },
    {
      name: 'Tenis Adizero Pacer',
      price: 399950,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/6c9fabda6f1c4c53bcfcf9d4557ff21f_9366/Tenis_Adizero_Pacer_Azul_KZ8976_00_plp_standard.jpg'
    },
    {
      name: 'Tenis De Running Supernova Glide',
      price: 629950,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/03a967ae30274fd993aab8f446bf5d36_9366/Tenis_de_Running_Supernova_Glide_Blanco_KJ1866_00_plp_standard.jpg'
    },
    {
      name: 'Tenis Runfalcon 6 ATR',
      price: 349950,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/710a0f353290487c9698d36f9016772e_9366/Tenis_Runfalcon_6_ATR_Beige_IH1838_HM1.jpg'
    },
    {
      name: 'Tenis De Running Runfalcon 5',
      price: 279950,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/8a6cd5ffec894cdbbb59fa0a14137376_9366/Tenis_de_Running_Runfalcon_5_Gris_JQ6300_00_plp_standard.jpg'
    },
    {
      name: 'Tenis De Running Galaxy 8',
      price: 279950,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/d2ffc67a5651444d945f9c032d221f79_9366/Tenis_de_Running_Galaxy_8_Morado_IH9792_HM1.jpg'
    },
    {
      name: 'Tenis De Entrenamiento Dropset Base',
      price: 299950,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/21702ce2a19d44bfa2aa1e64bc27a0c0_9366/tenis_de_Entrenamiento_Dropset_Base_Blanco_LA3871_00_plp_standard.jpg'
    },
   {
      name: 'TENIS RESPONSE RUNNER 2',
      price: 219950,
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/b233f1575a0844b2a8557b58c77c03d1_9366/TENIS_RESPONSE_RUNNER_2_Blanco_KK4299_00_plp_standard.jpg'
    },
  ];
  newsProducts = [
  {
    name: 'Tenis De Running Galaxy 8',
    price: 279950,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/df881abefe3f42e4aac1cd2513208f05_9366/Tenis_de_Running_Galaxy_8_Negro_IH9795_00_plp_standard.jpg'
  },
  {
    name: 'Tenis Runfalcon 6',
    price: 299950,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/a6bec765f30b4389bebd1c46133d3bac_9366/Tenis_Runfalcon_6_Negro_IH9537_HM1.jpg'
  },
  {
    name: 'Tenis Barreda Mary Jane',
    price: 349950,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/1b304a8e6939473b803e9d30e3b2788e_9366/Tenis_Barreda_Mary_Jane_Blanco_KI2755_00_plp_standard.jpg'
  },
  {
    name: 'Tenis Samba Jane Adidas Pixar Toy Story',
    price: 499950,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/92de16a7e36f4786a90fb680c9504a6d_9366/Tenis_Samba_Jane_adidas_Pixar_Toy_Story_Blanco_LA1428_00_plp_standard.jpg'
  },
  {
    name: 'Tenis De Running Response 2',
    price: 349950,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/a40cc1a006444b8195382b880769059d_9366/Tenis_de_Running_Response_2_Azul_KK4287_00_plp_standard.jpg'
  },
    {
    name: 'Camiseta Visitante Selección Colombia 26',
    price: 379950,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/31233c4ba59c4785856f8346b109fd6f_9366/Camiseta_Visitante_Seleccion_Colombia_26_Azul_JZ8843_000_plp_model.jpg'
  },
  {
    name: 'Guayos F50 Hyperfast League Terreno Firme',
    price: 469950,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/b90b4d6d0a35425782f1408dfc43ad0f_9366/Guayos_F50_Hyperfast_League_Terreno_Firme_Rosa_IH9346_HM1.jpg'
  },
  {
    name: 'Tenis Adizero Pacer',
    price: 399950,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/6c9fabda6f1c4c53bcfcf9d4557ff21f_9366/Tenis_Adizero_Pacer_Azul_KZ8976_00_plp_standard.jpg'
  },
  {
    name: 'Tenis De Running Supernova Glide',
    price: 629950,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/03a967ae30274fd993aab8f446bf5d36_9366/Tenis_de_Running_Supernova_Glide_Blanco_KJ1866_00_plp_standard.jpg'
  },
  {
    name: 'Tenis Runfalcon 6 ATR',
    price: 349950,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/710a0f353290487c9698d36f9016772e_9366/Tenis_Runfalcon_6_ATR_Beige_IH1838_HM1.jpg'
  },
  {
    name: 'Tenis De Running Runfalcon 5',
    price: 279950,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/8a6cd5ffec894cdbbb59fa0a14137376_9366/Tenis_de_Running_Runfalcon_5_Gris_JQ6300_00_plp_standard.jpg'
  },
  {
    name: 'Tenis De Running Galaxy 8',
    price: 279950,
    image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/d2ffc67a5651444d945f9c032d221f79_9366/Tenis_de_Running_Galaxy_8_Morado_IH9792_HM1.jpg'
  },
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
  // Elimina productos del carrito
  removeFromCart(index: number) {
  this.cartService.removeFromCart(index);
}
}