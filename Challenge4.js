const billCal = (bill) => {
    let tip;

    (bill >= 50 && bill <= 300) ? tip = bill * 15 / 100: tip = bill * 20 / 100
    console.log(tip);
}

billCal(300);