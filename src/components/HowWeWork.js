import React from 'react'

const HowWeWork = () => {
	return (
		<section className='bg-maWhite'>
			<div className='myContainer py-16 md:py-32 flex flex-col lg:flex-row gap-12'>
				{/* left */}
				<div className='lg:w-1/3 space-y-4 text-center lg:text-left'>
					<h2 className='font-semibold text-3xl md:text-5xl leading-snug text-manguBlack'>
						How we work
					</h2>
					<p className='text-manguBlack text-base'>
						Lorem ipsum dolor sit amet, consectetur <br className='hidden md:block' />
						adipiscing elit, sed do eiusmod tempor.
					</p>
					<button className='text-bluePencil text-base leading-8'>
						Get in touch with us →
					</button>
				</div>

				{/* right */}
				<div className='grid sm:grid-cols-2 gap-y-10 gap-x-5 lg:w-2/3'>
					{['Strategy', 'Wireframing', 'Design', 'Development'].map((title, idx) => (
						<div key={idx} className='bg-white p-6 rounded-lg shadow-sm text-center sm:text-left'>
							<img
								className='inline-block w-12 h-12 mb-4'
								src={`/svg/pointer${idx + 1}.svg`}
								alt={`Step ${idx + 1}`}
							/>
							<h3 className='text-xl md:text-2xl font-semibold mb-2'>{title}</h3>
							<p className='text-gray-600 text-sm'>
								Euismod faucibus turpis eu gravida <br className='hidden sm:block' />
								mi. Pellentesque et velit aliquam .
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default HowWeWork
