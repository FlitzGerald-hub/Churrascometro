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

function calc(){
    if(adulto.value.length == 0 || crianca.value.length == 0 || duracao.value.length == 0){
        window.alert(`Por favor, insira todos dados pedidos e tente novamente!`)
    } else {
        let totcarne = (adulto.value * carnePP(duracao)) + (crianca.value * (carnePP(duracao)) / 2)
        let cerveja = (adulto.value * cervejaPP(duracao))
        let totrefri = (adulto.value * refriPP(duracao)) + (crianca.value * (refriPP(duracao)) / 2)

        function carnePP(duracao){
            if(duracao >= 6){
                return 650
            } else {
                return 400
            }
        }

        function cervejaPP(duracao){
            if(duracao >= 6){
                return 2000
            } else {
                return 1200
            }
        }

        function refriPP(duracao){
            if(duracao >= 6){
                return 1500
            } else {
                return 1000
            }
        
        }

        

        /*if(duracao.value < 6){
            var totcarne = (400 * adulto.value) + (200 * crianca.value)       
            var cerveja = (1200 * adulto.value)
            var totrefri = (1000 * adulto.value) + (500 * crianca.value)
        } else {
            var totcarne = (650 * adulto.value) + (400 * crianca.value)       
            var cerveja = (2000 * adulto.value)
            var totrefri = (1500 * adulto.value) + (1000 * crianca.value)
        }*/

        
       res.innerHTML = `<p>${Math.ceil(totcarne / 1000)}Kg de carne</p>`
       res.innerHTML += `<p>${Math.ceil(cerveja / 355)} latas de cerveja</p>`
       res.innerHTML += `<p>${Math.ceil(totrefri / 2000)} garrafas de 2 litros de refrigerante</p>`

    }
}