import React from 'react'
import Input from '../atoms/input'
import Button from '../atoms/button'
import { GoMail } from "react-icons/go";
import { RiLockPasswordLine } from "react-icons/ri";
import IconButton from '../atoms/button/icon';
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { IoEyeOffOutline } from "react-icons/io5";

const LoginForm = () => {
    const [showPassword, setShowPassword] = React.useState(false)

    const [formstate, setFormState] = React.useState({
        email: '',
        password: ''
    })

    return (
        <div className="flex flex-col gap-3 mt-5">
            <Input type="text" placeholder="Enter your Email ID" className="focus:border-blue-600 text-gray-500" onChange={(e) => { setFormState({ ...formstate, email: e.target.value }) }} value={formstate.email} startAdornment={<GoMail />} />
            <Input type="password" placeholder="Enter your Password" className="focus:border-blue-600 text-gray-500" onChange={(e) => { setFormState({ ...formstate, password: e.target.value }) }} value={formstate.password} startAdornment={<RiLockPasswordLine />} endAdornment={<IconButton onClick={() => {
                setShowPassword(!showPassword)
            }} icon={showPassword ? <IoEyeOffOutline /> : <MdOutlineRemoveRedEye />} />} />
        </div>
    )
}

export default LoginForm
