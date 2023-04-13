import React from 'react'
import { BiEnvelope, BiKey, BiUser } from 'react-icons/bi'

export default function LoginInput({ icon, placeholder }) {
    return (
        <div className='relative max-w-sm flex items-center gap-3'>
            <span>
                {icon == 'user' ? <BiUser className='w-6 h-6' /> : icon == 'email' ? <BiEnvelope className='w-6 h-6' /> : icon == "password" ? <BiKey className='w-6 h-6' /> : ''}
            </span>
            <input type="text" className='w-full bg-gray-50 border border-gray-200 rounded h-12' placeholder={placeholder} />
        </div>
    )
}
