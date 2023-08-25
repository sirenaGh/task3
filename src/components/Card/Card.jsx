import './Card.css';
const Card =(props) =>{
    return(
        <div className='card'>
            <div className='image'><img src={props.img} alt=''/></div>
            <h2>{props.title}</h2>

        </div>
    )
}
export default Card;