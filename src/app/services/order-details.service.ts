import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails

  foodDetails = [
    {
      id:1,
      foodName:"Anallis Grego ",
      foodDetails:"Pan-fried masala paneer.",
      foodImg:'./assets/img/5e7f695dfe1ad713f0cc2518_600x600.jpeg'
    },
    {
      id:2,
      foodName:"Porta Secreta",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodImg:'./assets/img/99e7c290a108167aad9ac35d8c1634e5.jpeg'
    },
    {
      id:3,
      foodName:"Capitão Penetra",
      foodDetails:"panner",
      foodImg:'./assets/img/02980d8e4662cf506bbb9daa0a8361d5.jpeg'
    },
    {
      id:4,
      foodName:"Analdor",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodImg:'./assets/img/787e76c0d9b6e5e75a80e1daf7777360.jpeg'
    },
    {
      id:1,
      foodName:"Anallis Grego ",
      foodDetails:"Pan-fried masala paneer.",
      foodImg:'./assets/img/5e7f695dfe1ad713f0cc2518_600x600.jpeg'
    },
    {
      id:2,
      foodName:"Porta Secreta",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodImg:'./assets/img/99e7c290a108167aad9ac35d8c1634e5.jpeg'
    },
    {
      id:3,
      foodName:"Capitão Penetra",
      foodDetails:"panner",
      foodImg:'./assets/img/02980d8e4662cf506bbb9daa0a8361d5.jpeg'
    },
    {
      id:4,
      foodName:"Analdor",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodImg:'./assets/img/787e76c0d9b6e5e75a80e1daf7777360.jpeg'
    },
    {
      id:1,
      foodName:"Anallis Grego ",
      foodDetails:"Pan-fried masala paneer.",
      foodImg:'./assets/img/5e7f695dfe1ad713f0cc2518_600x600.jpeg'
    },
    {
      id:2,
      foodName:"Porta Secreta",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodImg:'./assets/img/99e7c290a108167aad9ac35d8c1634e5.jpeg'
    },
    {
      id:3,
      foodName:"Capitão Penetra",
      foodDetails:"panner",
      foodImg:'./assets/img/02980d8e4662cf506bbb9daa0a8361d5.jpeg'
    },
    {
      id:4,
      foodName:"Analdor",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodImg:'./assets/img/787e76c0d9b6e5e75a80e1daf7777360.jpeg'
    },{
      id:1,
      foodName:"Anallis Grego ",
      foodDetails:"Pan-fried masala paneer.",
      foodImg:'./assets/img/5e7f695dfe1ad713f0cc2518_600x600.jpeg'
    },
    {
      id:2,
      foodName:"Porta Secreta",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodImg:'./assets/img/99e7c290a108167aad9ac35d8c1634e5.jpeg'
    },
    {
      id:3,
      foodName:"Capitão Penetra",
      foodDetails:"panner",
      foodImg:'./assets/img/02980d8e4662cf506bbb9daa0a8361d5.jpeg'
    },
    {
      id:4,
      foodName:"Analdor",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodImg:'./assets/img/787e76c0d9b6e5e75a80e1daf7777360.jpeg'
    },{
      id:1,
      foodName:"Anallis Grego ",
      foodDetails:"Pan-fried masala paneer.",
      foodImg:'./assets/img/5e7f695dfe1ad713f0cc2518_600x600.jpeg'
    },
    {
      id:2,
      foodName:"Porta Secreta",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodImg:'./assets/img/99e7c290a108167aad9ac35d8c1634e5.jpeg'
    },
    {
      id:3,
      foodName:"Capitão Penetra",
      foodDetails:"panner",
      foodImg:'./assets/img/02980d8e4662cf506bbb9daa0a8361d5.jpeg'
    },
    {
      id:4,
      foodName:"Analdor",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodImg:'./assets/img/787e76c0d9b6e5e75a80e1daf7777360.jpeg'
    },{
      id:1,
      foodName:"Anallis Grego ",
      foodDetails:"Pan-fried masala paneer.",
      foodImg:'./assets/img/5e7f695dfe1ad713f0cc2518_600x600.jpeg'
    },
    {
      id:2,
      foodName:"Porta Secreta",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodImg:'./assets/img/99e7c290a108167aad9ac35d8c1634e5.jpeg'
    },
    {
      id:3,
      foodName:"Capitão Penetra",
      foodDetails:"panner",
      foodImg:'./assets/img/02980d8e4662cf506bbb9daa0a8361d5.jpeg'
    },
    {
      id:4,
      foodName:"Analdor",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodImg:'./assets/img/787e76c0d9b6e5e75a80e1daf7777360.jpeg'
    },{
      id:1,
      foodName:"Anallis Grego ",
      foodDetails:"Pan-fried masala paneer.",
      foodImg:'./assets/img/5e7f695dfe1ad713f0cc2518_600x600.jpeg'
    },
    {
      id:2,
      foodName:"Porta Secreta",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodImg:'./assets/img/99e7c290a108167aad9ac35d8c1634e5.jpeg'
    },
    {
      id:3,
      foodName:"Capitão Penetra",
      foodDetails:"panner",
      foodImg:'./assets/img/02980d8e4662cf506bbb9daa0a8361d5.jpeg'
    },
    {
      id:4,
      foodName:"Analdor",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodImg:'./assets/img/787e76c0d9b6e5e75a80e1daf7777360.jpeg'
    },{
      id:1,
      foodName:"Anallis Grego ",
      foodDetails:"Pan-fried masala paneer.",
      foodImg:'./assets/img/5e7f695dfe1ad713f0cc2518_600x600.jpeg'
    },
    {
      id:2,
      foodName:"Porta Secreta",
      foodDetails:"Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodImg:'./assets/img/99e7c290a108167aad9ac35d8c1634e5.jpeg'
    },
    {
      id:3,
      foodName:"Capitão Penetra",
      foodDetails:"panner",
      foodImg:'./assets/img/02980d8e4662cf506bbb9daa0a8361d5.jpeg'
    },
    {
      id:4,
      foodName:"Analdor",
      foodDetails:"A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodImg:'./assets/img/787e76c0d9b6e5e75a80e1daf7777360.jpeg'
    },
  ]




}
