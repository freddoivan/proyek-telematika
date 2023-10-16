"use client"
import Image from 'next/image'
import ReactPlayer from 'react-player'


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ReactPlayer 
       url='https://youtu.be/IODxDxX7oi4'
       controls={false} 
       playing={true}/>
    </main>
  )
}