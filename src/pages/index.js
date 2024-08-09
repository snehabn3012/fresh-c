import * as React from "react"
import { Helmet } from "react-helmet"

const IndexPage = () => {
  return (
    <div className="application">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="author" content="Natural Prodducts Suppliers and Exports" />
        <title>Fresh Suppliers and Exports</title>
        <meta name="description" content="Leading suppliers and exporters of high-quality coconuts, sesame and other seeds. 
          We provide a wide range of fresh and organic products, sourced directly from our farm also from trusted farms 
          to meet global standards. Perfect for wholesale buyers and retailers seeking reliable and premium-quality agricultural products."
        />
        <meta name="keywords" content="coconut suppliers, seeds exporters, organic coconut, seed suppliers, coconut exporters,
          wholesale coconuts, seed distribution, agricultural products, fresh coconuts, organic seeds, global coconut suppliers, premium seeds, export quality coconuts, 
          top coconut from india, top exporters from india, seed trading, bulk coconut orders, high-quality seeds, coconut farming, 
          sustainable agriculture, export seeds, global seed market, tropical fruits, natural seeds, raw coconuts, organic farming, 
          coconut oil suppliers, international seed suppliers, wholesale seed exporters"
        />
        <link rel="canonical" href="http://fresh.in" />
      </Helmet>
      <Header />
      <main>
        <Banner />
        <ComingSoonBanner />
        <Services />
      </main>
      <Footer />

    </div>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>

const Header = () => {
  return (
    <header className="bg-green-300 text-black py-4">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Fresh coconuts and seeds</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="/" className="hover:text-blue-200">Home</a></li>
            <li><a href="/about" className="hover:text-blue-200">About</a></li>
            <li><a href="/services" className="hover:text-blue-200">Services</a></li>
            <li><a href="/contact" className="hover:text-blue-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};


const Services = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Coconut Supply</h3>
            <p>High-quality, organic coconuts supplied directly from farms to your doorstep.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Seed Export</h3>
            <p>We export a wide variety of seeds that meet global quality standards.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">Custom Packaging</h3>
            <p>Get your products delivered in custom packaging designed to your specifications.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

const Banner = () => {
  return (
    <div className="bg-green-100 text-black py-6 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
          Welcome to Our Coconut and Seeds Export Service
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-6">
          Supplying high-quality coconuts and seeds worldwide. Trust us for the best agricultural products.
        </p>
        <a
          href="tel:+917975385807"
          className="bg-white text-blue-500 py-2 px-4 rounded-full hover:bg-blue-100 transition duration-300"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-green-300 text-zinc-800 py-6 fixed bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center">&copy; 2024 Company Name. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="/privacy" className="hover:text-blue-200">Privacy Policy</a>
          <a href="/terms" className="hover:text-blue-200">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};



const ComingSoonBanner = () => {
  return (
    <div className="bg-gray-800 text-white min-h-60 flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Coming Soon
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          We’re working hard to bring you an amazing experience. Stay tuned!
        </p>
        <a
          href="/"
          className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-400 transition duration-300"
        >
          Notify Me
        </a>
      </div>
    </div>
  );
};