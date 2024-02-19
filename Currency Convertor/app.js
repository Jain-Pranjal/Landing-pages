const BASE_URL ="https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

// what are the things that we have to do :-
// making the whole list in which all the code will be shown to user 
// change the flag according to the list 
// and change the exchange rate when clicking the button 
// the codes.js contains all the codes of the country along with the currency code


// so firstly we have to make the list of all the country code in the select option 
// selecting both select option 
const dropdowns=document.querySelectorAll(".dropdown select")

const button=document.querySelector("form button")

const fromCurr=document.querySelector(".from select")

const toCurr=document.querySelector(".to select")

const msg=document.querySelector(".msg")



// appending all the countries in the select option 
for(let select of dropdowns){
    for(currCode in countryList){
        // console.log(currcode,countryList[currcode]);
        let newOption=document.createElement("option")
        newOption.innerText=currCode
        newOption.value=currCode
        if(select.name==="from" && currCode==="USD"){
            newOption.selected="selected"
        }
        else if(select.name==="to" && currCode==="INR"){
            newOption.selected="selected"
        }
        select.append(newOption)
    }
    
    select.addEventListener("change",(evt)=>{
        updateFlag(evt.target)
    })
}


const updateExchangeRate=async ()=>{
    let amount=document.querySelector(".amount input")
    let amtVal=amount.value
    if(amtVal==="" || amtVal<1){
        amtVal="1"
        amount.value="1"
    }
    // console.log(fromCurr.value,toCurr.value);
    const URL=`${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`

    let response=await fetch(URL) 
    // console.log(response);
    let data=await response.json()
    let rate=data[toCurr.value.toLowerCase()]
    // console.log(rate);
    let finalAmt=amount.value*rate
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmt} ${toCurr.value}`;

}

//updating the flag with the code 
const updateFlag=(element)=>{
    let currCode=element
    let countryCode=countryList[currCode]
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;

}


button.addEventListener("click", (evt)=>{
    evt.preventDefault() 
    updateExchangeRate()
    // it will stop the default behaviour of the form 
   
})


// so basically amount is the value that w eput in the input box that for how many quantity we want the ans and the rate is the conversion rate of the 1 unit only 



window.addEventListener("load", ()=>{
    updateExchangeRate()
})

