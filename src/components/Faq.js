import React from 'react'

const Faq = () => {
	const faqData = [
		{
			id: 1,
			title: 'How much time does it take?',
			answer: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
				' eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			],
		},
		{
			id: 2,
			title: 'What is your class naming convention?',
			answer: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
				' eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			],
		},
		{
			id: 3,
			title: 'How do you communicate?',
			answer: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
				' eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			],
		},
		{
			id: 4,
			title: 'I have a bigger project. Can you handle it?',
			answer: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
				' eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			],
		},
		{
			id: 5,
			title: 'What is your class naming convention?',
			answer: [
				'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do',
				' eiusmod tempor incididunt ut labore et dolore magna aliqua.',
			],
		},
	]

	return (
		<section className='bg-maWhite'>
			<div className='myContainer py-16 md:py-32 flex flex-col lg:flex-row justify-between text-manguBlack gap-12'>
				{/* Left */}
				<div className='lg:w-1/2 w-full text-center lg:text-left'>
					<h2 className='text-3xl sm:text-4xl md:text-5xl font-semibold mb-4 leading-tight'>
						Frequently <br className='hidden sm:block' /> asked questions
					</h2>
					<p className='font-medium text-lg text-bluePencil'>
						Contact us for more info
					</p>
				</div>

				{/* Right */}
				<div className='lg:w-1/2 w-full'>
					{faqData.map(({ id, title, answer }, idx) => (
						<details key={id} className='mb-4 border-b border-gray-200 group'>
							<summary className='cursor-pointer flex justify-between items-center font-semibold text-lg py-4'>
								<div className='flex items-start gap-6'>
									<span className='text-2xl text-bluePencil'>{`0${idx + 1}`}</span>
									<span className='font-medium text-xl sm:text-2xl'>{title}</span>
								</div>
								<span className='text-xl transition-transform duration-200 group-open:rotate-45'>
									+
								</span>
							</summary>
							<p className='text-gray-600 text-sm pb-4 px-2'>
								{answer.map((line, index) => (
									<React.Fragment key={index}>
										{line}
										<br />
									</React.Fragment>
								))}
							</p>
						</details>
					))}
				</div>
			</div>
		</section>
	)
}

export default Faq
