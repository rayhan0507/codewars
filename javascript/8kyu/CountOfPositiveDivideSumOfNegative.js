const countPositivesSumNegatives = (input) => {
    if (!Array.isArray(input) || input.length === 0) {
        return [];
    };
    const positiveArray = input.filter(x => x > 0);
    const pos = positiveArray.length;
    const neg = input.filter(x => x < 0).reduce((prev, curr) => prev + curr, 0);
    return [pos, neg];
};

console.log(countPositivesSumNegatives([1,1,-1,-1])) // [ 2, -2 ]
console.log(countPositivesSumNegatives([])) // []