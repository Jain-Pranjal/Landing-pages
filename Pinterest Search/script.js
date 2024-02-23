var arr=[
    {name:"petals of rose",
    image:"https://images.unsplash.com/photo-1496062031456-07b8f162a322?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cm9zZXxlbnwwfHwwfHx8MA%3D%3D"
    },

    {
        name:"lion",
        image:"https://images.unsplash.com/photo-1614027164847-1b28cfe1df60?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGlvbnxlbnwwfHwwfHx8MA%3D%3D"
    },

    {
        name:"apple",
        image:"https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGV8ZW58MHx8MHx8fDA%3D"
    },

    {
        name:"phone",
        image:"https://images.unsplash.com/photo-1592832122594-c0c6bad718b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXBwbGUlMjBwaG9uZXxlbnwwfHwwfHx8MA%3D%3D"
    }
    ,
    {
        name:"jungle",
        image:"https://plus.unsplash.com/premium_photo-1673288456151-4f7b871863c9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8anVuZ2xlfGVufDB8fDB8fHww"
    },
    {
        name:"vege",
        image:"https://images.unsplash.com/photo-1590779033100-9f60a05a013d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnZXRhYmxlc3xlbnwwfHwwfHx8MA%3D%3D"
    }

]

// as we have to repeat the card so we have to repeat the html also 
function showCards(){
    var clutter=""
    arr.forEach((e)=>{
        clutter+=`<div class="box">
        <img class="cursor-pointer" src="${e.image}" alt="${e.name}">
        <div class="caption">Lorem ipsum </div>
    </div>`
        // clutter store all the images in it so add in container
    })
    document.querySelector(".container").innerHTML=clutter
}
showCards()



function handleSearchFunctionality(){
    var input=document.querySelector("#searchinput")
    input.addEventListener("focus",()=>{
        document.querySelector(".overlay").style.display="block"

    })
    input.addEventListener("blur",()=>{
        document.querySelector(".overlay").style.display="none"

    })
    input.addEventListener("input",()=>{
        const filteredArray=arr.filter((obj)=>{
            return obj.name.toLowerCase().startsWith(input.value)
        })
        // now filter the value from the array 
        var clutter=""
        // now the filtered array contains only the filter name where it matched the input column 
        filteredArray.forEach((obj)=>{
            clutter+=`<div class="res flex px-8 py-3">
            <i class="ri-search-line font-semibold mr-5"></i>
            <h3 class="font-semibold">${obj.name}</h3>
        </div>`
        })
        document.querySelector(".searchdata").style.display="block"
        document.querySelector(".searchdata").innerHTML=clutter


    })
}

handleSearchFunctionality()

// to filter out the results in the search bar we can use the filter property of the array 
// filters returns the value in the new array only when the value return is true

