arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

let respFind = arreglo.find(
    function (actual, indice, arr) {
        console.log("valor actual: ", actual)
        console.log("indice actual: ", indice)
        console.log("areglo completo: ", arr)
        return actual === 9
    }
)
console.log("respFind: ", respFind)


let respForEach = arreglo
    .forEach(
        function (actual, indice, arr) {
            console.log("valor actual: ", actual)
        }
    )
console.log("respForEach: ", respForEach)

let respMap = arreglo
    .map(
        (actual, indice, arr) => {
            return actual + 1
        }
    )
console.log("respMap: ", respMap)


let respFilter = arreglo
    .filter(
        function (actual, indice, arr) {
            return actual >= 3
        }
    )
console.log("respFilter: ", respFilter)


let respSome = arreglo
    .some(
        function (actual, indice, arr) {
            return (actual % 2 === 0)
        }
    )
console.log("respSome: ", respSome)

let respEvery = arreglo
    .every(
        function (actual, indice, arr) {
            return (actual % 2 === 0)
        }
    )
console.log("respEvery: ", respEvery)

let respReduce = arreglo
    .reduce(
        function (acumulado, actual, indice, arr) {
            return (acumulado - actual)
        },
        100
    )
console.log("respReduce: ", respReduce)