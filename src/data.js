/** @format */

const BASE_URL = 'http://localhost:3000/'

export const sliderItems = [
  {
    image: 'assets/slides/slide1.jpg',
    link: BASE_URL + 'product/64313d580d667835112dff27',
    title: 'Huile Stimulante',
    price: 3.38
  },
  {
    image: 'assets/slides/slide2.jpg',
    link: BASE_URL + 'product/64313cf00d667835112dff25',
    title: 'Huile Purifiante',
    price: 3.85
  },
  {
    image: 'assets/slides/slide3.jpg',
    link: BASE_URL + 'product/64313f7c0d667835112dff2b',
    title: 'Huile Hydratante',
    price: 6.31
  }
]

export const categorieItems = [
  {
    id: 1,
    image: 'assets/categories/categorie2.jpg',
    category: 'cosmetiques'
  },
  {
    id: 2,
    image: 'assets/categories/categorie3.jpg',
    category: 'alimentaires'
  }
]

export const advicesItems = [
  {
    id: 1,
    title: 'Pourquoi utiliser des huiles végétales naturelles ?',
    content:
      "Il est conseillé de ne pas appliquer une huile essentielle pure directement sur la peau, au risque de la brûler. L'huile essentielle est automatiquement ajoutée à un excipient. On choisit plutôt une huile végétale en application direct, par massage, en soin du visage, sur le corps, ou sur les cheveux."
  },
  {
    id: 2,
    title: 'Comment choisir son huile végétale ?',
    content:
      "Le choix va dépendre du type de soin souhaité. D'abord, il va falloir regarder les propriétés des différentes huiles végétales et sélectionner celle qui répond à vos besoins. Ensuite, il faudra étudier sa compatibilité au regard du problème rencontré (peau sèche, chute de cheveux, etc)."
  },
  {
    id: 3,
    title: 'Comment conserver ses huiles végétales pures ?',
    content:
      'Nos huiles végétales sont 100 % naturelles et conditionnées dans un flacon ambré pour mieux les protéger et conserver leurs propriétés. Sensibles à la lumière, à la chaleur et à l’air, elles devront être conservées à l’abri pour éviter toute oxydation.'
  },
  {
    id: 4,
    title: 'Que dois-je faire avant et après une utilisation ?',
    content:
      "Il est important de se laver les mains avant et après avoir utilisé une huile végétale. Penser également à bien refermer le flacon d'huile végétale."
  }
]

export const productItems = [
  {
    id: 1,
    image: 'assets/products/product1.jpg',
    description: "Huile d'Amande douce",
    category: 'peau'
  },
  {
    id: 2,
    image: 'assets/products/product2.jpg',
    description: 'Huile de Nigelle',
    category: 'peau'
  },
  {
    id: 3,
    image: 'assets/products/product3.jpg',
    description: 'Huile de Ricin',
    category: 'cheveux'
  },
  {
    id: 4,
    image: 'assets/products/product4.jpg',
    description: "Huile d'Aloe vera",
    category: 'peau'
  },
  {
    id: 5,
    image: 'assets/products/product5.jpg',
    description: "Huile d'Argan",
    category: 'visage'
  }
]
