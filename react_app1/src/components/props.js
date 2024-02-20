import React from "react";

function Student(props) {
    return (
        <div>
            <table>
                <tr>
                    <th>Name</th>
                    <td>{props.name}</td>
                </tr>
                <tr>
                    <th>Age</th>
                    <td>{props.age}</td>
                </tr>
                <tr>
                    <th>City</th>
                    <td>{props.location}</td>
                </tr>
            </table>
        </div>
    )
}

export default Student;
    



