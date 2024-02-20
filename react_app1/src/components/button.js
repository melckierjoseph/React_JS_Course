import React from "react";
import './table.css';

function ButtonClick(props)
{
    return (
    <>
        <button className="btnClick">
            { props.name }
        </button>
    </>
    );

}

export default ButtonClick;