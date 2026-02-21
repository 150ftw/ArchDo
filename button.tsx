import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Building2, HardHat, Layers, LineChart, Users } from "lucide-react"

export default function ForProfessionalsPage() {
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
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-400">ArchDo for Professionals</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-yellow-400">
                <HardHat className="h-6 w-6 mr-2" />
                For Contractors
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <ul className="list-disc list-inside space-y-2">
                <li>Access detailed property information before arriving on-site</li>
                <li>Utilize AR for precise measurements and planning</li>
                <li>Securely store and access project history on the blockchain</li>
                <li>Streamline communication with clients through the app</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-blue-400">
                <Building2 className="h-6 w-6 mr-2" />
                For Real Estate Developers
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <ul className="list-disc list-inside space-y-2">
                <li>Maintain comprehensive records of property developments</li>
                <li>Use AR to visualize potential renovations or additions</li>
                <li>Track property modifications and improvements over time</li>
                <li>Provide potential buyers with detailed property insights</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-green-400">
                <Users className="h-6 w-6 mr-2" />
                For Property Managers
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <ul className="list-disc list-inside space-y-2">
                <li>Efficiently manage multiple properties with detailed digital records</li>
                <li>Schedule and track maintenance tasks using blockchain-stored data</li>
                <li>Provide tenants with accurate property information</li>
                <li>Streamline property inspections and assessments</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="flex items-center text-purple-400">
                <LineChart className="h-6 w-6 mr-2" />
                For Home Inspectors
              </CardTitle>
            </CardHeader>
            <CardContent className="text-gray-300">
              <ul className="list-disc list-inside space-y-2">
                <li>Conduct thorough inspections with AR-assisted insights</li>
                <li>Generate comprehensive reports with precise measurements and details</li>
                <li>Access historical property data for context during inspections</li>
                <li>Provide clients with interactive, AR-enhanced inspection results</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="bg-gray-800 p-8 rounded-lg shadow-md mb-16 border border-gray-700">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Benefits for Professionals</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Increased efficiency and accuracy in project planning and execution</li>
            <li>Enhanced client communication with visual AR demonstrations</li>
            <li>Secure, immutable record-keeping through blockchain integration</li>
            <li>Competitive advantage with cutting-edge technology integration</li>
            <li>Potential for new service offerings and revenue streams</li>
          </ul>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-400">Ready to elevate your professional services with ArchDo?</h2>
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600 text-white">
            Get Professional Access <ArrowRight className="ml-2 h-4 w-4" />
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