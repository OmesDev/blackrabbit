"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutExpanded, setAboutExpanded] = useState(false);

  return (
    <div className="min-h-screen font-sans relative">
      {/* Mobile-friendly Navbar */}
      <nav className="bg-black bg-opacity-80 text-white py-2 px-4 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          {/* Mobile menu button - on the left */}
          <button 
            className="sm:hidden z-50 relative order-first"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white my-1.5 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
          
          {/* Logo - centered on mobile */}
          <div className="w-24 h-10 sm:w-32 sm:h-12 relative mx-auto sm:mx-0">
            <Image
              src="/logos/blackrabbitmain.png"
              alt="Black Rabbit Logo"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </div>
          
          {/* Phone icon - on the right */}
          <a href="tel:5068700609" className="sm:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
          
          {/* Desktop menu */}
          <ul className="hidden sm:flex space-x-6">
            <li><a href="#" className="hover:text-gray-300 transition duration-300 text-xs uppercase tracking-wider">Home</a></li>
            <li><a href="#" className="hover:text-gray-300 transition duration-300 text-xs uppercase tracking-wider">Menu</a></li>
            <li><a href="#" className="hover:text-gray-300 transition duration-300 text-xs uppercase tracking-wider">Events</a></li>
            <li className="relative group">
              <a href="#" className="hover:text-gray-300 transition duration-300 text-xs uppercase tracking-wider">About</a>
              <ul className="hidden group-hover:block absolute right-0 bg-black bg-opacity-80 p-2 mt-1 space-y-1 rounded-md shadow-lg">
                <li><a href="#" className="hover:text-gray-300 whitespace-nowrap block py-1 px-2 text-xs transition duration-300">Our Why</a></li>
                <li><a href="#" className="hover:text-gray-300 whitespace-nowrap block py-1 px-2 text-xs transition duration-300">Our Team</a></li>
                <li><a href="#" className="hover:text-gray-300 whitespace-nowrap block py-1 px-2 text-xs transition duration-300">Transparency</a></li>
              </ul>
            </li>
            <li><a href="#" className="hover:text-gray-300 transition duration-300 text-xs uppercase tracking-wider">Careers</a></li>
          </ul>
        </div>
        
        {/* Mobile menu */}
        <div className={`fixed inset-0 bg-black bg-opacity-95 z-40 transition-transform duration-300 ease-in-out transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="flex flex-col h-full justify-between items-center py-20">
            <ul className="text-center space-y-8">
              <li><a href="#" className="text-2xl font-semibold hover:text-gray-300 transition duration-300">Home</a></li>
              <li><a href="#" className="text-2xl font-semibold hover:text-gray-300 transition duration-300">Menu</a></li>
              <li><a href="#" className="text-2xl font-semibold hover:text-gray-300 transition duration-300">Events</a></li>
              <li className="relative">
                <button 
                  onClick={() => setAboutExpanded(!aboutExpanded)} 
                  className="text-2xl font-semibold hover:text-gray-300 transition duration-300 flex items-center justify-between w-full"
                >
                  <span className="pr-6">About</span>
                  <svg 
                    className={`h-5 w-5 transform transition-transform duration-200 ${aboutExpanded ? 'rotate-180' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <ul className={`mt-4 space-y-2 overflow-hidden transition-all duration-300 ${aboutExpanded ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <li><a href="#" className="text-lg hover:text-gray-300 transition duration-300">Our Why</a></li>
                  <li><a href="#" className="text-lg hover:text-gray-300 transition duration-300">Our Team</a></li>
                  <li><a href="#" className="text-lg hover:text-gray-300 transition duration-300">Transparency</a></li>
                </ul>
              </li>
              <li><a href="#" className="text-2xl font-semibold hover:text-gray-300 transition duration-300">Careers</a></li>
            </ul>
            
            {/* Social Icons for Mobile */}
            <div className="flex space-x-6">
              <a href="https://www.instagram.com/blackrabbitmct" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/blackrabbitmct" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="mailto:info@blackrabbit.restaurant" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Sticky Social Icons - hide on mobile */}
      <div className="fixed left-4 top-1/2 transform -translate-y-1/2 z-50 hidden sm:flex flex-col space-y-4">
        <a href="https://www.instagram.com/blackrabbitmct" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
        </a>
        <a href="https://www.facebook.com/blackrabbitmct" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
        </a>
        <a href="mailto:info@blackrabbit.restaurant" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
        </a>
      </div>

      {/* Hero Section - adjusted for mobile */}
      <div className="relative h-screen pt-16">
        <Image
          src="/blackrabbit.png"
          alt="Black Rabbit Restaurant"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white px-4">
          <div className="mb-8 w-full max-w-xs sm:max-w-md">
            <Image
              src="/logos/blackrabbit2.png"
              alt="Black Rabbit Logo"
              width={400}
              height={250}
              layout="responsive"
              priority
            />
          </div>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4 flex flex-col sm:flex-row">
            <a href="#" className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300 text-center">
              Our Menu Options
            </a>
            <a 
              href="https://www.exploretock.com/blackrabbit" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition duration-300 text-center"
            >
              Reserve your experience
            </a>
          </div>
        </div>
      </div>

      {/* Welcome Section - adjusted for mobile */}
      <section className="bg-black text-white py-16 px-4">
        <div className="container mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <Image
              src="/welcomeimg.png"
              alt="Exquisite dish at Black Rabbit"
              width={600}
              height={400}
              layout="responsive"
              className="rounded-lg"
            />
          </div>
          <div className="lg:w-1/2 lg:pl-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Welcome To Black Rabbit Restaurant.</h2>
            <p className="mb-4">
              Our dining room has been designed to be boisterous in a way that is
              comfortable yet evokes excitement. Our menus are created with
              conversation in mind, being intentful on their delivery as well as the
              products we choose to focus on.
            </p>
            <p className="mb-4">
              Our menu features shareable, small plates and larger plates to satisfy
              your hunger for flavour and conversation.
            </p>
            <p className="mb-6">
              Our Chef's tasting menu is designed for you to create conversation
              while our team guides you through our 10-15 course experience.
            </p>
            <a 
              href="https://www.exploretock.com/blackrabbit" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300 mb-8 text-center w-full sm:w-auto"
            >
              Reserve a Table
            </a>
            
            {/* New Disclaimer Section */}
            <div className="mt-8 border-t border-gray-800 pt-6">
              <p className="mb-3 text-sm text-gray-300">
                Please let our team know of any dietary restrictions or allergies at least 48-72 hours in advance. 
                This allows us to customize something exquisite for your enjoyment.
              </p>
              <p className="mb-3 text-sm text-gray-300">
                For groups larger than 10 guests, please email us at 
                <a href="mailto:hospitality@blackrabbit.restaurant" className="text-white hover:text-gray-300 underline"> hospitality@blackrabbit.restaurant </a> 
                or call to inquire at <a href="tel:506-870-0609" className="text-white hover:text-gray-300 underline">506-870-0609</a>.
              </p>
              <p className="mb-3 text-sm text-gray-300">
                Our dining room is open Wednesday to Saturday for reservations from 5pm to 9pm.
              </p>
              <p className="text-sm text-gray-300">
                Walk-ins welcomed for our Regular Dining Menu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section - adjusted for mobile */}
      <section className="bg-black text-white py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Eat • Drink • Talk</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <div 
                key={index} 
                className={`relative overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105 ${
                  index % 3 === 0 ? 'sm:col-span-2 h-64 sm:h-96' : 'h-64 sm:h-80'
                }`}
              >
                <Image
                  src={`/gallery/gallery${index}.png`}
                  alt={`Culinary creation ${index}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-100 sm:opacity-0 sm:hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2">Dish Title {index}</h3>
                    <p className="text-sm">A brief description of this exquisite culinary creation.</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section - adjusted for mobile */}
      <section className="bg-gradient-to-t from-neutral-900 via-neutral-800 to-black text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center space-x-6 mb-6">
              <a href="https://www.instagram.com/blackrabbitmct" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/blackrabbitmct" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="mailto:info@blackrabbit.restaurant" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-300 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/></svg>
              </a>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Be The First To Know!</h2>
            <p className="mb-6 text-base sm:text-lg">
              Sign up with your email to receive the latest news and updates to know firsthand
              what the Black Rabbit Creative Group is up to.
            </p>
            <form className="flex flex-col justify-center items-center max-w-md mx-auto mb-6">
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-2 rounded-full bg-white text-black mb-4 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button
                type="submit"
                className="w-full px-6 py-2 rounded-full bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 transition duration-300 focus:outline-none focus:ring-2 focus:ring-white"
              >
                Sign Up
              </button>
            </form>
            <p className="text-sm mb-1">We respect your privacy.</p>
            <p className="text-sm">© 2024-2025 Black Rabbit Creative Group INC - All Rights Reserved</p>
          </div>
        </div>
      </section>

      {/* You can add more sections here as needed */}
    </div>
  );
}