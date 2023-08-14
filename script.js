// create a function to render the data
// fetch request
fetch('http://localhost:3000/bars')
.then(r=> r.json())
.then(data => {
    data.forEach(renderNav)
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
        hiddenRating.style.display = 'block'
    })
}

function fillFeatured(data){
    const featName = document.querySelector('#fname')
    const featImg = document.querySelector('#fimg')
    const featDes = document.querySelector('fdes')
    const featLoc = document.querySelector('#floc')
    const featRate = document.querySelector('#frate')

    featName.textContent = data.name
    featImg.src = data.image
    featDes.textContent = data.des
}
// create an array filter to sort restaurnts

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