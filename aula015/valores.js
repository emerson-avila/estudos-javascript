let val = [2, 5, 6, 10, 1, 4, 0]  

val.sort((a, b) => a - b);

// for(let v = 0; v < val.length; v++) {
   
//    console.log( `A posição ${v} tem o valor ${val[v]}`)
   
// }

for(let pos in val) {
   
   console.log(`A posição ${pos} tem o valor ${val[pos]}`)
   
}