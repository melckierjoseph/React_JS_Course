import Button from "./components/button";
import Table from "./components/table";
import { Functionprobs } from "./components/props";
import ArrayObjects from "./components/arrayObjects";
import Destructure from "./components/destructure"
import Student from "./components/props";
import ButtonClick from "./components/button";


function App(){

   const array = ['PHP', 'JSP', 'React', 'Angular'];

   return(

   <div>
    {
    array.map( (element) => {
     return  <li>{element}</li>
    })}
   <Button name="You can click to search"/>    <Button name="Clear"/>
    <hr></hr>
    <h2><u>Using Props</u></h2>
    <Student name='Johnie' age='20' location='Chennai' />
    <Student name='Toneu' age='32' location='Bangalore' />
    <Student name='Josies' age='23' location='Hyderabad' />
    <Student name='Sodge' age='43' location='Chennai' />
    <Student name='Jsodge' age='32' location='London' />




   <hr></hr>
   <h3>Array Objects</h3>
   <ArrayObjects />
   <Destructure />
   <ButtonClick> You are in Control </ButtonClick>
   </div>
   )
}

export default App;