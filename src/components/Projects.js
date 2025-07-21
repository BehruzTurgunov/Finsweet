import Link from 'next/link'
import React from 'react'

const Projects = () => {
	return (
		<section>
			<div className='myContainer py-32'>
				<div className='flex justify-between items-center text-manguBlack mb-16'>
					<h2 className='font-semibold text-5xl leading-64'>
						View our projects
					</h2>
					<button className='font-medium '>View More →</button>
				</div>
				{/* grid */}
				<div className='grid grid-cols-3 grid-rows-2 gap-8 text-white'>
					{/* iteam 1 */}
					<div className='col-span-2 row-span-2 relative'>
						<img src='/png/projectImg1.png' alt='projectImg1' />
						<div className='absolute  top-0 left-0 w-1/2 h-full bg-gradient-to-r from-flyByNight to-transparent flex flex-col justify-end pb-20 pl-12'>
							<h3 className='font-semibold text-2xl mb-4'>
								Workhub office Webflow <br /> Webflow Design
							</h3>
							<p className='font-medium mb-10'>
								Euismod faucibus turpis eu gravida <br /> mi. Pellentesque et
								velit aliquam
							</p>
							<Link href='#' className='font-medium text-snugYellow'>
								View project →
							</Link>
						</div>
					</div>
					{/* iteam 2 */}
					<div className='relative'>
						<img src='/png/projectImg2.png' alt='projectImg2' />
						<div className='absolute top-0 left-0 w-full h-full bg-gradient-to-r from-flyByNight to-transparent flex flex-col justify-end pb-11 pl-16'>
							<h3 className='font-semibold text-2xl mb-3'>Unisaas Website <br /> Design</h3>
							<Link href='#' className='font-medium text-snugYellow'>
								View portfolio →
							</Link>
						</div>
					</div>
					{/* iteam 3 */}
					<div>
						<img src='/png/projectImg3.png' alt='projectImg3' />
					</div>
				</div>
			</div>
		</section>
	)
}

export default Projects
