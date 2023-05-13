
const express = require("express");

const myApp = express();
const port = 8080;

const style = `
    <style>
        /* ---------------------GENERAL--------------------- */
        :root{
        --border-radius: 30px;
        --border-weight: 2px;

        --ubuntu: 'Ubuntu', sans-serif;
        --montserrat: 'Montserrat', sans-serif;
        --creepster: 'Creepster', cursive;
        --code: 'M PLUS 1 Code', sans-serif;

        --principal-color:#D9EEEC;
        --secondary-color:#3C70A4;
        --third-color:#64B2CD;
        --forth-color:#DA9833;
        --fifth-color:#F65C78;

        --font-size-l: 2.3rem;
        --font-size-m: 1.8rem;
        --font-size-s: 1.3rem;
        }

        *{
        margin: 0;
        padding: 0;
        border: 0;
        font-family: var(--montserrat);
        font-size: var(--font-size-s);
        }
        body{
        text-align: center;
        background-color: var(--principal-color);
        }

        body{
            width: 90%;
            margin: 0 auto;
        }
        /* ----------------- HEADERS */
        h1, h2, h3, h4, h5, h6{
        font-family: var(--ubuntu);
        color: var(--third-color);
        font-weight: bolder;
        }
        h1 > span, h2 > span, h3 > span, h4 > span, h5 > span, h6 > span{
        font-family: var(--ubuntu);
        font-size: var(--font-size-m);
        }
        h1, h2{
        font-size: var(--font-size-l);
        text-align: center;
        }

        h1 > a, h2 > a, h3 > a{
        color: var(--third-color);
        font-family: var(--ubuntu);
        font-size: var(--font-size-m);
        }
        /* ----------------- PARAGRAHP AND LISTS */
        p{
        text-align: left;
        }

        .resalt{
            color: var(--forth-color);
        }

        /* ----------------- BUTTON */
        button{
        padding: 15px;
        border-radius: var(--border-radius);
        border: var(--border-weight) var(--secondary-color) double;

        background-color: var(--white-color);

        font-weight: bol;
        color: var(--secondary-color);
        }
        button:hover, button a:hover{
        background-color: var(--secondary-color);
        color: var(--white-color);
        border-color: var(--white-color);
        }
        button a{
        text-decoration: none;
        }
        button a:visited{
        color: var(--white);
        }
        @media (max-width: 1028px) {
        h1, h2{
        font-size: 2rem;
        text-align: center;
        }
        p, li{
        font-size:1rem;
        }

        button{
        padding: 10px;
        font-size: 1rem;
        }

        }
    </style>
`

myApp.get("/",(req,res)=>{
    res.send(
        `
        <h1 class="resalt">USING GET METHOD</h1>
        <h1>Calculator</h1>

        ${style}
        <form action="calculate" method="GET">
            <label for="a">a</label>
            <input type="number" name="a">
            <label for="a">b</label>
            <input type="number" name="b"s>
            <br>
        
            <input type="radio" name="operation" value="multiply" id="multiply" >
            <label for="multiply">multiply</label>
            
            <input type="radio" name="operation" value="sum" id="sum">
            <label for="sum">sum</label>
            
            <input type="radio" name="operation" value="divition" id="divition">
            <label for="divition">divition</label>
            
            <input type="radio" name="operation" value="rest" id="rest">
            <label for="rest">rest</label>

            <br>
            <button type="submit">Calculate</button>
        </form>

        <h1 class="resalt">USING POST METHOD</h1>
        <h1>Calculator</h1>

        `
    );
});

myApp.get("/calculate",(req,res)=>{
    console.log(req);

    let a = Number(req.query.a);
    let b = Number(req.query.b);
    let operation = req.query.operation;
    let result;

    switch (operation) {
        case "multiply":
            result = a * b;
            break;
        case "sum":
            result = a + b;
            break;
        case "divition":
            result = a / b;
            break;
        case "rest":
            result = a - b;
            break;
    
        default:
            result = a + b;
            break;
    };

    res.send(
        ` ${style}
        <h1>Result</h1>
        <br>
        <p>The ${(operation !== undefined)? operation : "sum"} result is: ${result}</p>
        <button><a href="/">Return</a></button>
        `
    );
});

myApp.listen(port,()=>{
    console.log(`Server listening at port ${port}`);
});