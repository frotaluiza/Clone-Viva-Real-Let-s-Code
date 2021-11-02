import { createsAbreviation,formatString } from "../dataTreatment.js"



const creatingHeader = (result)=>{
    const mainDiv = document.querySelector("#insertCards")
    const h1 = document.createElement("h1")
    const totalCount = result.search.totalCount
    const divFilter = document.querySelector('#jsAdd')
    divFilter.innerText = `${result.search.result.listings[0].link.data.city} - ${createsAbreviation(formatString(result.search.result.listings[0].link.data.city)).toUpperCase()}  x` 
    h1.id="count"
h1.innerHTML = '<span>' +totalCount.toString() +' </span> Imóveis à venda em ' + `${result.search.result.listings[0].link.data.city} - ${createsAbreviation(formatString(result.search.result.listings[0].link.data.city)).toUpperCase()} <a href="#">${result.search.result.listings[0].link.data.city} - ${createsAbreviation(formatString(result.search.result.listings[0].link.data.city)).toUpperCase()}  x </a>`
    mainDiv.append(h1)
}

export {creatingHeader}