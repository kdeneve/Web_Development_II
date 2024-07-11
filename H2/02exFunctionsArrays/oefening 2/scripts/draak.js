let eindeSpel = false;
let totaleSchade = 0;

function slaDeDraak() {
  if (Math.random() > 1/2)
    return Math.floor(Math.random() * 5 + 1); // The maximum is exclusive and the minimum is inclusive
  else return 0;
}

while (!eindeSpel) {
  const resultaat = slaDeDraak();
  console.log(resultaat);

  if (resultaat === 0) {
      console.log('Je werd verslaan door de draak');
      break;
  }

  else totaleSchade += resultaat;
  console.log(totaleSchade);

  if (totaleSchade > 4) {
    console.log('Je hebt de draak verslagen');
    eindeSpel = true;
  }
    
}

