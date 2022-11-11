

/** Clamp value between min and max
 * @param {number} value (number)
 * @param {number} a (number) min
 * @param {number} b (number) max
 * @returns (number) Clamped value
 */
const clamp = async (value, a, b) => {
    return this.min(await this.max(value, a), b);
}
const abs = async (value) => {
    return (value ^ (value >> 31)) - (value >> 31);
}

const min = async (a, b) => {
    return (a < b) ? a : b;
}
const max = async (a, b) => {
    return (a > b) ? a : b;
}

const round = async (number) => {
    return number + (number < 0 ? -0.5 : 0.5) >> 0;
}

const floor = async (number) => {
    return number + (number < 0 ? -1 : 0) >> 0;
}

const ceil = async (number) => {
    return number + (number < 0 ? 0 : 1) >> 0;
}

const getRandomInt = async (min = 0, max = 100) => {
    min = ~~(min);
    max = ~~(max);
    return (max > min) ? ~~(Math.random() * (max - min + 1) + min) : min;
}

/** Used to get percentage between two numbers
 * @param {number} num1 first number input
 * @param {number} num2 second number input
*/
const getPercentDiff = (num1, num2) => {
    return (num1 / num2) * 100;
}

/** Used to get percentage difference between two numbers
 * @param {number} num1 first number input (percentage)
 * @param {number} num2 second number input (value to get percentage of)
 */
const getPercentOf = (num1, num2) => {
    return (num1 / 100) * num2;
}

/** true if lucky, false if unlucky
 * @param {number} percentage 
 * @returns bool
 */
const getPercentRandomBool = async (percentage) => {
    return (~~(Math.random() * 100) < percentage);
}

/** extension for getRandomInt(1, max)
 * @param {number} max 
 * @returns number
 */
const getRandomIntEx = (max) => {
    return this.getRandomInt(1, max);
}

const syncGetRandomIntInc = (min, max) => {
    min = min + (min < 0 ? -0.5 : 0.5) >> 0;
    max = max + (max < 0 ? -0.5 : 0.5) >> 0;

    const number = Math.random() * (max - min + 1) + min
    return number + (number < 0 ? -0.5 : 0.5) >> 0;
}

/**
 * @param {number} min 
 * @param {number} max 
 * @returns 
 */
const getRandomIntInc = async (min, max) => {
    min = await round(min);
    max = await round(max);
    return round(Math.random() * (max - min + 1) + min);
}

/**
 * Create random amount of numbers that equal total
 * @param {int} total 
 * @returns {<Promise> arr}
 */
const getRandomSplitInt = async (total) => {
    const output = [];
    while (total > 0) {
        const sum = await round(Math.random() * (total - 1)) + 1;
        output.push(sum);
        total -= sum;
    }
    return output;
}

const valueBetween = (value, minInput, maxInput, minOutput, maxOutput) => {
    return (maxOutput - minOutput) * ((value - minInput) / (maxInput - minInput)) + minOutput
}

/**
 * @param {[]} array 
 * @returns {<Promise> string} rolled value
 */
const getRandomFromArray = async (array) => {
    return array[await getRandomInt(0, array.length - 1)];
}

const getRandomFromObject = async (obj) => {
    const keys = Object.keys(obj);
    return obj[keys[keys.length * Math.random() << 0]]
}


module.exports = {
    clamp,
    round,
    min,
    max,
    abs,
    floor,
    ceil,
    getRandomInt,
    getRandomIntEx,
    getRandomIntInc,
    syncGetRandomIntInc,
    getPercentDiff,
    getPercentOf,
    getPercentRandomBool,
    getRandomFromArray,
    getRandomFromObject,
    valueBetween,
    getRandomSplitInt
};