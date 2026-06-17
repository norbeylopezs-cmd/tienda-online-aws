import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cart } from '../cart';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carrito.html',
  styleUrl: './carrito.css'
})
export class Carrito {

  constructor(public cartService: Cart) {}

  recommendedProducts = [
    {
      name: 'Tenis Galaxy 6',
      price: 249950,
      category: 'Performance',
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/5253505b8c074fdb895862e03d240419_9366/Tenis_de_Running_Runfalcon_6_Cloudfoam_Negro_IH9532_HM1.jpg'
    },
    {
      name: 'Tenis De Running Duramo SL 2',
      price: 349950,
      category: 'Performance',
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/e99b3721b9c9407388bb044211d87c53_9366/Tenis_Runfalcon_6_ATR_Negro_IH1826_HM1.jpg'
    },
    {
      name: 'Tenis Galaxy 6',
      price: 249950,
      category: 'Performance',
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/91633c29e80f4a7b999a46e5a974e1ad_9366/Tenis_Adizero_Pacer_Negro_KZ6848_00_plp_standard.jpg'
    },
    {
      name: 'Tenis Samba OG',
      price: 499950,
      category: 'Originals',
      image: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/4a6f747cb10b4ca0a64295c0947c6940_9366/Tenis_Runvista_Blanco_JR4615_00_plp_standard.jpg'
    }
  ];

}