let priceAn =[19.99,24.99,39.99]
let priceMo =[2.99,3.99,5.99]
let cards = document.querySelectorAll("#card")
let switchEl = document.querySelector(".switch")
switchEl.onclick= () =>{
    let el = switchEl.children[0]
    if(!el.classList.toggle("on")){
        cards.forEach((a,i)=>{
            a.children[0].children[1].innerText= "$"+priceAn[i]
        })
    }else{
        cards.forEach((a,i)=>{
            a.children[0].children[1].innerText= "$"+priceMo[i]
        })
    }
}
let handleSelect = (e) =>{
    let card = e.path.filter(a => a.id=="card")[0]
    let clickedCard = card.getAttribute("dataName")
    if(!card.classList.contains("selected")){
        cards.forEach(el=> {
            let att = el.getAttribute("dataName")
            if(att==clickedCard){
                el.className="col-4 selected"
            }else{
                el.className="col-4"
            }
        })
    }else{
        return false
    }
}
cards.forEach(el => {
    el.onclick= handleSelect
})