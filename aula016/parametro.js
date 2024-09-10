
   function somar( n1=0 , n2=0) {
      
      return n1 + n2
      
   }
   
   // console.log(somar(5))
   
   let pos = function(n) {
      
      return n+25
      
   }
   
   // console.log(pos(5))
   
   function fatorial(n) {
      
      let fat = 1 
      
      for(let c = n; c > 1; c--) {
         
         fat *= c
      
        
      }
       return fat
      
   }
   
   // console.log(fatorial(170))
   
   function fatora(n) {
      
      if( n == 1 ) {
         
         return 1
         
      } else {
         
         return n * fatorial(n-1)
         
      }
      
   }
   
   console.log(fatora(10))