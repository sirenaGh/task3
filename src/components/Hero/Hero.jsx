import './Hero.css';

const Hero =({heroPicture,header1,button}) => {
    return(
        <div className='hero'>
             <img src={heroPicture} alt='' />
             <div className="content">
                <h1>{header1}</h1>
                <button>{button}</button>
             </div>
        </div>
    )
}
export default Hero