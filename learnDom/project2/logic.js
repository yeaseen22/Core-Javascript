
function addTask(){
    const inputTask = document.getElementById("taskInput")
    const taskList = document.getElementById("taskList")

    const task = inputTask.value;
    if(task.trim() === "")return;

    const li = document.createElement("li")
    li.innerText = task;
    const complete = document.createElement("button")
    complete.innerText = 'complete';
    complete.style.marginLeft = '5px';

    const deletebtn = document.createElement("button")
    deletebtn.innerText = 'delete';
    deletebtn.style.marginLeft = '5px';

    deletebtn.onclick = function(){
        li.remove()
    }
    complete.onclick = function(){
        li.classList.toggle('complete')
    }

    taskList.appendChild(li)
    li.appendChild(complete)
    li.appendChild(deletebtn)
    

    inputTask.value = '';
    console.log(task);
    
}

function filterTasks(e){
    const search = document.getElementById("searchInput")
   const input = search.value;

   const items = document.querySelectorAll("ul#taskList li")

   items.forEach((item) => {
    item.style.display = item.innerText.toLowerCase().includes(input.toLowerCase()) ? "block" : "none";
   })
    console.log('li', items);
    

}