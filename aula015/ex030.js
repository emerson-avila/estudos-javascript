let num = [8, 5, 2]

num[3] = 25
num.push(10) 
num.sort((a, b) => a - b);

console.log(num)

let pos = num.indexOf(15)

if (pos == -1) {
   
   console.log('Posição inexistete!')
   
} else {

console.log(pos)

}