// Função que recebe os dados como parâmetro, e para cada elemento do array eu crio um card para ele.
import { createsAbreviation,formatString } from "../dataTreatment.js"
const creatingCards = async(result)=>{
    // Criar o negócio com o número de resultados aqui
    
    
    const listings = result.search.result.listings
    listings.forEach((item)=>{
        cardTemplate(item)
    })
}

const choosingStylingForInfDiv = (item,infDiv) =>{
    if (item.listing.pricingInfos[0].monthlyCondoFee &&item.listing.amenities.length>0) infDiv.id="infDivHasBoth"
    else if (item.listing.pricingInfos[0].monthlyCondoFee && item.listing.amenities.length===0) infDiv.id="infDivHasOnlyCond"
    else if (item.listing.amenities.length>0 && !item.listing.pricingInfos[0].monthlyCondoFee) infDiv.id="infDivHasOnlyAmenities"
    else if (!item.listing.pricingInfos[0].monthlyCondoFee &&!item.listing.amenities.length>0) infDiv.id="infDivHasNone"
}

const cardTemplate = (item)=>{
    const mainDiv = document.querySelector("#insertCards")
    const cardDiv = document.createElement("div")
    cardDiv.classList.add("cardDiv") 
    cardDiv.classList.add("border")
    cardDiv.classList.add("box")
    creatingImgDiv(mainDiv,item,cardDiv)
    const infDiv = document.createElement("div")
    infDiv.classList.add("infDiv")
    choosingStylingForInfDiv(item,infDiv)
    creatingHeaderDiv(mainDiv,item,infDiv)
    creatingSpecsDiv(mainDiv,item,infDiv)
    creatingAmmenitiesButtonsDiv(item,infDiv)
    createsPricingDiv(item,infDiv)
    cardDiv.append(infDiv)
    mainDiv.append(cardDiv)

}




const creatingImgDiv = (mainDiv,item,cardDiv) =>{
        const imgDiv = document.createElement("div")
        imgDiv.id="imgDiv"
        const img = document.createElement("img")
        img.src = item.medias[0].url
        imgDiv.append(img)
        cardDiv.append(imgDiv)
}

const creatingHeaderDiv = (mainDiv,item,infDiv)=>{
    const address = document.createElement("p")
    address.id="address"
    address.innerText = `${item.link.data.street},${item.link.data.streetNumber} - ${item.link.data.neighborhood},${item.link.data.city} - ${createsAbreviation(formatString(item.link.data.state)).toUpperCase()}`
    infDiv.append(address)
    const title = document.createElement("h2")
    title.id="title"
    title.innerText = `${item.link.name}`
    infDiv.append(title)
}

const creatingSpecsDiv = (mainDiv,item,infDiv)=>{
    const specsDiv = document.createElement("div")
    specsDiv.id="specsDiv"
    const usableAreas = document.createElement("p")
    usableAreas.innerHTML = `<span>${item.listing.usableAreas[0]}</span> m²`
    const quarto = document.createElement("p")
    quarto.innerHTML = item.listing.bedrooms[0] !== 0?`<span>${item.listing.bedrooms}</span> Quartos`:""
    const banheiros = document.createElement("p")
    banheiros.innerHTML = `<span>${item.listing.bathrooms}</span> Banheiros`
    const vagas = document.createElement("p")
    vagas.innerHTML = (item.listing.parkingSpaces[0] !== 0?`<span>${item.listing.parkingSpaces}</span>`:"") +` ${item.listing.parkingSpaces[0]===1? 'Vaga':'Vagas'}`
    specsDiv.append(usableAreas) 
    if (item.listing.bedrooms[0] !== 0)specsDiv.append(quarto) 
    specsDiv.append(banheiros) 
    if (item.listing.parkingSpaces[0] !== 0)specsDiv.append(vagas) 
    infDiv.append(specsDiv)
}

const creatingAmmenitiesButtonsDiv = (item,infDiv)=>{
    const dictionary = {
        PARTY_HALL: 'Salão de Festas',
        FURNISHED: 'Mobiliada',
        FIREPLACE: 'Lareira',
        POOL: 'Piscina',
        BARBECUE_GRILL: 'Churrasqueira',
        AIR_CONDITIONING: 'Ar-condicionado',
        ELEVATOR: 'Elevador',
        BICYCLES_PLACE: 'Bicicletario',
        GATED_COMMUNITY: 'Condomínio fechado',
        SPORTS_COURT: 'Quadra de Esportes',
        PETS_ALLOWED: 'Animais Permitidos',
        AMERICAN_KITCHEN: 'Cozinha Americana',
        GYM: 'Academia',
        PLAYGROUND: 'Playground',
        TENNIS_COURT: 'Quadra de tennis',
        CINEMA: 'Cinema',
        SAUNA: 'Sauna',
        GARDEN: 'Jardim',
        ELECTRONIC_GATE: 'Portão eletrônico'
    }
    if (item.listing.amenities && item.listing.amenities.length>0){
        const amenDiv = document.createElement("div")
        amenDiv.id="amenDiv"
        item.listing.amenities.forEach((amenitie)=>{
            const button = document.createElement('p')
            button.innerText = dictionary[amenitie]? dictionary[amenitie]:amenitie
            button.classList.add("amenities")
            amenDiv.append(button)

        })
        infDiv.append(amenDiv)

    }
}

const createsPricingDiv = (item,infDiv)=>{
    const pricingDiv = document.createElement("div")
    pricingDiv.id= "pricingDiv"
    const price = document.createElement("p")
    price.id=!item.listing.pricingInfos[0].monthlyCondoFee?"priceAlone":"priceWithC"
    price.innerText = "R$" + item.listing.pricingInfos[0].price.toString()
    const condominio = document.createElement("p")
    condominio.id="condominio"
    condominio.innerHTML = item.listing.pricingInfos[0].monthlyCondoFee? "Condomínio: <span>R$"+ item.listing.pricingInfos[0].monthlyCondoFee.toString()+"</span>":""
    pricingDiv.append(price)
    if (item.listing.pricingInfos[0].monthlyCondoFee)pricingDiv.append(condominio)
    infDiv.append(pricingDiv)

}
export {creatingCards}