const boxContainer = document.querySelector(".boxContainer");
const saluteTextContainer = document.querySelector(".saluteTextContainer");
const saluteImgContainer = document.querySelector(".saluteImgContainer");
const devName = document.querySelector(".name");
const jobTitleContainer = document.querySelectorAll(".jobTitleContainer");
const jobTitles = document.querySelectorAll(".jobTitle");
const projectsTitle = document.querySelector(".projectsTitle");
const phones = document.querySelectorAll(".phone");
const laptop = document.querySelector(".laptop");

var my_array = [];
for(let j = 0; j <= 326; j++){
  my_array.push(j)
}
for(let i=0; i < 365; i++){
    const list = my_array;
   const el = document.createElement("div") 
   el.classList = list.includes(i) ? "box active" : "box"
   boxContainer.appendChild(el)
}
window.addEventListener("scroll", ()=>{
    let offsetY = window.scrollY
    saluteTextContainer.style.transform = `translateY(${offsetY * 0.1}px)`
    saluteImgContainer.style.transform = `translate(${offsetY * 0.4}px, ${offsetY * 0.7}px)`
    devName.style.transform = `translateX(${offsetY * 0.1}px)`
    jobTitleContainer[0].style.backgroundPositionY = `${offsetY * 0.5}px`
    jobTitleContainer[1].style.backgroundPositionY = `${-offsetY * 0.5}px`
    jobTitles[0].style.transform = `translateX(calc(200vh - ${offsetY}px))`
    jobTitles[1].style.transform = `translateX(calc(-300vh + ${offsetY}px))`
    projectsTitle.style.transform = `translateY(calc(400vh - ${offsetY}px))`
    phones[0].style.transform = `translateX(calc(485vh - ${offsetY}px))`
    laptop.style.transform = `translateX(calc(570vh - ${offsetY}px))`
    phones[1].style.transform = `translateX(calc(700vh - ${offsetY}px))`
})

const width = window.innerWidth;
const height = window.innerHeight;
console.log(`viewport width and height are ${width} ${height}`)