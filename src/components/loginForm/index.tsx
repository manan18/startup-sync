import React from 'react'
import Input from '../atoms/input'
import Button from '../atoms/button'
import { GoMail } from "react-icons/go";
import { RiLockPasswordLine } from "react-icons/ri";
import IconButton from '../atoms/button/icon';
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import GoogleButton from '../atoms/button/google';
import axios from 'axios'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'

const LoginForm = () => {
    const router = useRouter()

    const [showPassword, setShowPassword] = React.useState(false)

    const [formstate, setFormState] = React.useState({
        email: '',
        password: ''
    })

    const [loading, setLoading] = React.useState(false)

  const handleLogin = () => {
    setLoading(true)
    axios.post('http://localhost:1337/api/auth/local', formstate).then((res) => {
      toast.success("Logged In Successfully", {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: false
      })
    }).catch((error) => {
      toast.error("Error Occured")
      setFormState({
        email: '',
        password: ''
      })
    }).finally(() => {
      router.push('/dashboard')
    })
  }

  const forgotPassword = () => {
    router.push('/forgotpassword')
  }

    return (
        <div className="flex flex-col gap-3 mt-5">
            <Input type="text" placeholder="Enter your Email ID" className=" text-gray-500" onChange={(e) => { setFormState({ ...formstate, email: e.target.value }) }} value={formstate.email} startAdornment={<GoMail />} />
            <Input type={showPassword ? 'text' : 'password'} placeholder="Enter your Password" className=" text-gray-500" onChange={(e) => { setFormState({ ...formstate, password: e.target.value }) }} value={formstate.password} startAdornment={<RiLockPasswordLine />} endAdornment={<IconButton onClick={() => {
                setShowPassword(!showPassword)
            }} icon={showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />} />} />
            <p className="text-xs text-gray-600 hover:text-blue-700 hover:underline cursor-pointer" onClick={forgotPassword}>Forgot Password?</p>
            <Button className="text-sm" onClick={handleLogin} disabled={loading}>Log In</Button>
            <p className="text-xs text-gray-600">Don't have an account? <span className="text-blue-700 hover:underline cursor-pointer">Sign Up</span></p>
            <div className='border-b-2 border-gray-300 my-3'></div>
            <div className="flex items-center justify-center">
                <GoogleButton />
            </div>
        </div>
    )
}

export default LoginForm
