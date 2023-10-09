// Code here

//let's grab some DOM elements
let forms = document.querySelectorAll("form")

let beerImg = document.getElementById("beer-image");
let beerName = document.getElementById("beer-name");
let beerDesc = document.getElementById("beer-description");
let beerNavUl = document.querySelector("nav ul");
let lists = document.querySelectorAll("li");

let beertextArea1 = document.querySelector("textarea#description");
let beertextArea2 = document.querySelector("textarea#review");

let beerReviewList = document.querySelectorAll("ul#review-list li");
let beerReviewList1 = document.querySelector("ul#review-list li");
let beerReviewList2 = beerReviewList[1];

let btn = document.querySelectorAll("button")
let btn0 = btn[0];
let btn1 = btn[1];

//console.log(lists)

//let's hide nav lists 0, 1, and 2
function hideLi(){
    let lists0 = lists[0];
    let lists1 = lists[1];
    let lists2 = lists[2];

    lists0.style.display = "none";
    lists1.style.display = "none";
    lists2.style.display = "none";
};
hideLi();


//~ removeDef - Removes default behaviour of form when the submit button is clicked
function removeDef(){
    forms.forEach(function(){
        addEventListener("submit", function(e){
            e.preventDefault();
        })
    });

    //console.log(forms);
};
removeDef();



// Deliverables

//fetch()
function fetchBeer() {


    fetch("http://localhost:3000/beers")
    .then(res => res.json())
    .then(function(data) {
        data.forEach(appendBeerNames)        
    });

    function appendBeerNames(data){
        let liNames = document.createElement("li");
        beerNavUl.appendChild(liNames);
        liNames.innerHTML = `${data.name}`;  
        
        //event click on nav li
        liNames.addEventListener("click", function(e){
            beerName.innerHTML = `${data.name}`;
            beerImg.src = `${data.image_url}`;
            beerDesc.innerHTML = `${data.description}`;
            beerReviewList2.innerHTML = `${data.reviews}`;
        })
    };
    
};
fetchBeer();
//displays the first beer when the page is loaded
function displayBeer1(){
    fetch("http://localhost:3000/beers/1")
    .then(res => res.json())
    .then(function(data) {
        beerImg.src = "https://i.ibb.co/wQ4G0w1/flatiron-brew.png";
        beerName.innerHTML = "Oh So Flattening";
        beerDesc.innerHTML = "A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.";
        beerReviewList2.innerHTML = `${data.reviews}`;
        //console.log(beer);
    });
}
displayBeer1();

//a new review to the page when the review form is submitted.
btn1.addEventListener("click", function(){
    let beertextArea2Value = beertextArea2.value;
    //beerReviewList1.innerHTML = beertextArea2Value;

    let pReview = document.createElement("p");
    pReview.innerHTML = beertextArea2Value;

    beerReviewList1.appendChild(pReview);
})

btn0.addEventListener("click", function(e){
    beerDesc.innerHTML = beertextArea1.value;
})