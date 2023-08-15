// create a function to render the data
// fetch request
fetch('http://localhost:3000/bars')
.then(r=> r.json())
.then(data => {
    data.forEach(renderNav)
    fillFeatured(data[Math.floor(Math.random() * data.length)])
})

const average = array => array.reduce((a, b) => a + b) / array.length;

function renderNav(data){

    const barNav = document.querySelector('.bar-nav')
    const navDiv = document.createElement('div')
    navDiv.className = 'bar-preview'
    const navImg = document.createElement('img')
    const navName = document.createElement('p')
    const navRating = document.createElement('p')
    navRating.className = 'hidden-rating'
    const comContainer = document.querySelector('.review-container')

    navImg.src = data.image
    navName.textContent = data.name 
    

    navDiv.append(navImg,navName,navRating)
    barNav.appendChild(navDiv)

    navDiv.addEventListener('mouseover',()=>{
        navRating.style.display = 'block'
        navRating.textContent = `Rating: ${Math.round(average(data.rating)*10) /10}`
    })
    navDiv.addEventListener('mouseleave',()=>{
        navRating.style.display = 'none'
    })

    navDiv.addEventListener('click',()=>{
        
        removeAllChildNodes(comContainer)
        fillFeatured(data)
    })
    

}
// transition: all 0.3s ease 0s;

const featRate = document.querySelector('#frate')
function fillFeatured(data){

    currentData = data
    const featName = document.querySelector('#fname')
    const featImg = document.querySelector('#fimg')
    const featDes = document.querySelector('#fdes')
    const featLoc = document.querySelector('#floc')
    const featRate = document.querySelector('#frate')

    featName.textContent = data.name
    featImg.src = data.image
    featDes.textContent = data.description
    featLoc.textContent = data.location
    featRate.textContent = Math.round(average(data.rating)*10) /10

    // currentData.comment.reduce((a, b) => a + b) / currentData.length
    // average function
    // const average = array => array.reduce((a, b) => a + b) / array.length;
    

    currentData.comment.forEach(showComments)
    console.log(average(currentData.rating))
    // addind review function
}
// create an array filter to sort restaurnts
// making a function for the bar to be hidden

// making a submit feature
const comSubmit = document.querySelector('.review-form')
comSubmit.addEventListener('submit',(e)=>{
    e.preventDefault()
    addComment(currentData)
    showComments(currentData.comment[currentData.comment.length - 1])
    featRate.textContent = Math.round(average(currentData.rating)*10) /10
})

const barNav = document.querySelector('.bar-nav')
const barBtn = document.querySelector('#barBtn')
    barNav.style.display = 'none'
    barBtn.addEventListener('click',()=>{
        if(barNav.style.display == 'flex'){
           barNav.style.display = 'none'
            

        } else if (barNav.style.display == 'none'){
            barNav.style.display = 'flex'
           
        }
    })


// Making a function to fill comments

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

const comContainer = document.querySelector('.review-container')
function showComments(data){
    const comContainer = document.querySelector('.review-container')

    const comDiv = document.createElement('div')
    comDiv.className = "individual-review"
    const newCom = document.createElement('p')
    newCom.textContent = data

    // appending coms
    comContainer.appendChild(comDiv)
    comDiv.appendChild(newCom)
    
    
}

// patch data
function patch(data){
    fetch(`http://localhost:3000/current-exhibits/1`,{
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Accept':'application/json'
        },
        body: JSON.stringify(data)      
    })
    .then(r => r.json())
    .then(data =>console.log(data))
}

function addComment(currentData){

    const newComBody = document.querySelector('#comment-input')
    currentData.comment.push(newComBody.value)
    const starInput = document.querySelector('#star-input')
    currentData.rating.push(parseInt(starInput.value))
    
    console.log(currentData)


}


// create dubmit function to add restaurants
const findForm = document.querySelector("#submit-form")
findForm.addEventListener("submit", (e) => {
    e.preventDefault()  
    postRest()



})

function postRest(){

    const newName = document.querySelector("#new-bar-name")
    const newLocation = document.querySelector("#new-location")
    const newImage = document.querySelector("#new-image")
    const newDescription = document.querySelector("#new-comments")

    fetch("http://localhost:3000/bars", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({

            name: newName.value,
            image: newImage.value,
            location : newLocation.value,
            description : newDescription.value,
            rating : [""],
            comment : [""],
        }),
    })

        .then(r => r.json())
        .then(newData => console.log(newData))
}

// create function to take the average star rating 
// create a patch to update json

// hover on hidden class element
// const hiddenRating = document.querySelector('.hidden-rating')
// const barNav =  document.querySelector('.bar-preview')

// barNav.addEventListener('mouseover',()=>{
//     hiddenRating.style.display = 'block'
// })

// barNav.addEventListener('mouseleave',()=>{
//     hiddenRating.style.display = 'none'
// })