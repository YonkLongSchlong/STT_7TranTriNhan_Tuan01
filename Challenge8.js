const tips = [];
const totals = [];
const calcTips = (bills) => {
  bills.forEach((bill) => {
    bill >= 50 && bill <= 300
      ? (tip = (bill * 15) / 100)
      : (tip = (bill * 20) / 100);
    tips.push(tip);
    totals.push(tip + bill);
  });
};

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
calcTips(bills);
console.log(tips);
console.log(totals);

const calcAverage = (arr) => {
  let sum = 0;
  arr.forEach((x) => {
    sum = sum + x;
  });
  return sum / arr.length;
};

const total = calcAverage(totals);
console.log(total);
