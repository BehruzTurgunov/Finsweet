import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'

const Footer = () => {
	return (
		<footer className='bg-flyByNight'>
			<div className='myContainer pt-24'>
				<div className='text-white flex'>
					<div>
						<Link className='block mb-7 ' href='/'>
							<img src='/svg/Logo.svg' alt='foterLogo' />
						</Link>
						<p className='font-medium text-base'>
							We are always open to discuss your project and <br />
							improve your online presence.
						</p>
					</div>

					<div className='ml-64'>
						<h3 className='font-semibold text-5xl mb-4'>Lets Talk!</h3>
						<p className='mb-7'>
							We are always open to discuss your project,
							<br />
							improve your online presence and help with your <br /> UX/UI
							design challenges.
						</p>
						<div className='flex space-x-7'>
							<img src='/svg/Facebook.svg' alt='Facebook' />
							<img src='/svg/Twitter.svg' alt='Twitter' />
							<img src='/svg/Instagram.svg' alt='Instagram' />
							<img src='/svg/Linkedin.svg' alt='Linkedin' />
						</div>
					</div>
				</div>
				<div className='flex  bg-snugYellow text-manguBlack max-w-520 py-4 pl-9 space-x-7 '>
					<div>
						<p className='font-medium text-lg'>Email me at</p>
						<Link href='#'>contact@website.com</Link>
					</div>
					<div>
						<p className='font-medium text-lg'>Call us</p>
						<Link href='#'>0927 6277 28525</Link>
					</div>
				</div>
			</div>
			<div className='bg-white'>
				<div className='myContainer flex justify-between py-8'>
					<p>Copyright 2021, Finsweet.com</p>
					<Navbar className='text-manguBlack'/>
				</div>
			</div>
		</footer>
	)
}

export default Footer
