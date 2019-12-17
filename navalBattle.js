function navalBattle () {
    let letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'];
    let numTotal = [];
    for (let i = 0; i < letters.length; i++) {
        for (let u = 1; u<16; u++) {
            let element = `${letters[i]}-${u}`;
            numTotal.push(element);
            }
        }
        return numTotal;
    }
   console.log(navalBattle());
    
