function add(num1, num2) {
    return num1 + num2;
}
function multi(num1, num2) {
    return num1 * num2;
}

export { add, multi }

//reduce

const numbers = [33, 12, 77];
let sum = 0;
for (const num of numbers) {
    sum = sum + num;
}
const reducer = (previous, current) => previous + current;
numbers.reduce(reducer, 0)


const cosmetics = [
    { id: 1, name: 'Alta', price: 1200 },
    { id: 2, name: 'snow', price: 200 },
    { id: 3, name: 'powder', price: 100 }
]

let total = 0;
for (const cos of cosmetics) {
    total = total + cos.price;
}

const cosmeticsReducer = (previous, current) => previous + current.price;
const cosmeticsTotal = cosmetics.reduce(cosmeticsReducer, 0)