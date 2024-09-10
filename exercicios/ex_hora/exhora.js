function carregar() {
   
   var d = new Date(); // for now
   d.getHours(); // => 9
   d.getMinutes(); // =>  30
   d.getSeconds(); // => 51
   
   let data = 12
   
   let msg = document.getElementById('msg')
   let img = document.getElementById('img')
   
   msg.innerText = `Agora são: ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
   
   if (data >= 6 && data < 12) {
      
     img.src = 'imagens/manha.png'
     document.body.style.background = '#005500'
      
   } else if (data >= 12 && data <= 18) {
      
      img.src = 'imagens/tarde.png'
      document.body.style.background = '#b9846f'
      
   } else {
      
      img.src = 'imagens/noite.png'
      document.body.style.background = '#bf9846'
      
   }
   
}

setInterval(carregar, 1000) // Hora em tempo real


