import React from 'react'
import clsx from 'clsx'

interface ValidatorProps {
    value: string;
}

const Validator: React.FC<ValidatorProps> = ({ value }) => {
    const length = value.length < 5 ? 'weak' : value.length < 8 ? 'normal' : 'strong'
    return (
        <div className='rounded-md bg-gray-300 h-1'>
            <div className={clsx('h-1 transition-all duration-300', {
                'bg-red-500 w-[33%]': length == 'weak',
                'bg-yellow-500 w-[66%]': length == 'normal',
                'bg-green-500 w-[100%]': length == 'strong',
                'w-0': value.length == 0
            })}></div>
        </div>
    )
}

export default Validator
