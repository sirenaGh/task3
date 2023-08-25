import SignUp from '../SignUp/SignUp';
import './Contact.css';
const Contact =()=> {
    return(
        <div className='cont'>
            <h1>Contact</h1>
            <h2>LOGO</h2>
            <SignUp/>
            <input type='text' value="search"/>
            <a href="https://www.flaticon.com/free-icons/contacts" title="contacts icons"> </a>
           <p className='p1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
    )
}
export default Contact