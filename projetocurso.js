const cursosTodos = [...document.getElementsByClassName("curso")]
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
console.log(cursosTodos)
console.log(cursosC1)
console.log(cursosC2)

cursosC1.map((el)=>{
    el.classList.add("destaque")
})

// Add classe destaque em cursosC1
// Método getElementsByClassName permite obter os elementos
// do DOM que utiliza uma classe específica.