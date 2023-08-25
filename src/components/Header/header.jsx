import NavBar from '../NavBar/NavBar';
import Hero from '../Hero/Hero';
import './HeaderStyle.css';
import heroPic from './../../Assets/img/2.jpg';
const Header =() => {
    return(
        <header>
            <NavBar logo="LOGO" list={["Home","About","Courses","contact"]} button="sign up"/>
            <Hero heroPicture={heroPic} header1="Start learning with EduPlatform" button="Join us"/>
        </header>
    )
}
export default Header