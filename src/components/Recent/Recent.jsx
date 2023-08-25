import Card from '../Card/Card';
import './Recent.css';
import RecentPic1 from './../../Assets/img/12.jpg';
import RecentPic2 from './../../Assets/img/13.jpg';
import RecentPic3 from './../../Assets/img/14.jpg';
import RecentPic4 from './../../Assets/img/15.jpg';
import RecentPic5 from './../../Assets/img/16.jpg';
import RecentPic6 from './../../Assets/img/6.jpg';
const Recent=()=>{
    return(
        <div className='recent'>
            <h1 className='header2'>Corses</h1>
            <p className='header3'>you can select more than one course</p>
            <div className='RecentCont'>
                <Card img={RecentPic1} title={"course name"}/>
                <Card img={RecentPic2} title={"course name"}/>
                <Card img={RecentPic3} title={"course name"}/>
            </div>
            <div className='RecentCont'>
                <Card img={RecentPic4} title={"course name"}/>
                <Card img={RecentPic5} title={"course name"}/>
                <Card img={RecentPic6} title={"course name"}/>
            </div>
        </div>
    )
}
export default Recent