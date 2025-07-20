'use cilent'

import Link from 'next/link'
import React from 'react'

const Hero = () => {
	return (
		<section className='bg-flyByNight py-32'>
			{/* container */}
			<div className='myContainer flex justify-between items-center'>
				{/* heroleft */}
				<div className='text-white'>
					<h1 className=' font-semibold text-6xl leading-74 mb-6'>
						Building stellar <br /> websites for early <br /> startups
					</h1>
					<p className='mb-12'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{' '}
						<br /> eiusmod tempor incididunt.
					</p>
					{/* button adn link  */}
					<div className='flex'>
						<button className='bg-snugYellow text-sambucus py-4 px-14 rounded-full mr-10'>
							View our work
						</button>
						<Link href='#' className='flex items-center gap-2 text-white'>
							View Pricing →
						</Link>
					</div>
				</div>
				{/* heroRight */}
				<div>
					{/* img */}
					<img src='/png/Illustration.png' alt='heroImg' />
				</div>
			</div>
		</section>
	)
}

export default Hero
