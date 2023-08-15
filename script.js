// create a function to render the data
// fetch request
fetch('http://localhost:3000/bars')
.then(r=> r.json())
.then(data => {
    data.forEach(renderNav)
    fillFeatured(data[Math.floor(Math.random() * data.length)])
})


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
    navRating.textContent = `Rating: ${data.rating}`

    navDiv.append(navImg,navName,navRating)
    barNav.appendChild(navDiv)

    navDiv.addEventListener('mouseover',()=>{
        navRating.style.display = 'block'
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
    featRate.textContent = data.rating

    currentData.comment.forEach(showComments)
    // addind review function
}
// create an array filter to sort restaurnts
// making a function for the bar to be hidden

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

// function addComment(currentData){
//     const newComBody = document.querySelector('#comment-input')
//     new
// }
// create dubmit function to add restaurants

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