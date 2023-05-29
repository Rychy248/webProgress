

function addItem() {
    
    let x = document.forms["form-todoLIst"]["todo"].value;

    if (x == "") {
        alert("Set a todo item")
    }else{
        document.forms["form-todoLIst"]["todo"].value = "";
        let todoList = document.querySelector(".todoList");
        let lastIndex = 0;

        try {
            lastIndex = Number(todoList.lastElementChild.lastElementChild.getAttribute("index"));
        } catch (error) {
            lastIndex = 0;
        }

        let newIndex = lastIndex + 1;
    
        let newItem = document.createElement("div");
        
        let newH3 = document.createElement("h3");
        newH3.innerText = `${newIndex} ${x}`;
        newH3.setAttribute("index",lastIndex+1);
    
        newItem.classList.add("todoItem");
    
        newItem.appendChild(newH3);
        
        todoList.appendChild(newItem);
    };

    return false;
};
