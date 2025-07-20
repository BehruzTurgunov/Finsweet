export default function About() {
  return (
    <main className="font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#0f172a] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
          Building stellar websites for early startups
        </h1>
        <p className="mb-8 text-lg max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
        </p>
        <button className="bg-yellow-400 text-black py-3 px-6 rounded font-medium hover:bg-yellow-300">
          View our work
        </button>
      </section>

      {/* How We Work */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">How we work</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {['Strategy', 'Wireframing', 'Design', 'Development'].map((title, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">{title}</h3>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="bg-gray-50 py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">View our projects</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((_, idx) => (
            <div key={idx} className="bg-white p-4 shadow rounded-lg">
              <div className="h-40 bg-gray-300 rounded mb-4"></div>
              <h3 className="font-bold text-lg mb-2">Project {idx + 1}</h3>
              <p className="text-sm text-gray-600">Short description about the project goes here.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Design Features */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">Design that solves problems, one product at a time</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white p-6 rounded shadow-md">
              <h3 className="font-bold text-xl mb-2">Feature {i + 1}</h3>
              <p className="text-sm text-gray-600">Description for feature {i + 1} goes here.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">What our clients say about us</h2>
        <p className="italic max-w-xl mx-auto text-gray-700">
          "The team greatly improved our website. They are quick, creative, and a pleasure to work with!"
        </p>
        <p className="mt-4 font-bold">John Doe</p>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-10">Frequently asked questions</h2>
        <div className="max-w-4xl mx-auto text-left">
          {[1, 2, 3, 4, 5].map((i) => (
            <details key={i} className="mb-4">
              <summary className="font-medium cursor-pointer text-lg">Question {i}</summary>
              <p className="mt-2 text-gray-600 text-sm">Answer to question {i} goes here with more details.</p>
            </details>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#0f172a] text-white py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-4">Building stellar websites for early startups</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
        <button className="bg-yellow-400 text-black py-3 px-6 rounded hover:bg-yellow-300">
          Send an Inquiry
        </button>
      </section>

      {/* Blog */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10">Our blog</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-40 bg-gray-300 rounded mb-4"></div>
              <h3 className="font-bold text-xl mb-2">Blog Title {i}</h3>
              <p className="text-sm text-gray-600">Short excerpt of the blog post goes here.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f172a] text-white py-10 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-sm">
          <div>
            <h4 className="font-bold mb-2">Finsweet</h4>
            <p>We build websites that convert. Contact us to learn more.</p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Menu</h4>
            <ul>
              <li>Home</li>
              <li>Work</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Let’s Talk!</h4>
            <p>Contact us at: email@example.com</p>
          </div>
        </div>
        <div className="text-center mt-8 text-xs text-gray-400">© 2025 Finsweet. All rights reserved.</div>
      </footer>
    </main>
  );
}
