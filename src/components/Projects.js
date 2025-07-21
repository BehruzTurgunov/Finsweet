import Link from 'next/link'
import React from 'react'

const Projects = () => {
	return (
		<section>
			<div className='myContainer py-16 md:py-32'>
				{/* Title and Button */}
				<div className='flex flex-col md:flex-row justify-between items-start md:items-center text-manguBlack mb-16 gap-6'>
					<h2 className='font-semibold text-3xl md:text-5xl leading-snug'>
						View our projects
					</h2>
					<button className='font-medium text-base md:text-lg text-bluePencil'>
						View More →
					</button>
				</div>

				{/* Grid Layout */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-8 text-white'>
					{/* Item 1 – Large Feature Project */}
					<div className='relative sm:col-span-2 sm:row-span-2'>
						<img
							src='/png/projectImg1.png'
							alt='projectImg1'
							className='w-full h-full object-cover rounded-lg'
						/>
						<div className='absolute inset-0 bg-gradient-to-r from-flyByNight to-transparent rounded-lg flex flex-col justify-end p-6 sm:p-12'>
							<h3 className='font-semibold text-xl sm:text-2xl mb-3'>
								Workhub office Webflow <br /> Webflow Design
							</h3>
							<p className='font-medium text-sm sm:text-base mb-6'>
								Euismod faucibus turpis eu gravida <br className='hidden sm:block' /> mi.
								Pellentesque et velit aliquam
							</p>
							<Link href='#' className='font-medium text-snugYellow text-sm sm:text-base'>
								View project →
							</Link>
						</div>
					</div>

					{/* Item 2 */}
					<div className='relative'>
						<img
							src='/png/projectImg2.png'
							alt='projectImg2'
							className='w-full h-full object-cover rounded-lg'
						/>
						<div className='absolute inset-0 bg-gradient-to-r from-flyByNight to-transparent rounded-lg flex flex-col justify-end p-6 sm:p-11'>
							<h3 className='font-semibold text-xl sm:text-2xl mb-2'>
								Unisaas Website <br /> Design
							</h3>
							<Link href='#' className='font-medium text-snugYellow text-sm sm:text-base'>
								View portfolio →
							</Link>
						</div>
					</div>

					{/* Item 3 */}
					<div>
						<img
							src='/png/projectImg3.png'
							alt='projectImg3'
							className='w-full h-full object-cover rounded-lg'
						/>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Projects
