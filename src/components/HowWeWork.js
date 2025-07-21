import React from 'react'

const HowWeWork = () => {
	return (
		<section className='bg-maWhite'>
			<div className='flex myContainer py-32'>
				<div className='mr-36 space-y-4'>
					<h2 className='font-semibold text-5xl leading-64 text-manguBlack'>
						How we work
					</h2>
					<p className='text-manguBlack'>
						Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed
						do eiusmod tempor.
					</p>
					<button className='text-bluePencil leading-8'>
						Get in touch with us →
					</button>
				</div>
				{/* right */}
				<>
					<div className='grid md:grid-cols-2 gap-y-10 gap-x-5 max-w-6xl mx-auto'>
						{['Strategy', 'Wireframing', 'Design', 'Development'].map(
							(title, idx) => (
								<div key={idx} className='bg-white p-5 rounded-lg'>
									<img
										className='inline-block w-12 h-12 bg-cover bg-center mb-4'
										src={`/svg/pointer${idx + 1}.svg`}
										alt='number'
									/>
									<h3 className='text-3xl font-medium mb-2'>{title}</h3>
									<p className='text-gray-600 text-sm'>
										Euismod faucibus turpis eu gravida <br /> mi. Pellentesque
										et velit aliquam .
									</p>
								</div>
							)
						)}
					</div>
				</>
			</div>
		</section>
	)
}

export default HowWeWork
