let input = document.querySelector("#inputArea");
let addBtn = document.querySelector("#addBtn");
let taskArea = document.querySelector(".taskArea");

addBtn.addEventListener("click",function(){
    if(inputArea.value != ""){
        addTask(inputArea.value);
        inputArea.value = "";
    }else{
        alert("type something to add")
    }
})

function addTask(task){
    const li = document.createElement('li');
    li.setAttribute("class", "task");
    li.innerHTML = `${task}`

    const button = document.createElement("button");
    button.setAttribute("class", "del");
    button.innerHTML = "x";

    li.appendChild(button);
    taskArea.appendChild(li);
}


let clrBtn = document.querySelector("#clearBtn");

clrBtn.addEventListener("click",  ()=>{
    taskArea.innerHTML =  "";
})