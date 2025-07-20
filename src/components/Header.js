'use client'
import Link from 'next/link'
import Navbar from './Navbar'
export default function Header() {
	return (
		<header className='py-5 bg-flyByNight'>
			<div className='flex justify-between items-center myContainer'>
				{/* Logo */}
				<Link href='/'>
					<img src='/svg/Logo.svg' alt='Logo' />
				</Link>
				<div className='flex items-center'>
				<Navbar className='text-cosmic'/>
					{/* RighhtButton  */}
					<button className='ml-12 text-white font-medium text-base py-4 px-12 border-2 border-gravelFint rounded-full '>
						Contact us
					</button>
				</div>
			</div>
		</header>
	)
}
