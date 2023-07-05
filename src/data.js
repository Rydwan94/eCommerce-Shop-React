import laptop from './img/laptop dell.jpg'
import ihpone from './img/iphone 13.png'
import headphones from './img/słuchawki wh.jpg'
import ps5 from './img/ps5.jpg'

export const products = [
    {
        id: 1,
        name: "Laptop Dell XPS 13",
        description: "13-calowy laptop z ekranem InfinityEdge i procesorem 11. generacji Intel Core.",
        price: 5999.99,
        image: laptop,
        category: 'Computers',
        favourite: false
    },
    {
        id: 2,
        name: "Smartfon Apple iPhone 13",
        description: "Najnowszy model iPhone z 5G i A15 Bionic.",
        price: 4999.99,
        image: ihpone,
        category: "Phones",
        favourite: false
    },
    {
        id: 3,
        name: "Słuchawki Sony WH-1000XM4",
        description: "Bezprzewodowe słuchawki z redukcją szumów.",
        price: 1199.99,
        image: headphones,
        category: "Audio",
        favourite: false
    },
    {
        id: 4,
        name: "Konsola Sony PlayStation 5",
        description: "Odkryj nową erę gier i rozrywki z PlayStation 5.",
        price: 2199.99,
        image: ps5,
        category: "Games",
        favourite: false
    }
    //... więcej produktów
];