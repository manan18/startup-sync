import React from 'react'
import Card from '../atoms/blogcard'
import Image from 'next/image'
import logo from '@/assets/img/logo.png'


const Blog = () => {
  return (
    <div className='bg-[#023e8a] flex flex-col p-8 items-center gap-5'>
      <h1 className='tracking-wide text-white text-3xl font-semibold'>Exploring Startup Wisdom and Market Trends</h1>
      <p className='text-white tracking-wide font-md w-[50%] text-center'>Dive into the realms of knowledge and inspiration with our thought-provoking blogs, crafted to spark curiosity and ignite your intellect.</p>
      <div className='justify-between flex'>
        <Card image={logo} title='test heading' date='13-02-2024' author='Ria' description='hellow how do you do' />
        <Card image={logo} title='test heading' date='13-02-2024' author='Ria' description='hellow how do you do' />
        <Card image={logo} title='test heading' date='13-02-2024' author='Ria' description='hellow how do you do' />
        <Card image={logo} title='test heading' date='13-02-2024' author='Ria' description='hellow how do you do' />

      </div>
    </div>
  )
}

export default Blog