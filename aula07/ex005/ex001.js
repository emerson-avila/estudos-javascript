let num = (5 + 3) / 2



var a = 5 + 3 
var b = a % 5
var c = 5 * b ** 2  
var d = 10 - a % 2 
var e = 6 * 2 / 6 
var f = b % e + 4 / e

console.log(f)

var n = 3 
n = n + 3
n = n - 5
n = n ** 2 

console.log(n)

n += 2
n *= 2
n /= 4

console.log(n)

var x = 5
x--
x++ 
x++
x--

console.log(x)

++x
--x 

console.log(x)

var g = 5 > 2
var h = 7 < 2
var i = 8 >= 8 
var j = 9 <= 7 
var k = 5 == 5
var l = 4 != 4 

console.log(l)

var m = 5 == '5'
var o = 5 === '5'
var p = 5 != '5'
var q = 5 !== '5'

console.log(m)
console.log(o)
console.log(p)
console.log(q)

var a = 5 
var b = 8 

var c = a > b && b % 2 == 0
var d = a > b || b % 2 == 0
var e = a <= b && b - 2 == 10 // Um falso = falso
var f = a <= b || b - 2 == 10 // Um verdadeiro = verdadeiro

var idade = 18
var estado = 'RS'
var sexo = 'F'
var salario = 1500

var g = idade >= 15 && idade <= 22
var h = estado == 'RJ' || estado == 'SP'
var i = estado != 'RJ' || idade >= 16 
var j = estado != 'RJ' && idade >= 16 
var k = estado != 'RJ' && idade >= 16 && sexo == 'F'
var l = estado == 'RJ' || idade >= 16 && sexo == 'M' 
var m = idade >= 17 && estado == 'RS' && sexo != 'M' && salario >= 1200
var n = idade <= 17 || estado != 'RS' || sexo == 'M' || salario >= 1600

console.log(c)
console.log(d)
console.log(e)
console.log(f)
console.log(g)
console.log(h)
console.log(i)
console.log(j)
console.log(k)
console.log(l)
console.log(m)
console.log(n)

var media = 5.5
var valor = 8 

var a = media > 5?'Aprovado':'Reprovado'
var b = valor % 2 == 0 ? '5':'8'

console.log(a)
console.log(b)