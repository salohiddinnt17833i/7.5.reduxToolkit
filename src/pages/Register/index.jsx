import user from '../../assets/formImg/user.svg'
import emaill from '../../assets/formImg/sms.svg'
import lock from '../../assets/formImg/lock.svg'
import google from '../../assets/formImg/google.svg'
import { Link } from 'react-router-dom/dist'
import { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { userRegister, userLogin } from '../../redux/userSlice'

function Register() {

    const dispatch = useDispatch()
    const store = useSelector(store => store)
    const nameref = useRef(null)
    const emailref = useRef(null)
    const passwordref = useRef(null)

    function handeSave(e) {
        e.preventDefault()
        const data = {
            name: nameref.current.value,
            email: emailref.current.value,
            password: passwordref.current.value
        }
        dispatch(userRegister(data))
        console.log(store);
    }
    return (
        <div className='w-full h-[1000px] bg-[#C5C5C5]'>
            <div className='w-10/12 m-auto  max-w-screen-2xl'>
                <h1 className='text-3xl py-5'>Light</h1>
                <div className='w-full h-4 bg-[#333333] rounded'></div>
            </div>
            <div className='w-[498px] m-auto my-10 bg-white rounded-lg p-8'>
                <h3 className='text-center text-3xl font-bold'>Let's go!</h3>
                <form>
                    <div className='pt-3'>
                        <label className='font-normal' htmlFor="name">Full name</label>
                        <div className=' my-3  w-full flex items-center border border-[#D1D1D1] p-2 rounded-xl gap-2'>
                            <img src={user} alt="" />
                            <input ref={nameref} className='outline-none w-full' type="text" id='name' placeholder='John Doe' />
                        </div>
                    </div>

                    <div className='pt-3'>
                        <label className='font-normal' htmlFor="email">Email</label>
                        <div className=' my-2 w-full flex items-center border border-[#D1D1D1] p-2 rounded-xl gap-2'>
                            <img src={emaill} alt="" />
                            <input ref={emailref} className='outline-none w-full' type="text" id='email' placeholder='example@gmail.com' />
                        </div>
                    </div>
                    <div className='pt-3'>
                        <label className='font-normal' htmlFor="password">Choose Password</label>
                        <div className=' my-2 w-full flex items-center border border-[#D1D1D1] p-2 rounded-xl gap-2'>
                            <img src={lock} alt="" />
                            <input ref={passwordref} className='outline-none w-full' type="password" id='password' placeholder='Minimum 8 characters' />
                        </div>

                    </div>
                    <button onClick={handeSave} className='w-full bg-[#FFA7A7] p-4 rounded-xl text-white mt-6 transition-all duration-400 hover:bg-[#FF014E]'>Sign In</button>
                    <button className='w-full  border border-[#D1D1D1] p-4 rounded-xl text-white mt-6 flex items-center text-[#797979] justify-center gap-3'>
                        <img src={google} alt="" />
                        <span className='text-black'>
                            Sign Up with Google
                        </span>
                    </button>
                    <div className='text-center m-3 font-bold' >
                        <Link to={'/login'}>or Login with SSO</Link>
                    </div>
                    <hr />
                    <h6 className='text-center text-[9px] m-2'>By lobby the button above, you agree to our <span className='underline'>
                        Terms of Service</span> and <span className='underline'>
                            Privacy Policy</span>.</h6>
                </form>
            </div>
        </div>
    )
}

export default Register

