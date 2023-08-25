import './About.css';
import AboutPic from './../../Assets/img/21.jpg'
const About =() =>{
    return(
        <div className='about'>
            <h1>About</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.<br/> Molestias cum odit perferendis, iusto repellat eveniet<br/> distinctio optio asperiores alias,<br/> nihil veniam aliquid assumenda porro est saepe ipsa ea quia fugit!<br/> Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/>Vitae quidem recusandae temporibus. Suscipit vitae<br/> culpa porro tempore asperiores,<br/> voluptatibus magni molestiae? Nesciunt exercitationem consequatur ratione ab, beatae illo repellat at?</p>
            <img src={AboutPic} alt=''/>
        </div>
    )
}
export default About