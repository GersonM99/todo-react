import React from "react";

const Tarea = (props) => {
    return(
        <div>
            <div className="tarea">
                <span>{props.tarea}</span><span>  editar</span><span>  borrar</span>
            </div>
        </div>
    )
}
export default Tarea