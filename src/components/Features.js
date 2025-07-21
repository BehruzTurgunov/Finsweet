import { title } from 'process'
import React from 'react'

const Features = () => {
	return (
		<section className='bg-maWhite'>
			<div className='myContainer py-32'>
				<h2 className='font-semibold text-5xl leading-64 text-center mb-12'>
					<span className='font-medium text-base leading-7 '>
						Features
					</span>{' '}
					<br />
					Design that solves <br /> problems, one product at <br /> a time
				</h2>
				{/* grid */}
				<div className='grid grid-cols-3 gap-y-6 gap-x-8 text-manguBlack'>
					{[
						'Uses Client First',
						'Two Free Revision Round',
						'Template Customization',
						'24/7 Support',
						'Quick Delivery',
						'Hands-on approach',
					].map((title, idx) => (
						<div key={idx} className='bg-white p-12 rounded-lg'>
							<img
								className='inline-block bg-cover bg-center mb-6'
								src={`/svg/icon${idx + 1}.svg`}
								alt='number'
							/>
							<h3 className='text-2xl mb-3'>{title}</h3>
							<p className=''>
								Euismod faucibus turpis eu gravida mi. Pellentesque et velit
								aliquam sed faucib turpis eu gravida mi. Pellentesque et velit
								aliquam sed mi.
							</p>
						</div>
					))}
					<div></div>
				</div>
			</div>
		</section>
	)
}

export default Features
