function verificar() {
   
   let num = document.getElementById('txtn')
   let sel = document.getElementById('seltab')
   
   
   if (num.value.length == '') {
      
      window.alert(`Digite um número no campo indicado!`)
      
   } else {
   
      let n = Number(num.value)
      let c = 1
      
      sel.innerHTML = ''
      
      while(c <= 10) {
         
         let item = document.createElement('option')
         
         item.text = `${n} x ${c} = ${n*c}`
         
         item.value = `sel${c}`
         
         sel.appendChild(item)
          
         c++
         
      }
      
      
   }
   
}