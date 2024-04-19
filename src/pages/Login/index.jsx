import user from '../../assets/formImg/user.svg'
import email from '../../assets/formImg/sms.svg'
import lock from '../../assets/formImg/lock.svg'
import google from '../../assets/formImg/google.svg'
import { Link } from 'react-router-dom/dist'

function Login() {
    return (
        <div className='w-full h-[1000px] bg-[#C5C5C5]'>
            <div className='w-10/12 m-auto  max-w-screen-2xl'>
                <h1 className='text-3xl py-5'>Light</h1>
                <div className='w-full h-4 bg-[#333333] rounded'></div>
            </div>
            <div className='w-[498px] m-auto my-10 bg-white rounded-lg p-8'>
                <h3 className='text-center text-3xl font-bold'>Welcome back!</h3>
                <form>
                    <div className='pt-3'>
                        <label className='font-normal' htmlFor="email">Email</label>
                        <div className=' my-2 w-full flex items-center border border-[#D1D1D1] p-2 rounded-xl gap-2'>
                            <img src={email} alt="" />
                            <input className='outline-none w-full' type="text" id='email' placeholder='example@gmail.com' />
                        </div>
                    </div>
                    <div className='pt-3'>
                        <label className='font-normal' htmlFor="password">Password</label>
                        <div className=' my-2 w-full flex items-center border border-[#D1D1D1] p-2 rounded-xl gap-2'>
                            <img src={lock} alt="" />
                            <input className='outline-none w-full' type="text" id='password' placeholder='Enter password' />
                        </div>

                    </div>
                    <p className='float-right'>Forgot password</p>
                    <button className='w-full bg-[#FFA7A7] p-4 rounded-xl text-white mt-6 transition-all duration-400 hover:bg-[#FF014E]'>Log In</button>
                    <button className='w-full  border border-[#D1D1D1] p-4 rounded-xl text-white mt-6 flex items-center text-[#797979] justify-center gap-3'>
                        <img src={google} alt="" />
                        <span className='text-black'>
                            Log in with Google
                        </span>
                    </button>
                    <div className='text-center m-3 font-bold' >
                        <Link to={'/register'}>or Register with SSO</Link>
                    </div>
                </form>
            </div>

        </div>
    )
}

export default Login