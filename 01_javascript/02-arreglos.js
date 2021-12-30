let arreglo= [6,7,8,9,10]

for(let numero of arreglo){
    //console.log(numero)
}
console.log()

for(let numero in arreglo){
    //console.log(numero)
}

console.log("Push")
//ingresa un valor al final y retorna la logngitud del nuevo array
let a= arreglo.push(11)
console.log(arreglo+" - "+a)

console.log("\nPop")
//ingresa el valor al final y retorna el valor extraido
a= arreglo.pop()
console.log(arreglo+" - "+a+"\n")

console.log("\nUnshift")
//ingresa un valor al inicio y retorna la logngitud del nuevo array
a= arreglo.unshift(5)
console.log(arreglo + " - " + a + "\n");

console.log('\nSplice')
//elimina n valores desde m posicion del array, y los retorna
a= arreglo.splice(0,2)
console.log(arreglo+" - "+a+"\n")
console.log()

