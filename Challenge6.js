const billCal = (bills) => {
  let tips = [];

  bills.forEach((bill) => {
    bill >= 50 && bill <= 300
      ? (tip = (bill * 15) / 100)
      : (tip = (bill * 20) / 100);
    tips.push(tip);
  });
  return tips;
};

const bills = [125, 555, 44];

const tips = billCal(bills);
console.log(`tips: ${tips}`);

let x = 0;
let y = 0;
for (int = 0; int < bills.length; int++) {
  x = x + bills[int];
  y = y + tips[int];
}
const total = x + y;
console.log(`total: ${total}`);
