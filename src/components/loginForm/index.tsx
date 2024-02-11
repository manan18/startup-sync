import React from 'react'
import Input from '../atoms/input'
import Button from '../atoms/button'
import { GoMail } from "react-icons/go";
import { RiLockPasswordLine } from "react-icons/ri";
import IconButton from '../atoms/button/icon';
import { IoEyeOutline } from "react-icons/io5";
import { IoEyeOffOutline } from "react-icons/io5";
import useAuth from '@/hooks/useAuth';
import { useRouter } from 'next/router'
import { FcGoogle } from "react-icons/fc";
import { toast } from 'react-toastify';
import Link from 'next/link';

const LoginForm = () => {
  const router = useRouter()
  const { login } = useAuth()

  const [showPassword, setShowPassword] = React.useState(false)

  const [formstate, setFormState] = React.useState({
    email: '',
    password: ''
  })

  const [loading, setLoading] = React.useState(false)

  const forgotPassword = () => {
    router.push('/forgotpassword')
  }

  const handleLogin = async () => {
    setLoading(true)
    try {
      await login(formstate.email, formstate.password)
      toast.success('Logged In Successfully', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: false
      })
      router.push('/dashboard')
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-3 mt-5">
      <Input type="text" placeholder="Enter your Email ID" className=" text-gray-500" onChange={(e) => { setFormState({ ...formstate, email: e.target.value }) }} value={formstate.email} startAdornment={<GoMail />} />
      <Input type={showPassword ? 'text' : 'password'} placeholder="Enter your Password" className=" text-gray-500" onChange={(e) => { setFormState({ ...formstate, password: e.target.value }) }} value={formstate.password} startAdornment={<RiLockPasswordLine />} endAdornment={<IconButton onClick={() => {
        setShowPassword(!showPassword)
      }} icon={showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />} />} />
      <p className="text-xs text-gray-600 hover:text-blue-700 hover:underline cursor-pointer" onClick={forgotPassword}>Forgot Password?</p>
      <Button className="text-sm" onClick={handleLogin} disabled={loading}>Log In</Button>
      <p className="text-xs text-gray-600">Don&apos;t have an account? <span className="text-blue-700 hover:underline cursor-pointer">Sign Up</span></p>
      <div className='border-b-2 border-gray-300 my-3'></div>
      <Button className="bg-transparent border border-gray-500 hover:bg-transparent flex justify-center items-center gap-2 py-3">
        <FcGoogle />
        <span className="text-black text-sm">Sign In with Google</span>
      </Button>
    </div>
  )
}

export default LoginForm
