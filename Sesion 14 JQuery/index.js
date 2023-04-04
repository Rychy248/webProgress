

// FIRST ALERT WE YOU GO INTO THE PAGE

function printAllh1() {
    let myText = ""
    Object.values($("h1")).forEach((h1, index) => {
        myText += (h1.textContent === undefined)? "" : `\nh1 [${index +1}] = ${h1.textContent}`;
    });
    
    alert(myText);
};
function showCodePrintAllh1() {
    alert(`
    let myText = ""
    let index = 1;
    
    Object.values($("h1")).forEach((h1, index) => {
        myText += (h1.textContent === undefined)? "" : \`\\nh1 [\${index +1}] = \${h1.textContent}\`;
    });
    
    alert(myText);
    `)
};

function changeText(elment, txt) {
    Element.textContent == txt;
};

// MODIFY THE .TEXT-1 TEXT WIHT JAVASCRIPT AND JQUERY
//------- with JQUERY
/*
$(".select-btn").each((index, element)=>{
    $(element).prop("type-of",(index === 0 ? "js" : "jquery"));
    $(element).on('click',()=>{
        $(".text1").text("Modify with "+ $(element).prop("type-of").toUpperCase() );
    });
    
});
*/
//------- WITH JS 
document.querySelectorAll("button.select-btn").forEach((element, index) => {
    element.setAttribute("type-of",(index == 0 ? "js":"jquery"));
    element.addEventListener("click",function(){
        document.querySelector(".text1").textContent = "modified with "
        + this.getAttribute("type-of").toUpperCase();
    });
});

/*
    ARROW FUNCTIONS https://www.escuelafrontend.com/arrow-functions
    En estas funciones el valor de this se mantiene sin cambios, es decir, siempre hace referencia al ámbito padre, esto es conocido como lexical scoping, esta es una forma de definir el ámbito de una variable para permitir que esta sea sólo accesible o llamada dentro del mismo bloque donde fue definida.
    En un ejemplo

    document.querySelector('#submit').addEventListener('click', function() {
        console.log(this); ********** // OUTPUT   <button id="submit">
    })

    document.querySelector('#submit').addEventListener('click', () => {
        console.log(this); ********** // OUTPUT	Window
    })
*/

let user = {
    name: 'Some Cool user', 
    age: 34,
    followers: 1000,
     getFollowers:(followers=this.followers, name=this.name)=>{ /* no funciona el this, porque arrow function toma el this scope del padre */
        return `${name} tiene ${followers} followers!`
    },
    addFollower: function (){ 
        this.followers++;
        return `Gracias por unirte. Ahora somos ${this.followers}`;
    } 
}

//------------------ CSS WITH JQUERY
function randomRgb(){
    const randNum = () => {return (Math.floor(Math.random() * 255) + 1);}
    return (`rgb(${randNum()},${randNum()},${randNum()})`);
};
// button to change color
$(".modify-style-btn").first().on("click",function(){
    $(".title-2").css("color",randomRgb());
    alert("Color setted "+$(".title-2").css("color"));
});
// button to add a class
/*
    let element = $(".modify-style-btn")[1] here we get the DOM elmenet, so isn't work with css
    we can't do something like this, element.on("etc...")   instance, we have to get with JQuery againg
    $(  $(".modify-style-btn")[1]   ) with other $ sing, and ()
    or $( element )
*/
$($(".modify-style-btn")[1]).on("click",function(){
    $(".title-2").addClass("big-title italic");
    alert("Classes added: big-title italic");
});
// button has class
$($(".modify-style-btn")[2]).on("click",function(){
    alert("Has big title? : "+$(".title-2").hasClass("big-title"));
});
// button to remove class
$($(".modify-style-btn")[3]).on("click",function(){
    if ($(".title-2").hasClass("big-title")){
        $(".title-2").removeClass("big-title");
        alert("class removed: 'big-title'");
    }else{
        alert("ANY class removed");
    }
});



//------------------ TEXT MANIPULATING WITH JQUERY

// button PRINT YOUR NAME
$(".modify-text-btn").first().on("click",function(){
    let name = prompt("type your name: ");
    $(".title-3").text("Hi <i>"+name+">/i>");
});
// reselecting the object with $()
$($(".modify-text-btn")[1]).on("click",function(){
    let name = prompt("type your name: ");
    $(".title-3").html("Hi <i>"+name+"</i>");
});