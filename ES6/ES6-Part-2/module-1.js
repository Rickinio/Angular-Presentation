/*
--Named exports, we can have several per module
--Default exports, we can have only one per module
*/

console.log('loading module-1');
export let carId = 100;
export let engineType = 'diesel';
let geartType = 'manual';
export default geartType;