import './index.css'
import './usercard.css'
//import { PropTypes } from 'prop-types';


const userData = [
{
    name: "Anand Britto",
    city: "Chennai",
    description: "Front End Develper",
    skill: ["JAVA","Php","MySQLEST","PM","Quality","PMO"],
    online: false,
    profile: "images/profile_pic1.png",
},
{
    name: "Settu",
    city: "TV Malai",
    description: "Technical Support",
    skill: ["SQL","ITIL","TEST","Queries","Tech Support","Customer Support"],
    online: true,
    profile: "images/profile_pic2.png",
},
{
        name: "Alex Donicia",
        city: "UAE",
        description: "Graphic Desginer",
        skill: ["Design","UX","Graphic","Printing","Loading","Machine"],
        online: true,
        profile: "images/profile_pic3.png",
}




];

function User(props)
{
    return(
        <div className='Cardstyle'>
        <div className="card-container">
            <span className={props.online? "pro online" :"pro offline"}>
                {props.online?"ONLINE": "OFFLINE"}
            </span>
            <img src={props.profile} className="imges" alt="userprofilepic" />
            <h3>{props.name}</h3>
            <h3>{props.city}</h3>
            <p>{props.description}</p>
                <div className='buttons'>
                    <button className='primary'>Message</button>
                    <button className='primary outline'>Following</button>
                </div>
                <div className='skills'>
                    <h6 >Skills</h6>
                    <ul>
                    {props.skill.map((skill,index)=>(<li key={index}>{skill}</li>))}
                    </ul>
                </div>
        </div>
        </div>
    )

}


const Usercard = () => {
    return(
        <div>
        <div>
           {
            userData.map((user,index)=>(
                <User key={index}
                name={user.name}
                city={user.city}
                description={user.description}
                online={user.online}
                profile={user.profile}
                skill={user.skill}
                 />

            ))
           }
            
        </div>
 </div>
    )
}

export default Usercard



    /*

     <User name="Mr.Anand Britto" city="Chennai" description="Front-End Developer" 
       skills={['UI/UX', 'Front End Development', 'HTML', 'CSS',  'Javascript', 'React', 'Node']}
       online={true} profile="images/profile_pic2.png"/>

       {
    userData.map((user,index)=> (
    <User key={index} 
    name={user.name} 
    city={user.city}
    description={user.description}
    online={user.online}
    profile={user.profile}
    skill={user.skills}
    />))
    }

    User.PropTypes = {
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    skill: PropTypes.arrayOf(PropTypes.string).isRequired,
    online:PropTypes.bool.isRequired,
    profile: PropTypes.string.isRequired,
};

    */


