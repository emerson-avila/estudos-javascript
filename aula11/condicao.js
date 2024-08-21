var vel = 250
var lim = 50

console.log(`A velocidade do seu carro é de ${vel}km/h!`)

if (vel > 50) {
   
   var soma = vel - lim
   
   console.log(`Vc ultrapassou ${soma}km/h a cima do limite de velocidade (${lim}km/h)!`)
   console.log(`Vc foi multado!`)
   
} else {
   
   console.log(`Vc é um bom motorista!`)
   
}