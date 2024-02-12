import React from 'react'
import Card from '../atoms/card'
import Image from 'next/image'
import logo from '@/assets/img/logo.png'


const Blog = () => {
  return (
    <div className='bg-[#023e8a] p-5'>
      <Card image={logo} title='test heading' date='13-02-2024' author='Ria' description='hellow how do you do' />
    </div>
  )
}

export default Blog