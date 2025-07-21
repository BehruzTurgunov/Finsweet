import { title } from 'process'
import React from 'react'

const Blog = () => {
	return (
		<section>
			<div className='myContainer py-32 text-manguBlack'>
				<h2 className='font-semibold text-5xl leading-64 mb-16'>Our blog</h2>
				<div className='grid grid-cols-3 gap-x-8'>
					{[
						'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
						'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
						'How one Webflow user grew his single person consultancy from $0-100K in 14 months',
					].map((title, idx) => (
						<div key={idx}>
							<img className='mb-10' src={`/jpg/Blog${idx + 1}.jpg`} alt="blogImg" />
							<p className='font-medium mb-4'>19 Jan 2022</p>
							<h3 className='text-2xl mb-4'>{title}</h3>
							<p className='mb-8'>See how pivoting to Webflow changed one <br /> person’s sales strategy and allowed him to attract</p>
							<button className='font-medium '>
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
