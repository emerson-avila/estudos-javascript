function carregar() {
   
   var d = new Date(); // for now
   d.getHours(); // => 9
   d.getMinutes(); // =>  30
   d.getSeconds(); // => 51
   
   console.log(d.getHours(), d.getMinutes(), d.getSeconds())
   
}

setInterval(carregar, 1000)


