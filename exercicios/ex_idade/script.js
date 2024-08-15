
function verificar() {
   
   var data = new Date()
   var ano = data.getFullYear()
   let fano = document.getElementById('txtano')
   let res = document.getElementById('res')
   
   if (fano.value.length == 0 || Number(fano.value) > ano) {
      
      window.alert('[ERRO] Corrija seus dados e tente novamente!')
      
   } else {
      
      let fsexo = document.getElementsByName('radsexo')
      let idade = ano - Number(fano.value)      
      
      let gênero = ''
      
      let img = document.createElement('img')
      img.setAttribute('id', 'foto')
      
      if (fsexo[0].checked) {
         
         gênero = 'Homem'
         
         if (idade >= 0 && idade < 10) {
            
            img.setAttribute('src', 'bebemacho.png')
            
         } else if (idade < 21) {
            
            img.setAttribute('src', 'imagens/jovemmacho.png')
            
         } else if (idade < 50) {
            
            img.setAttribute('src', 'imagens/homem.png')
            
         } else {
            
            img.setAttribute('src', 'imagens/idoso.png')
            
         }
         
      } else {
         
         gênero = 'Mulher'
         
         if (idade >= 0 && idade < 10) {
            
            img.setAttribute('src', 'imagens/bebefemea.png')
            
         } else if (idade < 21) {
            
            img.setAttribute('src', 'imagens/jovemfemea.png')
            
         } else if (idade < 50) {
            
            img.setAttribute('src', 'imagens/mulher.png')
            
         } else {
            
            img.setAttribute('src', 'imagens/idosa.png')
            
         }
         
      }
      
      res.innerHTML = `Detectamos ${gênero} com ${idade} Anos!`
      res.appendChild(img)
   }
   
}