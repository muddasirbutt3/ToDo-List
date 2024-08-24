let input = document.querySelector(".input input")
let sumbit = document.querySelector(".btn");
let todos = document.querySelector(".todos");


function checkpadding(){
    if(todos.childNodes.length !== 0){
    todos.style.padding = "10px"}
    else{
        todos.style.padding = "0px"
    }
}

setInterval(() => {
    checkpadding()
}, 10);

sumbit.addEventListener("click", () => {
    let task = input.value;
    if (task !== "") {
    input.value = ""; 

    let newdiv = document.createElement("div");
    newdiv.classList.add("item");
    newdiv.innerHTML = `<p class="task">${task}</p>
        <div class="icon">
          <i class="fa-solid fa-xmark"></i>
        </div>`
    todos.prepend(newdiv)
}
})
input.addEventListener("keypress", (e) => {
    checkpadding()
    if (e.key === "Enter") {
        checkpadding()
        let task = input.value;
        if (task !== "") {
        input.value = ""; 
    
        let newdiv = document.createElement("div");
        newdiv.classList.add("item");
        newdiv.innerHTML = `<p class="task">${task}</p>
            <div class="icon">
              <i class="fa-solid fa-xmark"></i>
            </div>`
        todos.prepend(newdiv)
    }
    }
})
todos.addEventListener("click", (event) => {
    if (event.target.classList.contains("fa-xmark")) {
        
        let item = event.target.closest(".item");
        
        if (item) {
            item.remove();
        }
    }
});