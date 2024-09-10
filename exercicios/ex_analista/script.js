
let valores = []

function isNumero(n) {
   
   if(Number(n) >= 1 && Number(n) <= 100){
      
      return true
      
   } else {
      
      return false
      
   }
   
}

function inLista(n, l){
   
   if(l.indexOf(Number(n)) != -1) {
      
      return true
      
   } else {
      
      return false
      
   }
   
}

function adicionar() {
   
   let num = document.getElementById('txtnumero').value
   let lista = document.getElementById('flista')
   
   if(isNumero(num) && !inLista(num, valores)) {
      
      valores.push(Number(num))
      let item = document.createElement('option')
      item.text = `Valor ${num} adicionado a Lista!`
      lista.appendChild(item)
      res.innerHTML = ''
      
   } else {
      
      alert('[ERRO] Valor inálido ou já adicionado!')
      
   }
   
}

function verificar() {

   let res = document.getElementById('res')
   
   

}