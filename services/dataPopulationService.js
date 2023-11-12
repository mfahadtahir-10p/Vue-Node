import request from 'request';
import { readDB, writeDB } from './dbService.js';

export function getImagesfromPexels(){
    let options = {
        'method': 'GET',
        'url': 'https://api.pexels.com/v1/collections/7g4sejt?per_page=80',
        'headers': {
            'Authorization': '6QG35xaGfUvLaljGSYz5GfBQeeQiW0l5n5IwCefOSsSg8iXGTWKIih1n'
        }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        console.log(response.body)
        writeDB('images', response.body);
    });
}
  


export async function addToShoes() {
    let shoes = await readDB('shoes');
    let images = await readDB('images');
    let sale = [];

    let newShoes = shoes.map(shoe => ({
        ...shoe,
        image: images[Math.floor(Math.random() * images.length)]?.id,
        sold: Math.floor(Math.random() * 1000)
    }))
    writeDB('shoes', newShoes);
    return sale;
}

export async function createSalesData() {
    let shoes = await readDB('shoes');
    let images = await readDB('images');
    let sale = [];
    let salesNumber = Math.random() * 5000;
    for (let i = 0; i < salesNumber; i++) {
        console.log(shoes)
        let shoe = shoes[Math.floor(Math.random() * shoes.length)];
        let salePrice = shoe.price  * (Math.floor(Math.random() * 50) + 50) / 100;
        let saleItem = {
            id: shoe.id,
            name: shoe.name,
            date: new Date(Math.floor(Math.random() * 2023) + 1, Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 30) + 1),
            image: images[Math.floor(Math.random() * images.length)]?.id,
            price: salePrice,
            sale: true
        };
        sale.push(saleItem);
    }
    writeDB('sale', sale);
    return sale;
  }