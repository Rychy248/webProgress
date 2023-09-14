import {useState} from "react";

function FormTask(props) {
    let [input, setInput] = useState("");
    
    return(
        <div className="form">
            <input 
                name="input"
                type="text"
                value={input}
                onChange={ e => (function(e){ setInput(e.currentTarget.value); } )(e) }
            />
            <button
                onClick={ () => (
                    function(){
                        setInput("");
                        return props.onClick(input)
                    }
                )()}
            >
                <span>Add</span>
            </button>
        </div>  
    );
};

export default FormTask