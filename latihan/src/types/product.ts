import Redmi8 from "../assets/redmi8.png";

export const data = [
  {
    id: 1,
    name: "Redmi Note 8",
    price: 2000000,
    desc: "Redmi Note 8",
    image: Redmi8,
  },
  {
    id: 2,
    name: "Redmi Note 9",
    price: 3000000,
    desc: "Redmi Note 9",
    image: Redmi8,
  },
  {
    id: 3,
    name: "Redmi Note 10",
    price: 4000000,
    desc: "Redmi Note 10",
    image: Redmi8,
  },
  {
    id: 4,
    name: "Redmi Note 11",
    price: 5000000,
    desc: "Redmi Note 11",
    image: Redmi8,
  },
//   {
//     id: 5,
//     name: "Redmi Note 12",
//     price: 6000000,
//     desc: "Redmi Note 12",
//     image: Redmi8,
//   },
//   {
//     id: 6,
//     name: "Redmi Note 13",
//     price: 7000000,
//     desc: "Redmi Note 13",
//     image: Redmi8,
//   },    
];

export interface IProduct {
  id: number;
  name: string;
  price: number;
  desc: string;
  image: string;
}