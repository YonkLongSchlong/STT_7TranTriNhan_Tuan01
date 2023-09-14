/* DATA 1 */
arr1 = [17, 21, 23];

/* DATA 2 */
arr2 = [12, 5, -5, 0, 4];

const prinForecast = (arr) => {
  let i = 1;
  arr.forEach((x) => {
    console.log(`${x}oC in ${i++} days`);
  });
};

prinForecast(arr2);
