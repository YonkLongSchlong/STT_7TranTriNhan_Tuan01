/*DATA 1*/
// const markHeight = 78;
// const markWeight = 1.68;

// const johnHeight = 92;
// const johnWeight = 1.95;

/*DATA 2*/
const markHeight = 95;
const markWeight = 1.88;

const johnHeight = 85;
const johnWeight = 1.76;

const calculate = (height, weight) => {
    const BMI = weight / (height * height);
    return BMI;
}

const markBmi = calculate(markWeight, markHeight);
console.log(markBmi);

const johnBmi = calculate(johnWeight, johnHeight);
console.log(johnBmi);


if (markBmi > johnBmi) {
    console.log(`Mark's BMI ${markBmi} is higher than John's ${johnBmi}`);
} else {
    console.log(`John's BMI ${johnBmi} is higher than Mark's ${markBmi}`);
}