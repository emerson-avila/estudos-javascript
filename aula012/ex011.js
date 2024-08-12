const agora = new Date()
const hora = agora.getHours()

console.log(`Agora são ${hora} horas`)

if (hora < 12) {
   console.log(`Bom di princisi`)
} else if(hora >12 && hora < 18) {
   console.log(`Boa tirdi`)
} else {
   console.log('Boa Noite')
}