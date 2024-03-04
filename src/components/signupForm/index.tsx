import Input from '@/components/atoms/input'
import React from 'react'
import { GoMail } from "react-icons/go";
import { useRouter } from 'next/router'
import { toast } from 'react-toastify';
import { FaUser } from "react-icons/fa6";
import { FaRegBuilding } from "react-icons/fa";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { RiLockPasswordLine } from "react-icons/ri";
import IconButton from '@/components/atoms/button/icon';
import { TbLockCheck } from "react-icons/tb";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Button from '@/components/atoms/button';
import { FcGoogle } from "react-icons/fc";
import useAuth from '@/hooks/useAuth';
import { AxiosError } from 'axios';
import Link from 'next/link';
import Validator from '../atoms/validator';

const SignUpForm = () => {
    const [formstate, setFormState] = React.useState({
        username: '',
        company: '',
        email: '',
        password: ''
    })

    const [loading, setLoading] = React.useState(false)
    const [cpasswd, setCPasswd] = React.useState('');
    const router = useRouter()
    const [showPassword, setShowPassword] = React.useState(false)
    const { signup } = useAuth()

    const handleSubmit = async () => {
        setLoading(true)
        if (formstate.password != cpasswd) {
            toast.error('Password does not match', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: false
            })
            setFormState({
                username: '',
                company: '',
                email: '',
                password: ''
            })
            setCPasswd('')
            setLoading(false)
            return
        }
        try {
            await signup(formstate.username, { name: formstate.company }, formstate.email, formstate.password)
            toast.success('Signed Up Successfully', {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: false
            })
            router.push('/login')
        } catch (error: any) {
            toast.error(error.response.data.message, {
                position: 'top-right',
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: false
            })
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="flex flex-col gap-3 mt-5">
            <Input type="text" placeholder="Enter your Username" className=" text-gray-500" onChange={(e) => { setFormState({ ...formstate, username: e.target.value }) }} value={formstate.username} startAdornment={<FaUser />} />
            <Input type="text" placeholder="Enter Company Name" className=" text-gray-500" onChange={(e) => { setFormState({ ...formstate, company: e.target.value }) }} value={formstate.company} startAdornment={<FaRegBuilding />} />
            <Input type="text" placeholder="Enter your Email ID" className=" text-gray-500" onChange={(e) => { setFormState({ ...formstate, email: e.target.value }) }} value={formstate.email} startAdornment={<GoMail />} />
            <Input type="password" placeholder="Enter your Password" className=" text-gray-500" onChange={(e) => { setFormState({ ...formstate, password: e.target.value }) }} value={formstate.password} startAdornment={<RiLockPasswordLine />} endAdornment={<IconButton onClick={() => {
                setShowPassword(!showPassword)
            }} icon={showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />} />} />
            <Validator value={formstate.password} />
            <Input type="password" placeholder="Confirm Password" className=" text-gray-500" onChange={(e) => {
                setCPasswd(e.target.value)
            }} value={cpasswd} startAdornment={<TbLockCheck />} endAdornment={(cpasswd.length > 0 && cpasswd == formstate.password) ? <IoMdCheckmarkCircleOutline className='text-green-600' /> : null} />
            <Button className="text-sm" onClick={handleSubmit} disabled={loading}>Sign Up</Button>
            <p className="text-xs text-gray-600">Already have an account? <Link href='/login' className="text-blue-700 hover:underline cursor-pointer" >Sign In</Link></p>
            <div className='border-b-2 border-gray-300 my-3'></div>
            <Button className="bg-transparent border border-gray-500 hover:bg-transparent flex justify-center items-center gap-2 py-3">
                <FcGoogle />
                <span className="text-black text-sm">Sign Up with Google</span>
            </Button>
        </div>
    )
}

export default SignUpForm
