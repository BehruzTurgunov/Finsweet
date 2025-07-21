// src/app/page.js
import Hero from "../components/Hero"
import HowWeWork from '../components/HowWeWork'
import Projects from '../components/Projects'
import Features from '../components/Features'
import Blog from '../components/Blog'
export default function Home() {
  return (
    <>
    <Hero/>
    <HowWeWork/>
    <Projects/>
    <Features/>
    <Blog/>
    </>
  )
}
