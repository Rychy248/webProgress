function customItem(modelName) {
    
    let text = document.forms["form-customList"]["todo"].value;

    if (text == "") {
        alert("Set a todo item")
    }else{
        document.forms["form-customList"]["todo"].value = "";
        let customList = document.querySelectorAll(".box")[1];
        let lastIndex = 0;

        try {
            lastIndex = Number(customList.lastElementChild.lastElementChild.getAttribute("index"));
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
                modelName:modelName,
            },
            customList:customList,
            newItem:newItem,
            newCheck:newCheck,
            newH3:newH3
        });

    };

    return false;
};


function sendData(object) {
    console.log("DATA SENDED: "+JSON.stringify(object.sendToServer));
    fetch(`/custom`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(object.sendToServer),
    })
    .then(response => response.json())
    .then((response) => {
        if (response.statusCode == 200){
            object.newH3.setAttribute("index",object.sendToServer.index);
            object.newCheck.setAttribute("id",response.item._id);
            object.newCheck.addEventListener("click",(event=>deleteItem(event.originalTarget)));

            object.customList.appendChild(object.newItem);
            object.newItem.appendChild(object.newCheck);
            object.newItem.appendChild(object.newH3);

        }else{
            alert(`Status Code: ${response.statusCode}, Error: ${JSON.stringify(response.error.message)}`);
        };

        console.log(JSON.stringify(response));
        }
    );

};  


function deleteItem(checkbox, modelName) {
    if(checkbox.checked == true){
        checkbox.parentElement.classList.add("toDelete");
        checkbox.disabled = true;

        setTimeout(() => {
            checkbox.parentElement.style.display = "none";
        }, 1100);

        console.log("ID TO DELETE "+JSON.stringify(checkbox.id));
        fetch('/custom', {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id:checkbox.id,
                modelName:modelName,
            }),
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