function contar() {

   let ini = document.getElementById('inicio')
   let fim = document.getElementById('fim')
   let pas = document.getElementById('passo')
   
   let res = document.getElementById('res')
   
   if(ini.value.length == 0 || fim.value.lengt == 0 || pas.value.length == 0){
      
      window.alert(`[ERRO] Faltam números para validação!`)
      res.innerHTML= `Impossível contar!`
      
   } else {
      
      res.innerHTML = `Contando: <br>`
      
      let i = Number(ini.value)
      let f = Number(fim.value)
      let p = Number(pas.value)
      
      if(p <= 0) {
         
         window.alert('Passo inválido! Considerando Passo 1!')
         p = 1
         
      }
      
      if(i < f) {
          
         for(let c = i; c <= f; c += p) {
            
            res.innerHTML += `  ${c} \u{1F449}`
            
         }
            
      } else {
          
         for(let c = i; c >= f; c -= p) {
            
            res.innerHTML += `  ${c} \u{1F449}`
            
         }
            
      }
   }

}