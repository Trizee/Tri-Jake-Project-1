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
        fillFeatured(data)
    })
}
// transition: all 0.3s ease 0s;

function fillFeatured(data){
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