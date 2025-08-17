import { FaTwitter, FaTelegramPlane, FaDiscord } from "react-icons/fa";
import logoImage from "/logo1.png";

const PresalePage = () => {

    return (
        <div className="bg-[#00090d] text-[#cfcfcf] min-h-screen flex flex-col">
            {/* Hero Section */}
            <header className="text-center py-16 px-4">
                {/* <img src={logoImage} alt="logo" className="h-5 w-5" /> */}
                {/* <img src={logoImage} alt="MVAI Logo" className="mx-auto w-28 mb-6" /> */}
                <div className="relative flex items-center justify-center">
                    {/* Magical animated aura */}
                    <div className="absolute w-48 h-48 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-3xl opacity-70 animate-spin-slow"></div>

                    {/* Sparkling particles */}
                    <div className="absolute w-56 h-56 animate-pulse">
                        <div className="absolute top-2 left-10 w-2 h-2 bg-white rounded-full animate-bounce"></div>
                        <div className="absolute top-12 right-6 w-1.5 h-1.5 bg-yellow-300 rounded-full animate-ping"></div>
                        <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-pink-300 rounded-full animate-bounce"></div>
                    </div>

                    {/* Actual logo */}
                    <img
                        src={logoImage}
                        alt="MVAI Logo"
                        className="relative w-32 h-32 animate-float"
                    />
                </div>

                <h1 className="text-4xl font-bold text-[#8165f1] mb-4">
                    MVAI (MarketVerse AI)
                </h1>
                <p className="max-w-2xl mx-auto text-lg">
                    The Strategic AI for Marketers – simplifying data, unlocking hidden
                    opportunities, and delivering actionable insights.
                </p>
            </header>

            {/* Tokenomics */}
            <section className="px-6 py-12 max-w-4xl mx-auto text-center">
                <h2 className="text-3xl font-semibold text-[#8165f1] mb-6">
                    Tokenomics
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-2xl bg-[#111820] shadow-lg">
                        <h3 className="text-xl font-bold mb-2">Total Supply</h3>
                        <p>1,000,000,000 MVAI</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#111820] shadow-lg">
                        <h3 className="text-xl font-bold mb-2">Presale Allocation</h3>
                        <p>20% (200,000,000 MVAI)</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-[#111820] shadow-lg">
                        <h3 className="text-xl font-bold mb-2">Liquidity & Development</h3>
                        <p>80% (800,000,000 MVAI)</p>
                    </div>
                </div>
                <button className="mt-8 px-8 py-3 bg-[#8165f1] text-white font-semibold rounded-xl transform transition duration-300 ease-in-out hover:scale-110 hover:bg-[#6b4be0] focus:ring-4 focus:ring-[#8165f1]">
                    Sell Now
                </button>
            </section>

            {/* Roadmap */}
            <section className="px-6 py-12 bg-[#0b1218]">
                <h2 className="text-3xl font-semibold text-[#8165f1] text-center mb-8">
                    Roadmap
                </h2>
                <div className="max-w-3xl mx-auto space-y-6">
                    <div className="p-4 border-l-4 border-[#8165f1] bg-[#111820] rounded">
                        <h3 className="font-bold text-lg">Q3 2025</h3>
                        <p>Pre sale Launch</p>
                    </div>
                    <div className="p-4 border-l-4 border-[#8165f1] bg-[#111820] rounded">
                        <h3 className="font-bold text-lg">Q4 2025</h3>
                        <p>MVP Beta (AI Dashboard + Token Utility)</p>
                    </div>
                    <div className="p-4 border-l-4 border-[#8165f1] bg-[#111820] rounded">
                        <h3 className="font-bold text-lg">Q1 2026</h3>
                        <p>Staking + Governance Live</p>
                    </div>
                    <div className="p-4 border-l-4 border-[#8165f1] bg-[#111820] rounded">
                        <h3 className="font-bold text-lg">Q2 2026</h3>
                        <p>Major Partnerships</p>
                    </div>
                    <div className="p-4 border-l-4 border-[#8165f1] bg-[#111820] rounded">
                        <h3 className="font-bold text-lg">Q3 2026</h3>
                        <p>Global Adoption</p>
                    </div>
                </div>
            </section>

            {/* End Words */}
            <section className="px-6 py-12 text-center">
                <h2 className="text-2xl font-semibold text-[#8165f1] mb-4">
                    The Future of Marketing is Here
                </h2>
                <p className="max-w-2xl mx-auto mb-6">
                    Join MVAI and experience clarity, efficiency, and powerful AI-driven
                    marketing strategies. Don’t just market – market smart.
                </p>
                <a
                    href="/whitepaper.pdf"
                    download
                    className="px-6 py-3 border border-[#8165f1] text-[#8165f1] rounded-xl hover:bg-[#8165f1] hover:text-white transition"
                >
                    Download Whitepaper
                </a>
            </section>

            {/* Footer */}
            <footer className="mt-auto py-6 border-t border-[#1a2230] text-center">
                <div className="flex justify-center space-x-6 text-2xl text-[#8165f1] mb-3">
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaTelegramPlane />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaDiscord />
                    </a>
                </div>
                <p className="text-sm text-[#cfcfcf]">© 2025 MVAI. All rights reserved.</p>
            </footer>
        </div>
    )
}

export default PresalePage;