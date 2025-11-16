import DocumentsSection from "../components/DocumentsSection"
import DocumentUpload from "../components/DocumentUpload"
import HowItWorks from "../components/HowItWorks"
import Navbar from "../components/Navbar"
import VideoDemo from "../components/VideoDemo"

function Home() {
    return (
        <>
            <DocumentUpload />
            <DocumentsSection/>
            <HowItWorks />
            <VideoDemo />
        </>
    )
}

export default Home