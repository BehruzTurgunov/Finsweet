import React from 'react'

const Blog = () => {
	return (
		<section>
			<div className='myContainer py-16 text-manguBlack'>
				<h2 className='font-semibold text-4xl sm:text-5xl leading-snug mb-12 sm:mb-16'>
					Our blog
				</h2>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
					{[
						'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
						'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
						'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
					].map((title, idx) => (
						<div key={idx}>
							<img
								className='mb-6 sm:mb-10 w-full h-auto object-cover rounded-md'
								src={`/jpg/Blog${idx + 1}.jpg`}
								alt={`blogImg${idx + 1}`}
							/>
							<p className='font-medium mb-2 sm:mb-4 text-sm sm:text-base'>
								19 Jan 2022
							</p>
							<h3 className='text-xl sm:text-2xl mb-3 sm:mb-4 font-semibold'>
								{title}
							</h3>
							<p className='mb-6 text-sm sm:text-base leading-relaxed'>
								See how pivoting to Webflow changed one person’s sales strategy
								and allowed him to attract...
							</p>
							<button className='font-medium text-snugYellow'>
								Read More →
							</button>
						</div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Blog
