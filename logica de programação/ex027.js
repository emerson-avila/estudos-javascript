/*
   vetores (Arrays)
   è uma estrutura que permite armazenar informações de forma sequenciada.
*/ 

var valores = [150.25, 145.2, 125.5, 100]

for(let i = 0; i < valores.length; i++ ) {
   
  console.log(valores[i])
   
} 

/* 
   Matrizes
*/

let nomes = [[2,4], [2,8]]

for(let l = 0; l < nomes.length; l++) {
   
   for(let c = 0; c < nomes[l].length; c++) {
      
      console.log(nomes[l, c])
   
      
   }
   
}
