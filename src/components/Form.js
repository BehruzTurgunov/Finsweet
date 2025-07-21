import Link from 'next/link'
import React from 'react'

const Form = () => {
	return (
		<section>
			<div className='myContainer py-16 flex flex-col lg:flex-row'>
				{/* Left (Image & Text) */}
				<div className='relative w-full lg:w-1/2'>
					<img src='/jpg/Form.jpg' alt='formImg' className='w-full h-full object-cover' />
					<div className='absolute inset-0 px-6 sm:px-12 md:px-16 lg:px-24 pt-16 lg:pt-24 bg-gradient-to-r from-flyByNight/70 to-transparent text-white'>
						<h3 className='font-semibold text-3xl sm:text-4xl lg:text-6xl leading-snug mb-6'>
							Building stellar <br /> websites for <br /> early startups
						</h3>
						<p className='font-medium text-sm sm:text-base'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br className='hidden sm:block' />
							sed do eiusmod tempor incididunt ut labore et dolore <br className='hidden sm:block' />
							magna aliqua ut enim.
						</p>
					</div>
				</div>

				{/* Right (Form) */}
				<div className='w-full lg:w-1/2 bg-flyByNight py-16 px-6 sm:px-12 md:px-16 lg:px-24'>
					<h3 className='text-3xl leading-10 text-white mb-4'>Send inquiry</h3>
					<p className='font-medium text-maWhite mb-10 text-sm sm:text-base'>
						Lorem ipsum dolor sit amet, consectetur adipiscing <br className='hidden sm:block' />
						elit, sed do eiusmod tempor incididunt ut labore.
					</p>
					<form className='mb-7'>
						<div className='space-y-4 mb-10'>
							<input
								type='text'
								placeholder='Your Name'
								className='inputStyle w-full'
							/>
							<input
								type='email'
								placeholder='Email'
								className='inputStyle w-full'
							/>
							<input
								type='url'
								placeholder='Paste your Figma design URL'
								className='inputStyle w-full'
							/>
						</div>
						<button
							type='submit'
							className='w-full bg-snugYellow p-4 rounded-full text-center font-semibold'
						>
							Send an Inquiry
						</button>
					</form>
					<Link href="#" className='block font-medium text-lg text-white text-center'>
						Get in touch with us →
					</Link>
				</div>
			</div>
		</section>
	)
}

export default Form
