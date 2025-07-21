'use client'
import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonialsData = [
  {
    text: `"The best agency we’ve worked with so far. They understand our product and are able to add new features with a great focus."`,
    name: "Jenny Wilson",
    title: "Vice President",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    text: `"This team is amazing! Their support is fast and they always find a solution to our problems."`,
    name: "Robert Fox",
    title: "CTO at TechCorp",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    text: `"Reliable, efficient, and highly skilled. They've helped us scale our project quickly."`,
    name: "Courtney Henry",
    title: "Product Manager",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  }
]

const Testimonials = () => {
  const [index, setIndex] = useState(0)

  const handlePrev = () => {
    setIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1))
  }

  const { text, name, title, avatar } = testimonialsData[index]

  return (
    <section>
      <div className='myContainer py-16 flex flex-col md:flex-row items-center gap-10 text-manguBlack'>
        {/* left */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-semibold ">
            What our clients <br /> say about us
          </h2>
          <p className="mt-4 text-base">
            Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit sed.
          </p>
        </div>

        {/* right */}
        <div className="relative">
          <p className="text-xl font-medium leading-relaxed">{text}</p>

          {/* Avatar & name */}
          <div className="flex items-center gap-4 mt-6">
            <img
              src={avatar}
              alt={name}
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h4 className=" font-semibold">{name}</h4>
              <p className="text-sm ">{title}</p>
            </div>
          </div>

          {/* buttons */}
          <div className="absolute bottom-8 right-8 flex gap-2">
            <button
              onClick={handlePrev}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300"
            >
              <FaChevronLeft size={14} />
            </button>
            <button
              onClick={handleNext}
              className="w-8 h-8 flex items-center justify-center rounded-full bg-indigo-600 text-white hover:bg-indigo-700"
            >
              <FaChevronRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
