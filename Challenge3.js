const averageScore = (score) => {
    const totalScore = score.reduce((scoreAcc, scoreNum) => {
        return scoreAcc + scoreNum;
    });
    const averageScore = totalScore / 3;
    return averageScore;
}

const dolphinScore = averageScore([96, 108, 89])
const koalaScore = averageScore([88, 91, 110])

if (dolphinScore >= 100 || koalaScore >= 100) {
    if (dolphinScore > koalaScore) {
        console.log(`Dolphin ${dolphinScore} win over Koala ${koalaScore} `);
    } else if (koalaScore > dolphinScore) {
        console.log(`Koala ${koalaScore} win over Dolphin ${dolphinScore} `);
    } else {
        console.log(`It's a tie with Dolphin ${dolphinScore} and koalaScore ${koalaScore}`);
    }
} else {
    console.log('No team win the trophy');
}