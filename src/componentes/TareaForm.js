import React, {useState} from "react";


const TareaForm = (props) => {
    const [inputText, setInputText] = useState("");
    const[validacion, setValidacion] = useState(true);


    const manejarFormulario = (event) => {
    setInputText(event.target.value);
    console.log(inputText)
}
    const submit = (event) => {
        event.preventDefault();
        if(inputText.trim() !== ""){

        
        props.nuevaTarea(inputText);
        setInputText("");
        setValidacion(true);
    }
    else {
        setValidacion(false);}
    }

    return(
        <div>
            <form className="form" onSubmit={submit}>
                <span>Añadir tarea</span>
                <input value={inputText} onChange={manejarFormulario}></input>
                <button>Añadir</button></form>
                {
                    !validacion &&
                    <div className="validacion">añada una tarea </div>
                }
        </div>
    )

}

export default TareaForm