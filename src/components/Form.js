import Link from 'next/link'
import React from 'react'

const Form = () => {
	return (
		<section>
			<div className='myContainer flex'>
				{/* right */}
				<div className='relative '>
					<img src='/jpg/Form.jpg' alt='formImg' />
					<div className='absolute  h-full top-0 left-0 px-24 pt-24 bg-gradient-to-r from-flyByNight/50 text-white'>
						<h3 className='font-semibold text-6xl leading-74 mb-6'>
							Building stellar <br /> websites for <br /> early startups
						</h3>
						<p className='font-medium'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />{' '}
							sed do eiusmod tempor incididunt ut labore et dolore <br /> magna
							aliqua ut enim.
						</p>
					</div>
				</div>

				<div className='bg-flyByNight pt-24 px-24'>
					<h3 className='text-3xl leading-10 text-white mb-4'>Send inquiry</h3>
					<p className='font-medium text-maWhite mb-10'>
						Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit, sed
						do eiusmod tempor incididunt ut labore.
					</p>
					<form className='mb-7'>
						<div className='space-y-4 mb-10'>
							<input
								type='text'
								placeholder='Your Name'
								className='inputStyle'
							/>
							<input type='email' placeholder='Email' className='inputStyle' />
							<input
								type='url'
								placeholder='Paste your Figma design URL'
								className='inputStyle'
							/>
						</div>

						<button type='submit' className='w-full bg-snugYellow p-4 rounded-full'>Send an Inquiry</button>
					</form>
					<Link href="#" className='block font-medium text-lg text-white text-center'>Get in touch with us →</Link>
				</div>
			</div>
		</section>
	)
}

export default Form
