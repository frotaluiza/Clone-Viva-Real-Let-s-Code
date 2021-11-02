const errorScreen = ()=>{
    const mainDiv = document.querySelector("#insertCards")
    mainDiv.innerHTML = "<h1 class='errorh1'>OOPS</h1> <h1 class='errorh1'>ALGO DEU ERRADO NA SUA BUSCA.</h1> <h2 class='errorh2'>STATUS 500</h2> <h1 class='errorh1'>POR FAVOR, TENTE NOVAMENTE</h1>"

}

export {errorScreen}