

async function asyncFetch(object) {
    console.log("Fetch call started...");
    console.log("DATA SEND: "+JSON.stringify(object));
    fetch('/work', {
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
        newH3.setAttribute("index",lastIndex+1);
    
    
        newItem.appendChild(newCheck);
        newItem.appendChild(newH3);
        
        workList.appendChild(newItem);

        asyncFetch({
            index:newIndex,
            task:text
        });

    };

    return false;
};
