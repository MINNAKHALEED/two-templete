const menuicon= document.querySelector("#menu-icon")

const navlist= document.querySelector(".navlist")

menuicon.addEventListener("click", (eo) => {
menuicon.classList.toggle('bx-x')
navlist.classList.toggle('open')
})



