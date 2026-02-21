import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Camera, Home, Layers, Lock, Ruler, Smartphone, Wallet } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Layers className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">ArchDo</span>
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
        <h1 className="text-4xl font-bold text-center text-white mb-12">ArchDo Features</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Camera className="h-6 w-6 mr-2 text-blue-400" />
                AR Site Analysis
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Scan walls and spaces to identify hidden structures, pipelines, and wiring using cutting-edge augmented reality technology. Get real-time visual overlays of your home's infrastructure.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Home className="h-6 w-6 mr-2 text-green-400" />
                Home Improvement Guide
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Receive AR-powered guidance for various home improvement tasks. Get precise instructions for drilling, hanging items, and finding safe installation spots, all tailored to your specific space.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Lock className="h-6 w-6 mr-2 text-indigo-400" />
                Blockchain Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Securely store and retrieve property records using blockchain technology. Maintain an immutable history of home modifications, repairs, and improvements, ensuring data integrity and easy access.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Wallet className="h-6 w-6 mr-2 text-purple-400" />
                MetaMask Integration
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Connect your MetaMask wallet for seamless interaction with blockchain features. Securely manage your property data and access decentralized services with ease.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Ruler className="h-6 w-6 mr-2 text-red-400" />
                Precise Measurements
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Utilize AR technology to take accurate measurements of your spaces. Plan renovations, furniture purchases, and installations with confidence using real-time, precise dimensional data.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <Smartphone className="h-6 w-6 mr-2 text-yellow-400" />
                Mobile Accessibility
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">Access all ArchDo features on your mobile device. Carry the power of AR and blockchain in your pocket, making on-site analysis and decision-making easier than ever.</p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to experience these features?</h2>
          <Button size="lg"  className="bg-blue-500 hover:bg-blue-600 text-white">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </main>

      <footer className="bg-gray-800 text-gray-300 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-sm">&copy; 2024 ArchDo. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}