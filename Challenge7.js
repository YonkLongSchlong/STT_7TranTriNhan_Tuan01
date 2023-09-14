const mark = {
  fullname: "Mark Miller",
  height: 1.69,
  weight: 78,
};

const john = {
  fullname: "John Smith",
  height: 1.95,
  weight: 92,
};

const calcBMI = (Messurements) => {
  const BMI = Messurements.weight / (Messurements.height * Messurements.height);
  return BMI;
};

const markBMI = calcBMI(mark);
const johnBMI = calcBMI(john);

if (markBMI > johnBMI) {
  console.log(
    `${mark.fullname}'s BMI (${markBMI}) is higher than ${john.fullname}'s BMI (${johnBMI})`
  );
} else if (johnBMI > markBMI) {
  console.log(
    `${john.fullname}'s BMI (${johnBMI}) is higher than ${mark.fullname}'s BMI (${markBMI})`
  );
} else {
  console.log(
    `${john.fullname}'s BMI (${johnBMI}) is equal to ${mark.fullname}'s BMI (${markBMI})`
  );
}
