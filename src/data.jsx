import arcade from "./assets/images/icon-arcade.svg";
import advanced from "./assets/images/icon-advanced.svg";
import pro from "./assets/images/icon-pro.svg";
export const optionsData = [
  {
    header: "Online Service",
    text: "Access to multidlaver games",
    price_mo: "+$1/mo",
    price_yr: "+$10/yr",
    checked: false,
    id: "1",
  },
  {
    header: "Larger Storage",
    text: "Extra 1TB or cloud save",
    price_mo: "+$2/mo",
    price_yr: "+$20/yr",
    checked: false,
    id: "2",
  },
  {
    header: "Customizable profile",
    text: "Custom theme on your profile",
    price_mo: "+$2/mo",
    price_yr: "+$20/yr",
    checked: false,
    id: "3",
  },
];

export const planData = [
  {
    id: "1",
    img: arcade,
    header: "Arcade",
    price_mo: "$9/mo",
    price_yr: "$90/yr",
    selected: false,
  },
  {
    id: "2",
    img: advanced,
    header: "Advanced",
    price_mo: "$12/mo",
    price_yr: "$120/yr",
    selected: false,
  },
  {
    id: "3",
    img: pro,
    header: "Pro",
    price_mo: "$15/mo",
    price_yr: "$150/yr",
    selected: false,
  },
];
