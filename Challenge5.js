/* DATA 1 */
const dolphinScore = [44, 23, 71];
const koalaScore = [65, 54, 49];

/* DATA 2 */
// const koalaScore = [23,34,27];
// const dolphinScore = [85,54,41];


const averageScore = (score) => {
    const totalScore = score.reduce((scoreAcc, scoreNum) => {
        return scoreAcc + scoreNum;
    });
    const averageScore = totalScore / 3;
    return averageScore;
}

const avgDolphin = averageScore(dolphinScore);
const avgKoala = averageScore(koalaScore);

const checkWinner = (avgDolphin, avgKoala) => {

    if (avgDolphin > avgKoala && avgDolphin >= avgKoala * 2) {
        console.log(`Dolphin ${avgDolphin} win over Koala ${avgKoala} `);
    } else if (avgKoala > avgDolphin && avgKoala >= avgDolphin) {
        console.log(`Koala ${avgKoala} win over Dolphin ${avgDolphin} `);
    } else {
        console.log('No team win the trophy');
    }

}

checkWinner();