export function vertaal(zin) {
  let pzin = "",
    lettersTeHerhalen = "";

  for (const letter of zin) {
    if ("aeiouAEIOU".indexOf(letter) > -1) {
      lettersTeHerhalen += letter;
    } else {
      if (lettersTeHerhalen.length > 0) {
        pzin = herhaal(pzin, lettersTeHerhalen);
        lettersTeHerhalen = "";
      }
    }
    pzin += letter;
  }
  if (lettersTeHerhalen.length > 0) {
    pzin = herhaal(pzin, lettersTeHerhalen);
  }
  return pzin;
}

function herhaal(zin, lettersTeHerhalen) {
  return (zin += "p" + lettersTeHerhalen);
}

// export function vertaal(zin) {

//   let pzin = "";

//   for (let i = 0; i < zin.length; i++) {

//     switch (zin[i]) {
//       case ('a' || 'A'):
//         {
//           pzin += zin[i] + 'p' + 'a';
//           break;
//         }
//       case ('e'):
//         {
//           pzin += zin[i] + 'p' + zin[i]
//           break;
//         }
//       case ('i'):
//         {
//           if (zin[i+1] === 'j'){
//             pzin =+ 'ij' + 'p' + 'ij';
//            i++;
//            break;
//           }
//           else pzin += zin[i] + 'p' + zin[i]
//           break;
//         }
//       case ('o'):
//         {
//           pzin += zin[i] + 'p' + zin[i]
//           break;
//         }
//       case ('u'):
//         {
//           if (zin[i+1] === 'i') {
//            pzin =+ 'ui' + 'p' + 'ui';
//            i++;
//            break;
//           }
//           else pzin += 'u' + 'p' + 'u'
//           break;
//         }
//       default:
//         pzin += zin[i]
//     }

//   }
//   return pzin
// }