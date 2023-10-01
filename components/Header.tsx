import React from 'react';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
        <div className='container'>
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
        </div>
    </header>
  )
}

export default Header