import React from 'react'
import { Button } from 'antd'
import LoveTime from '@/components/love-time/LoveTime.jsx'

const Home = () => {
  return (
    <div className='page-home'>
      <h1 className="title">global less</h1>
      <h1 className="title">Welcome to Lovers Client !</h1>
      <h3 className="bold">哈哈哈哈哈哈</h3>
      <Button>antd button</Button>
      <LoveTime />
    </div>
  )
}

export default Home
