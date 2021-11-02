const switchB = document.querySelector("#flexSwitchCheckDefault")

const buttonStyling = ()=>{
    switchB.addEventListener('click',(evt)=>{
        evt.target.classList.add('afterClickSwitch')
    })
}

export {buttonStyling}
