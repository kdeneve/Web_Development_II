export function berekenPositie(arr) {
  let index = 0; 
  let totaal = 0;

  for (let i = 0; i < 7 ; i++) {
     
     let som = (arr[i]) + (arr[i+1]) + (arr[i+2]) + (arr[i+3]);
     console.log(i);
     console.log(som);

     if (som > totaal) {
      totaal = som;
      index = i;
     }
  }

return index;
}