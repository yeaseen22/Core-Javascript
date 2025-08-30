
// function addTask() {
//     const inputTask = document.getElementById("taskInput")
//     const taskList = document.getElementById("taskList")

//     const task = inputTask.value;
//     if (task.trim() === "") return;

//     const li = document.createElement("li")
//     li.innerText = task;

//     const span = document.createElement("span");
//     span.innerText = task;

//     const complete = document.createElement("button")
//     complete.innerText = 'complete';
//     complete.style.marginLeft = '5px';

//     const deletebtn = document.createElement("button")
//     deletebtn.innerText = 'delete';
//     deletebtn.style.marginLeft = '5px';

//     const editbtn = document.createElement("button")
//     editbtn.innerText = 'edit';
//     editbtn.style.marginLeft = '5px';

//     deletebtn.onclick = function () {
//         li.remove()
//     }
//     complete.onclick = function () {
//         li.classList.toggle('complete')
//     }

//     // editbtn.onclick = function () {
//     //     const input = document.createElement("input");
//     //     span.style.marginLeft = '5px'
//     //     input.value = span.innerText;
//     //     li.replaceChild(input, span)
//     //     // input.innerText = editbtn.value;

//     //     const save = document.createElement("button")
//     //     save.innerText = 'save';
//     //     save.style.marginLeft = '5px';
//     //     li.appendChild(save)
//     //     save.onclick = function () {
//     //         span.innerText = input.value;   // update the text
//     //         li.replaceChild(span, input);   // swap input back to span
//     //         save.remove();                  // remove the save button (optional)
//     //     };


//     //     console.log('value', input.value);

//     // }

//     editbtn.onclick = function () {
//     const input = document.createElement("input");
//     input.value = span.innerText;
//     li.replaceChild(input, span);

//     // prevent duplicate save buttons
//     if (!li.querySelector(".save-btn")) {
//         const save = document.createElement("button");
//         save.innerText = "save";
//         save.classList.add("save-btn");
//         save.style.marginLeft = "5px";
//         li.appendChild(save);

//         save.onclick = function () {
//             span.innerText = input.value;
//             li.replaceChild(span, input);
//             save.remove();
//         };
//     }
// };


//     taskList.appendChild(li)
//     li.appendChild(complete)
//     li.appendChild(deletebtn)
//     li.appendChild(editbtn)
//     li.appendChild(span);



//     inputTask.value = '';
//     console.log(task);

// }

// function filterTasks(e) {
//     const search = document.getElementById("searchInput")
//     const input = search.value;

//     const items = document.querySelectorAll("ul#taskList li")

//     items.forEach((item) => {
//         item.style.display = item.innerText.toLowerCase().includes(input.toLowerCase()) ? "block" : "none";
//     })
//     console.log('li', items);


// }

// function addTask() {
//     const inputTask = document.getElementById("taskInput");
//     const taskList = document.getElementById("taskList");

//     const task = inputTask.value;
//     if (task.trim() === "") return;

//     const li = document.createElement("li");

//     const span = document.createElement("span");
//     span.innerText = task;

//     const complete = document.createElement("button");
//     complete.innerText = 'complete';
//     complete.style.marginLeft = '5px';

//     const deletebtn = document.createElement("button");
//     deletebtn.innerText = 'delete';
//     deletebtn.style.marginLeft = '5px';

//     const editbtn = document.createElement("button");
//     editbtn.innerText = 'edit';
//     editbtn.style.marginLeft = '5px';

//     // button actions
//     deletebtn.onclick = function () {
//         li.remove();
//     };

//     complete.onclick = function () {
//         li.classList.toggle('complete');
//     };

//     editbtn.onclick = function () {
//         const input = document.createElement("input");
//         input.value = span.innerText;
//         li.replaceChild(input, span);

//         // prevent duplicate save buttons
//         if (!li.querySelector(".save-btn")) {
//             const save = document.createElement("button");
//             save.innerText = "save";
//             save.classList.add("save-btn");
//             save.style.marginLeft = "5px";
//             li.appendChild(save);

//             save.onclick = function () {
//                 span.innerText = input.value;
//                 li.replaceChild(span, input);
//                 save.remove();
//             };
//         }
//     };

//     // add everything to the li
//     li.appendChild(span);
//     li.appendChild(complete);
//     li.appendChild(deletebtn);
//     li.appendChild(editbtn);

//     taskList.appendChild(li);

//     inputTask.value = '';
// }

// function filterTasks() {
//     const search = document.getElementById("searchInput");
//     const input = search.value.toLowerCase();

//     const items = document.querySelectorAll("ul#taskList li");

//     items.forEach((item) => {
//         item.style.display = item.innerText.toLowerCase().includes(input) ? "block" : "none";
//     });
// }


function addTask(){
    const inputTask = document.getElementById("taskInput")
    const taskList = document.getElementById("taskList");
    console.log(taskList);
    

    const task = inputTask.value;

    if(task.trim() === "")return 

    const li = document.createElement("li")

    const span = document.createElement("span");
    span.innerText = task

    const complete = document.createElement("button")
    complete.innerText = 'complete';
    complete.style.marginLeft = '5px';

    const deleteBtn = document.createElement('button');
    deleteBtn.innerText = 'delete';
    deleteBtn.style.marginLeft = '5px';

    const editBtn = document.createElement("button");
    editBtn.innerText = 'edit';
    editBtn.style.marginLeft = '5px'

    complete.onclick = function(){
        li.classList.toggle('complete')
    }

    deleteBtn.onclick = function(){
        li.remove()
    }

    editBtn.onclick = function(){
        const input = document.createElement('input')
        input.value = span.innerText;
        li.replaceChild(input,span)

        if(!li.querySelector('.save-btn')){
            const button = document.createElement("button");
            button.innerText = 'save';
            li.classList.add('save-btn');
            button.marginLeft = '5px';
            li.appendChild(button)

            button.onclick = function(){
                span.innerText = input.value;
                li.replaceChild(span,input)
                button.remove()
            }
        }


    }

    li.appendChild(span);
    li.appendChild(complete);
    li.appendChild(deleteBtn)
    li.appendChild(editBtn)


    taskList.appendChild(li)

    inputTask.value = ''
}

function filterTasks(){
    const input = document.getElementById('searchInput')
    const task = input.value.toLowerCase();

    const item = document.querySelectorAll("ul#taskList li")
    item.forEach((item) => {
      item.style.display =   item.innerText.toLowerCase().includes(task) ? "block" : "none";
    })

    console.log('item', item);
    
}