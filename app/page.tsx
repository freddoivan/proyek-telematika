import Hero from '@/components/Hero';
import Image from 'next/image';
import styles from './login.module.css';

export default function Home(){
  return (
    <main className='overflow-hidden'>
      <Hero />
    </main>
  )
}