'use client'

import Link from 'next/link'
import React from 'react'

const Hero = () => {
	return (
		<section className='bg-flyByNight py-16 md:py-32'>
			{/* container */}
			<div className='myContainer flex flex-col lg:flex-row items-center justify-between gap-12'>
				{/* heroleft */}
				<div className='text-white flex-1 text-center lg:text-left'>
					<h1 className='font-semibold text-4xl md:text-5xl lg:text-6xl leading-tight lg:leading-[74px] mb-6'>
						Building stellar <br className='hidden md:block' />
						websites for early <br className='hidden md:block' />
						startups
					</h1>
					<p className='mb-10 text-base md:text-lg'>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br className='hidden sm:block' />
						sed do eiusmod tempor incididunt.
					</p>
					{/* button and link */}
					<div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6'>
						<button className='bg-snugYellow text-sambucus px-8 py-4 sm:px-10 rounded-full'>
							View our work
						</button>
						<Link href='#' className='flex items-center gap-2 text-white text-base font-medium'>
							View Pricing →
						</Link>
					</div>
				</div>

				{/* heroRight */}
				<div className='flex-1 hidden lg:block'>
					<img
						src='/png/Illustration.png'
						alt='heroImg'
						className='w-full max-w-[500px] mx-auto'
					/>
				</div>
			</div>
		</section>
	)
}

export default Hero
