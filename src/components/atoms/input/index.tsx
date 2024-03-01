import React from 'react'
import clsx from 'clsx'

interface InputProps {
    type: string;
    placeholder: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    className?: string;
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
}

const Input: React.FC<InputProps> = ({ type, placeholder, onChange, value, className, endAdornment, startAdornment }) => {
    return (
        <div className="relative">
            <input
                className={clsx("border-b-2 border-gray-500 w-full outline-none p-3 text-sm", className, startAdornment && "pl-10", endAdornment && "pr-10")}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                value={value}
            />
            {startAdornment && <div className="absolute left-3 top-1/2 -translate-y-1/2">{startAdornment}</div>}
            {endAdornment && <div className="absolute right-3 top-1/2 -translate-y-1/2">{endAdornment}</div>}
        </div>
    )
}

export default Input
