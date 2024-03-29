
function reportWindowSize() {
    if(window.innerWidth < 800){
        
        $(".container").css({
            "width":"90%",
            "margin": "0 auto",
            "display": "block",
        });
    
        $(".nav").css({
            "display":" block",
            "position":" static",
            "width":" 90%",
            "align-items": "center",
        });
        
        $(".nav-item").css({
            "display": "inline-block",
            "position": "static",
            "margin": "0.3rem 0",
            "width": "auto",
        });
    }else{
        
        $(".container").css({
            "width":"74.1%",
            "margin": "0 auto 0 21%",
            "display": "block",
        });
    
        $(".nav").css({
            "display":" inline-block",
            "position":"fixed",
            "width":" 20%",
            "top": "auto",
        });

        $(".nav-item").css({
            "display": "block",
            "position": "relative",
            "margin": "0.3rem 0",
            "width": "100%",
        });

    };
};

window.onresize = reportWindowSize;

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


//------------------ ATTRIBUTES MANIPULATING WITH JQUERY

// button PRINT YOUR NAME
function hi() {
    alert("Hi i'm a test button");
};
/*
    disabled true | dar false
    disabled false | dar true
*/
// disabled button 
$($(".modify-atributes-btn")[0]).on("click",function () {
    let disabled = $(".btn-test").prop("disabled");
    $(".btn-test").prop("disabled",(disabled ? false : true));
});

// pineapple button 
$($(".modify-atributes-btn")[1]).on("click",function () {
    let img = $(".img-1")
    if (!(img.prop("img") == 1)) {
        img.prop("src","pineapple.png");
        img.prop("alt","pineapple.png");
        img.prop("img","1");
    } else {
        img.prop("src","tomato.png");
        img.prop("alt","tomato.png");
        img.prop("img","2");
    };
});

//------------------ ADDING EVENTS WITH JQUERY

// SAY HI
$(".modify-event-btn").on("click",function () {
    alert("Hi, my clases are:"+$(this).prop("class"));
});

// KEY DOWN DETECTER
$(document).on("keydown",function (event) {
    let actualText = $(".label-1").text();
    if (event.key == "Backspace") {
        
    } else if(actualText.length >21){
        actualText = actualText.slice(1,22)
        $(".label-1").text(actualText + event.key)
    }else{
        $(".label-1").text(actualText + event.key)
    }
    
});

//------------------ ADDING AND REMOVING ELMENTS WITH JQUERY

// ADD BUTTONS
function addElement() {
    $(".add-before-me").before("<button type='button' class='btn-added' onclick='hi()'>I'm a new button</button>");
};
// REMOVE BUTTONS
function removeBtn() {
    let btns = $(".btn-added")
    let len = btns.length

    if (len === 0) {
        alert("There's not any bnt-new to delete");
    }else{
        $(btns[len-1]).remove();
    };

};

$($(".add-rem-elme-btn")[0]).on("click",addElement);
$($(".add-rem-elme-btn")[1]).on("click",removeBtn);

//------------------ EFFECTS WITH JQUERY

// IMG FADE AND SLIDE
function imgFadeToogle() {
    $(".img-2").fadeToggle();
};
function imgSlideToogle() {
    $(".img-2").slideToggle();
};
//adding functions to the buttons
$(
    $(".box-flex-row")[0]
).children(".effect-btn").each((index, element)=>{
    $(element).on("click", index === 0 ? imgFadeToogle : imgSlideToogle);
});


function resalt() {
    let buttons = $($(this).parent().children(".box-flex-row").children())
    buttons.addClass("border-higlith");
    setTimeout(() => {
        buttons.removeClass("border-higlith");
    }, 700);
};
$("h1.flex-item").on("click",resalt);
