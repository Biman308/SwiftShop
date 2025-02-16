import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-black py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center ml-36">
          <div className="w-full md:w-1/4 mb-4">
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <ul>
              <li><a href="/about" className="hover:underline">Our Story</a></li>
              <li><a href="/careers" className="hover:underline">Careers</a></li>
              <li><a href="/press" className="hover:underline">Press</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4">
            <h3 className="text-lg font-semibold mb-2">Customer Service</h3>
            <ul>
              <li><a href="/contact" className="hover:underline">Contact Us</a></li>
              <li><a href="/faq" className="hover:underline">FAQ</a></li>
              <li><a href="/returns" className="hover:underline">Returns & Exchanges</a></li>
              <li><a href="/shipping" className="hover:underline">Shipping Information</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <ul>
              <li><a href="https://facebook.com" className="hover:underline">Facebook</a></li>
              <li><a href="https://twitter.com" className="hover:underline">Twitter</a></li>
              <li><a href="https://instagram.com" className="hover:underline">Instagram</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-4">
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul>
              <li><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:underline">Terms of Service</a></li>
              <li><a href="/cookies" className="hover:underline">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-6">
          <p className="text-md">&copy; {new Date().getFullYear()} SwiftShop By Biman Patra With Love - All rights reserved.</p>
        </div>
      </div>
    </footer>

  )
}

export default Footer