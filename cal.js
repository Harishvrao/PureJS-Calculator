let div = document.querySelectorAll("div")
let input = document.querySelector("input")
let equal = document.querySelector(".equal")
let clear = document.querySelector(".clear")

div.forEach(ele => {
    ele.addEventListener("click", (e) => {
        input.value += e.target.textContent
})
})

equal.addEventListener("click", () => {
    input.value = eval(input.value)
})

clear.addEventListener("click", () => {
    input.value = ''
})