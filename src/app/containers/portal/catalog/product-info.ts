import { ProductInfo } from "./productinfo";

export const productsInfo: ProductInfo[] = [
  new ProductInfo({
    name: 'test 1',
    description: 'Изготовитель дверей, который предлагает элитные решения для вашего дома.',
    price: 100,
    imageLink: 'assets/images/space.jpg'
  }),
  new ProductInfo({
    name: 'test 3',
    description: 'Изготовитель, предлагает элитные решения для вашего дома.',
    price: 0,
    imageLink: 'assets/images/space.jpg'
  }),
  new ProductInfo({
    name: 'test 2',
    description: 'Изготовитель, который предлагает элитные решения для вашего дома.',
    price: 200,
    imageLink: 'assets/images/space.jpg'
  }),
  new ProductInfo({
    name: 'test 3',
    description: 'Изготовитель, предлагает элитные решения для вашего дома.',
    price: 500,
    imageLink: 'assets/images/space.jpg'
  }),
]
