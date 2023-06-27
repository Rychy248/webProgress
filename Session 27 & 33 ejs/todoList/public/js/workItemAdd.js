

function sendData(object) {
    console.log("DATA SENDED: "+JSON.stringify(object.sendToServer));
    fetch('/work', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(object.sendToServer),
    })
    .then(response => response.json())
    .then((response) => {
        if (response.statusCode == 200){
            // alert(`Item "${response.item.item}" added succesfully`);

            object.newH3.setAttribute("index",object.sendToServer.index);
            object.newCheck.setAttribute("id",response.item._id);
            object.newCheck.addEventListener("click",(event=>deleteItem(event.originalTarget)));

            object.workList.appendChild(object.newItem);
            object.newItem.appendChild(object.newCheck);
            object.newItem.appendChild(object.newH3);

        }else{
            alert(`Status Code: ${response.statusCode}, Error: ${JSON.stringify(response.error.message)}`);
        };

        console.log(JSON.stringify(response));
        }
    );

};  

function workItem() {
    
    let text = document.forms["form-workList"]["todo"].value;

    if (text == "") {
        alert("Set a todo item")
    }else{
        document.forms["form-workList"]["todo"].value = "";
        let workList = document.querySelectorAll(".box")[1];
        let lastIndex = 0;

        try {
            lastIndex = Number(workList.lastElementChild.lastElementChild.getAttribute("index"));
        } catch (error) {
            lastIndex = 0;
        }

        let newIndex = lastIndex + 1;
    
        let newItem = document.createElement("div");
        newItem.classList.add("item");
    
        let newCheck = document.createElement("input");
        newCheck.type = "checkbox";

        let newH3 = document.createElement("h3");
        newH3.innerText = `${newIndex} ${text}`;

        sendData({
            sendToServer:{
                index:newIndex,
                task:text,
            },
            workList:workList,
            newItem:newItem,
            newCheck:newCheck,
            newH3:newH3
        });

    };

    return false;
};

function deleteItem(checkbox) {
    if(checkbox.checked == true){
        checkbox.parentElement.classList.add("toDelete");
        checkbox.disabled = true;

        setTimeout(() => {
            checkbox.parentElement.style.display = "none";
        }, 1100);

        console.log("ID TO DELETE "+JSON.stringify(checkbox.id));
        fetch('/work/', {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({id:checkbox.id}),
        })
        .then(response => response.json())
        .then((response) => {            
            console.log(JSON.stringify(response));
            }
        );

    }else{
        checkbox.disabled = false;
        checkbox.classList.remove("toDelete");
        checkbox.parentElement.lastElementChild.classList.remove("toDelete");
    };
};

// document.querySelectorAll("input[type='checkbox']")