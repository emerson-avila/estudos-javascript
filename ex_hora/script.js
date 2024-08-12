function carregar() {
   
   let msg = window.document.getElementById('msg')
   let img = window.document.getElementById('img')
   let data = new Date()
   let hora = data.getHours()
   let min = data.getMinutes()
   
   msg.innerHTML = `Agora são ${hora} Horas e ${min} Minutos!`
   
   if (hora >= 5 && hora < 12) {
      
      img.src = 'imagens/manha.png'
      document.body.style.background = '#e2cd9f'
      
   } else if (hora > 12 && hora < 18) {
      
      img.src = 'imagens/tarde.png'
       document.body.style.background = '#b9846f'
       
   } else {
      
      img.src = 'imagens/noite.png'
       document.body.style.background = '#515154'
       
   }
}

