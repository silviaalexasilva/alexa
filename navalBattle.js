function navalBattle () {
    let arrayLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'];
    let arrTotal = [];
    for (let i = 0; i < arrayLetters.length; i++) {
        for (let u = 1; u<16; u++) {
            let element = `${arrayLetters[i]}-${u}`;
            arrTotal.push(element);
            }
        }
        console.log(arrTotal);
    }
    navalBattle();