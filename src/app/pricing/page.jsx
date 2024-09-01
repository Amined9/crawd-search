import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"


export default function Pricing() { 
    return(
        <>
            <Navbar/>
            <div className="">
                <section className="p-6 flex flex-col justify-center items-center mx-auto max-w-[1200px] ">
                    <h1 className="text-4xl font-sans text-center">Choose your plan</h1>
                    <div className="mt-6">
                        <ul className="grid grid-flow-row gap-5 sm:grid-flow-col">
                            <li className="rounded-lg border shadow-md bg-white flex flex-col p-6 h-72 max-w-60">
                                <div className="text-center text-2xl font-semibold mb-2">Basic</div>
                                <div className="text-center text-2xl font-medium border-b border-slate-400">70</div>
                                <div>sccccccccccccccccccc</div>
                            </li>
                            <li className="rounded-lg border shadow-md bg-white flex flex-col p-6 h-72 max-w-60 ">
                                <div className="text-center text-2xl font-semibold mb-2">Medium</div>
                                <div className="text-center text-2xl font-medium border-b border-slate-400">100</div>
                                <div className="text-pretty">scccccccccccccccccccc</div>
                            </li>
                            <li className="rounded-lg border shadow-md bg-white flex flex-col p-6 h-72 max-w-60">
                                <div className="text-center text-2xl font-semibold mb-2">Premium</div>
                                <div className="text-center text-2xl font-medium border-b border-slate-400">200</div>
                                <div>sccccccccccccccccccccc</div>
                            </li>
                        </ul>
                    </div>
                </section>

            </div>
            <Footer/>
        </>
    )

}