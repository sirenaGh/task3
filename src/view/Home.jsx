import About from '../components/About/About';
import Contact from '../components/Contact/Contact';
import Header from '../components/Header/header';
import Recent from '../components/Recent/Recent';
import './home.css';
const Home = () =>{
    return(
        <div>
            <Header/>
            <About/>
            <Recent/>
            <Contact/>
            
        </div>

    )
}
export default Home