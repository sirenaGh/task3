import './NavBar.css';
const NavBar = ({ list}) =>{
    return(
       <nav>
         <h2>LOGO</h2>
         <div className='navCont'>
         <button>sign up</button>
         <ul className='nav-items'>
            <li><a href='/Header'>{list[0]}</a></li>
            <li><a href='/About'>{list[1]}</a></li>
            <li><a href='/Recent'>{list[2]}</a></li>
            <li><a href='/Contact'>{list[3]}</a></li>
         </ul>
         
         </div>
       </nav>
    )
}
export default NavBar