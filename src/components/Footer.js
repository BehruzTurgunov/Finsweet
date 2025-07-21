import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'

const Footer = () => {
	return (
		<footer className='bg-flyByNight'>
			<div className='myContainer pt-24'>
				<div className='text-white flex flex-col lg:flex-row gap-12'>
					{/* left */}
					<div className='flex-1'>
						<Link className='block mb-7' href='/'>
							<img src='/svg/Logo.svg' alt='foterLogo' />
						</Link>
						<p className='font-medium text-base'>
							We are always open to discuss your project and <br className='hidden sm:block' />
							improve your online presence.
						</p>
					</div>

					{/* right */}
					<div className='flex-1'>
						<h3 className='font-semibold text-3xl md:text-5xl mb-4'>Let’s Talk!</h3>
						<p className='mb-7'>
							We are always open to discuss your project,
							<br className='hidden sm:block' />
							improve your online presence and help with your <br className='hidden sm:block' /> UX/UI
							design challenges.
						</p>
						<div className='flex space-x-6'>
							<img src='/svg/Facebook.svg' alt='Facebook' />
							<img src='/svg/Twitter.svg' alt='Twitter' />
							<img src='/svg/Instagram.svg' alt='Instagram' />
							<img src='/svg/Linkedin.svg' alt='Linkedin' />
						</div>
					</div>
				</div>

				{/* Contact Info Box */}
				<div className='flex flex-col sm:flex-row bg-snugYellow text-manguBlack max-w-full sm:max-w-lg mt-12 lg:mt-0 py-6 px-6 sm:space-x-16'>
					<div>
						<p className='font-medium text-lg'>Email me at</p>
						<Link href='#' className='block'>contact@website.com</Link>
					</div>
					<div>
						<p className='font-medium text-lg'>Call us</p>
						<Link href='#' className='block'>0927 6277 28525</Link>
					</div>
				</div>
			</div>

			{/* Footer bottom */}
			<div className='bg-white '>
				<div className='myContainer flex flex-col lg:flex-row justify-between items-center py-8 gap-4'>
					<p className='text-center lg:text-left'>© 2021, Finsweet.com</p>
					<Navbar className='text-manguBlack space-x-8 hidden sm:block' />
				</div> 
			</div>
		</footer>
	)
}

export default Footer
