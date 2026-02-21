'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Globe, Layers, Lightbulb, Shield, Users } from "lucide-react"

export function About() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Layers className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold text-gray-100">ArchDo</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white">Home</Button>
            <Button variant="ghost" className="text-gray-300 hover:text-white">Features</Button>
            <Button variant="ghost" className="text-gray-300 hover:text-white">How it Works</Button>
            <Button variant="ghost" className="text-gray-300 hover:text-white">For Professionals</Button>
            <Button variant="ghost" className="text-gray-300 hover:text-white">About</Button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-400">About ArchDo</h1>

        <div className="mb-16">
          <p className="text-lg mb-4 text-gray-300">
            ArchDo is at the forefront of revolutionizing the home improvement and property management industry. By combining cutting-edge augmented reality (AR) technology with the security and transparency of blockchain, we're creating a new standard for how people interact with and understand their living spaces.
          </p>
          <p className="text-lg mb-4 text-gray-300">
            Our mission is to empower homeowners, real estate professionals, and contractors with the tools they need to make informed decisions, execute projects with precision, and maintain comprehensive records of property modifications and improvements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-yellow-400">
                <Lightbulb className="h-6 w-6 mr-2" />
                Our Vision
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>To create a world where every property owner has access to detailed, accurate information about their living spaces, enabling smarter decisions and more efficient property management.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-400">
                <Users className="h-6 w-6 mr-2" />
                Our Team
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>ArchDo is built by a diverse team of experts in AR technology, blockchain development, and real estate. Our combined experience drives innovation in the property tech sector.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-green-400">
                <Shield className="h-6 w-6 mr-2" />
                Our Commitment
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>We are committed to providing secure, reliable, and user-friendly solutions. Your data privacy and the accuracy of our AR technology are our top priorities.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-400">
                <Globe className="h-6 w-6 mr-2" />
                Our Impact
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>By reducing errors in home improvement projects and providing transparent property histories, we're contributing to more sustainable and efficient property management practices worldwide.</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-md mb-16 border border-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Our Technology</h2>
          <p className="mb-4 text-gray-300">ArchDo leverages two key technologies:</p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><strong className="text-white">Augmented Reality (AR):</strong> Our proprietary AR algorithms provide accurate, real-time visualization of hidden structures and precise measurements.</li>
            <li><strong className="text-white">Blockchain:</strong> We use blockchain technology to ensure the security, immutability, and accessibility of all property-related data.</li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Join us in shaping the future of property technology</h2>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
            Get Started with ArchDo <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </main>

      <footer className="bg-gray-800 text-gray-400 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm">&copy; 2024 ArchDo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}