

// FIRST ALERT WE YOU GO INTO THE PAGE

function printAllh1() {
    let myText = ""
    let index = 1;
    
    Object.values($("h1")).forEach(h1 => {
        myText += (h1.textContent === undefined)? "" : `\nh1 [${index++}] = ${h1.textContent}`;
    });
    
    alert(myText);
};

function changeText(elment, txt) {
    Element.textContent == txt;
};

// selection 
// index = 0;
// Object.values($(".select-btn")).forEach(btn =>{
//     console.log(btn)
//     btn.data("type-of",index++===0 ? "js": "jquery");
//     btn.bind('click',(method=this.data("type-of"))=>{
//         modifyTxt1(method)
//     });
    
// });

$(".select-btn").each(()=>{
    $(this).bind('click',()=>{
        $(".text1").textContent = "Modify with "+this.data("type-of");
    });
    
    console.log(this)
    console.log($(this))
});
