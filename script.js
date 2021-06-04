/*
Carne 400g por pessoa + de 6h 650g
Cerveja 1200ml por adulto + de 6h 2000ml
Refrigerante/Agúa 1000ml por pessoa + de 6h 1500ml

Crianças equivalem a 0,5 pessoas

*/

let adulto = document.getElementById("pessoas")
let crianca = document.getElementById("criancas")
let duracao = document.getElementById("duracao")
let res = document.getElementById("res")

var carne = ''
var cerveja = ''
var refri = ''
var carneC = ''
var refriC = ''


function calc(){
    if(adulto.value.length == 0 || crianca.value.length == 0 || duracao.value.length == 0){
        window.alert(`Por favor, insira todos dados pedidos e tente novamente!`)
    } else {
        //Adulto
        if(duracao.value < 6){
            carne = 400 * pessoas.value
            cerveja = 1200 * pessoas.value
            refri = 1000 * pessoas.value
        } else {
            carne = 650 * pessoas.value
            cerveja = 2000 * pessoas.value
            refri = 1500 * pessoas.value
        }
        //Criança
        if(duracao.value < 6){
            carneC = 200 * cria.value
            refriC = 500 * cria.value
        } else {
            carneC = 325 * cria.value
            refriC = 750 * cria.value
        }

        var totcarne = carne + carneC
        var totrefri = refri + refriC

       res.innerHTML = `${totcarne}gr de carne  `
       res.innerHTML += `${cerveja}ml de cerveja  `
       res.innerHTML += `${totrefri}ml de refrigerante  `
    }

}