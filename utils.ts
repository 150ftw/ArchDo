import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Camera, Download, Layers, Smartphone, Wallet } from "lucide-react"

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <header className="bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Layers className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold text-gray-100">ArchDo</span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:bg-black">Home</Button>
            <Button variant="ghost" className="text-gray-300 hover:text-white">Features</Button>
            <Button variant="ghost" className="text-gray-300 hover:text-white">How it Works</Button>
            <Button variant="ghost" className="text-gray-300 hover:text-white">For Professionals</Button>
            <Button variant="ghost" className="text-gray-300 hover:text-white">About</Button>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-400">How ArchDo Works</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-400">
                <Download className="h-6 w-6 mr-2" />
                Step 1: Download the App
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>Start by downloading the ArchDo app from your device's app store. Our app is available for both iOS and Android devices, ensuring you can access our features on your preferred platform.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-green-400">
                <Wallet className="h-6 w-6 mr-2" />
                Step 2: Connect Your Wallet
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>Once the app is installed, connect your MetaMask wallet. This step enables secure blockchain integration, allowing you to store and access your property data on the decentralized network.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-indigo-400">
                <Camera className="h-6 w-6 mr-2" />
                Step 3: Scan Your Space
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>Use your device's camera to scan the area you want to analyze. Our AR technology will create a detailed digital map of your space, identifying hidden structures, wiring, and pipelines.</p>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-400">
                <Smartphone className="h-6 w-6 mr-2" />
                Step 4: Access Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <p>View the AR overlay on your device screen to see detailed information about your space. Get measurements, identify safe drilling spots, and receive guidance for various home improvement tasks.</p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-md mb-16 border border-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Blockchain Integration</h2>
          <p className="mb-4 text-gray-300">As you use ArchDo, all relevant data about your property is securely stored on the blockchain. This includes:</p>
          <ul className="list-disc list-inside mb-4 text-gray-300">
            <li>Scanned layouts of your spaces</li>
            <li>Records of identified structures and systems</li>
            <li>History of home improvements and modifications</li>
            <li>Maintenance logs and schedules</li>
          </ul>
          <p className="text-gray-300">This data is accessible only to you and can be easily retrieved for future reference or shared securely with professionals when needed.</p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Ready to revolutionize your home improvement experience?</h2>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
            Download ArchDo Now <ArrowRight className="ml-2 h-4 w-4" />
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