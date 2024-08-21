var dia = new Date()
var diaSem = dia.getDay()

switch(diaSem) {
   
   case 0:
      
   diaSem = `Domingo`   
    break
   
   case 1:
      
    diaSem = `Segunda`
    break
   
   case 2:
      
    diaSem = `Terça`
    break
   
   case 3:
      
    diaSem = `Quarta`
    break
   
   case 4:
    
    diaSem = `Quinta`
    break
    
   case 5:
    
    diaSem = `Sexta`
    break
   
   default:
    
    diaSem = `Sábado` 
    break
   
}

console.log(diaSem)