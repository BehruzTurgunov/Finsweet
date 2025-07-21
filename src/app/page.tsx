// src/app/page.js
import Hero from "../components/Hero"
import HowWeWork from '../components/HowWeWork'
import Projects from '../components/Projects'
import Features from '../components/Features'
import Testimonials from '../components/Testimonials'
import Faq from '../components/Faq'
import Form from '../components/Form'
import Blog from '../components/Blog'
export default function Home() {
  return (
    <>
    <Hero/>
    <HowWeWork/>
    <Projects/>
    <Features/>
    <Testimonials/>
    <Faq/>
    <Form/>
    <Blog/>
    </>
  )
}
