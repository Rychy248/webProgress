

async function asyncFetch(object) {
    console.log("Fetch call started...");
    console.log("DATA SEND: "+JSON.stringify(object));
    fetch('/', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(object),
    })
    .then(response => response.json())
    .then((response) => {
        console.log(JSON.stringify(response));
        console.log("Fetch call finished...");
        }
    );

};  

function addItem() {
    
    let text = document.forms["form-todoLIst"]["todo"].value;

    if (text == "") {
        alert("Set a todo item")
    }else{
        document.forms["form-todoLIst"]["todo"].value = "";
        let todoList = document.querySelector(".todoList").firstElementChild.firstElementChild;
        let lastIndex = 0;

        try {
            lastIndex = Number(todoList.lastElementChild.lastElementChild.getAttribute("index"));
        } catch (error) {
            lastIndex = 0;
        }

        let newIndex = lastIndex + 1;
    
        let newItem = document.createElement("div");
    
        let newCheck = document.createElement("input");
        newCheck.type = "checkbox";
        let newH3 = document.createElement("h3");
        newH3.innerText = `${newIndex} ${text}`;
        newH3.setAttribute("index",lastIndex+1);
    
        newItem.classList.add("todoItem");
    
        newItem.appendChild(newCheck);
        newItem.appendChild(newH3);
        
        todoList.appendChild(newItem);

        asyncFetch({
            index:newIndex,
            task:text
        });

    };

    return false;
};
