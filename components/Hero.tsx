'use client';

import styles from './login.module.css'
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    const handleScroll = () => {

    }
  return (
    <div className='hero'>
        <div className='flex-1 pt-36 padding-x'>
            <h1 className='hero__title'>
                GetFitt
            </h1>

            <p className='hero__subtitle'>
                Get fit and healthy!
            </p>
            <button className={styles.btn}>
            <Link href='/login'>Login</Link>
            </button>
        </div>
        <div className='hero__image-container'>
            <div className='hero__image'>
                <Image src='/bodybuilder.png' alt='hero' fill className='object-contain' />
            </div>
        </div>
    </div>
  )
}

export default Hero