import React from 'react'

const Features = () => {
	return (
		<section className='bg-maWhite'>
			<div className='myContainer py-16 md:py-32'>
				<h2 className='font-semibold text-2xl sm:text-3xl md:text-5xl leading-snug text-center mb-12'>
					<span className='block text-base font-medium leading-7 text-bluePencil mb-2'>
						Features
					</span>
					Design that solves <br className='hidden sm:block' />
					problems, one product at <br className='hidden sm:block' />
					a time
				</h2>

				{/* Grid */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-manguBlack'>
					{[
						'Uses Client First',
						'Two Free Revision Round',
						'Template Customization',
						'24/7 Support',
						'Quick Delivery',
						'Hands-on approach',
					].map((title, idx) => (
						<div key={idx} className='bg-white p-6 md:p-8 rounded-lg shadow-sm'>
							<img
								className='w-12 h-12 mb-6'
								src={`/svg/icon${idx + 1}.svg`}
								alt={`icon ${idx + 1}`}
							/>
							<h3 className='text-xl md:text-2xl font-semibold mb-3'>{title}</h3>
							<p className='text-sm md:text-base text-gray-600'>
								Euismod faucibus turpis eu gravida mi. Pellentesque et velit
								aliquam sed faucibus turpis eu gravida mi. Pellentesque et velit
								aliquam sed mi.
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Features
