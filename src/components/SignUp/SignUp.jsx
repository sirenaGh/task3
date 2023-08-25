import './SignUp.css';
const SignUp =()=> {
    return(
        <div>
            <form className='form1'>
                <input type='email' value="Enter your Email"/>
                <input type='password' value="Enter the password"/>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}
export default SignUp