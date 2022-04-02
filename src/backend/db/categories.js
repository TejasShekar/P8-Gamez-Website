import { v4 as uuid } from "uuid";
import img1 from '../../assets/action.webp'
import img2 from '../../assets/adventure.webp'
import img3 from '../../assets/racing.webp'
import img4 from '../../assets/sports.webp'


export const categories = [
  {
    _id: uuid(),
    categoryName: "action",
    src: img1,
    name: "Action Games",
  },
  {
    _id: uuid(),
    categoryName: "adventure",
    src: img2,
    name: "Adventure Games",
  },
  {
    _id: uuid(),
    categoryName: "racing",
    src: img3,
    name: "Racing Games",
  },
  {
    _id: uuid(),
    categoryName: "sports",
    src: img4,
    name: "Sports Games",
  },
];
