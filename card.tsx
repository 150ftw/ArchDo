import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Camera, Download, Home, Layers, Lock, Wallet } from "lucide-react"
export default function ArchDoHomepage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Layers className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">ArchDo</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-black">Features</Button>
            <Button variant="ghost" className="text-gray-300 hover:text-black">How it Works</Button>
            <Button variant="ghost" className="text-gray-300 hover:text-black">For Professionals</Button>
            <Button variant="ghost" className="text-gray-300 hover:text-black">About</Button>
          </nav>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">Download App</Button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">
            Revolutionize Home Improvement with AR and Blockchain
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            ArchDo combines augmented reality and Web3 technology to simplify household tasks and secure property records.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
              <Download className="mr-2 h-4 w-4" /> Download ArchDo
            </Button>
            <Button size="lg" variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white">
              <Wallet className="mr-2 h-4 w-4" /> Connect MetaMask
            </Button>
          </div>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">AR Site Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <Camera className="h-12 w-12 text-blue-400 mb-4" />
              <p className="text-gray-300">Scan walls to identify hidden structures, pipelines, and wiring with augmented reality technology.</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Home Improvement Guide</CardTitle>
            </CardHeader>
            <CardContent>
              <Home className="h-12 w-12 text-green-400 mb-4" />
              <p className="text-gray-300">Get AR-powered guidance for tasks like drilling, hanging items, and locating safe spots for installations.</p>
            </CardContent>
          </Card>
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Blockchain Integration</CardTitle>
            </CardHeader>
            <CardContent>
              <Lock className="h-12 w-12 text-indigo-400 mb-4" />
              <p className="text-gray-300">Securely store and retrieve property records using blockchain technology and MetaMask integration.</p>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8">How ArchDo Works</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { title: "Download App", icon: Download },
              { title: "Connect MetaMask", icon: Wallet },
              { title: "Scan Your Space", icon: Camera },
              { title: "Access Insights", icon: ArrowRight }
            ].map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="bg-gray-700 rounded-full p-4 mb-4">
                  <step.icon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="font-semibold text-white">{step.title}</h3>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8">Who Benefits from ArchDo?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Homeowners",
                description: "Simplify home improvement tasks and maintain accurate property records."
              },
              {
                title: "Real Estate Developers",
                description: "Access and manage detailed property information throughout the development lifecycle."
              },
              {
                title: "Contractors",
                description: "Enhance accuracy and efficiency in renovation and repair projects."
              }
            ].map((audience, index) => (
              <Card key={index} className="bg-gray-800 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">{audience.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">{audience.description}</p>
                  <Button variant="outline" className="text-blue-400 border-blue-400 hover:bg-blue-400 hover:text-white">Learn More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Home Improvement Experience?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of users who are already benefiting from ArchDo's innovative technology.
          </p>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
            <Download className="mr-2 h-4 w-4" /> Get Started with ArchDo
          </Button>
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">ArchDo</h3>
              <p className="text-sm">Revolutionizing home improvement with AR and blockchain technology.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-white">Features</a></li>
                <li><a href="#" className="text-sm hover:text-white">How it Works</a></li>
                <li><a href="#" className="text-sm hover:text-white">For Professionals</a></li>
                <li><a href="#" className="text-sm hover:text-white">About Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-sm hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-sm hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="text-sm hover:text-white">GitHub</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-sm">&copy; 2024 ArchDo. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}