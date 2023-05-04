const coffeeMenu = require("./coffee_data.js");
console.log(coffeeMenu);
const printName = (item) => {
return item.name;
}
console.log(coffeeMenu.map(printName));
const UnderFive = (item) => {
    return item.price <= 5;
} 
const drinkUnderFive = coffeeMenu.filter(UnderFive);
console.table(drinkUnderFive);
const evenPrice = (item) => {
    return item.price % 2 === 0;
}
const drinkEvenPrice = coffeeMenu.filter(evenPrice);
console.table(drinkEvenPrice);