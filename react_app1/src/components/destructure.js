function Destructure(){


//const shoppinglist = ['Oranges', 'Cassava', 'Garri', 'Ewa', 'Dodo', 'Books'];   

const employees = [
    {
        name:'Name1',
        address:'Chennai1',
        gender: 'Male',

    },
    {
        name:'Name2',
        address:'Chennai2',
        gender: 'Female',
    },
    {
        name:'Name3',
        address:'Chennai3',
        gender: 'Male',
    }
];

const a=8, b=4;
const add = a + b;
const substract = a - b;
const divide = a/b;
const multiply = a * b;



//let  { name, address, gender } = employees

return(
<>
<div>
    <p>Sum of  8 + 4 = { add} </p>
    <p>Substract of of  8 + 4 = {substract} </p>

    <p>Division of of  8 + 4 ={ divide} </p>

    <p>Multiplicaiton of of  8 + 4 ={ multiply} </p>
    <hr />

</div>
<div>
    {
        employees.map(({name, address, gender}) => {
            return (
                <div>
                    <p>{name}</p>
                    <p>{address}</p>
                    <p>{gender}</p>


                </div>
            )
        }
        )
    }
        <hr />

</div>
<div>
<h3><u>Array Objects Destructure</u></h3>

    {
      employees.map((e) => {
        return(
            <table>
                <tr>
                    <td>{e.name}</td>
                    <td>{e.address}</td>
                    <td>{e.gender}</td>
                </tr>
            </table>

        )
      })
    }
</div>
</>

)


 
//  const names = ['Joy','Popy','Loi','Fez','Bei']

//  const x = names[1];
//  const y = names[2];

//  //const [child, student, parent] = names;
// return(
//     <ul>{ y }</ul>
// )

//  }
}
 export default Destructure;

