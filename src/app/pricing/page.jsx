import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Pricing() { 
    return (
        <>
            <Navbar />
            <div className="">
                <section className="p-6 flex flex-col justify-center items-center mx-auto max-w-[1200px]">
                    <h1 className=" text-xl font-semibold md:font-normal md:text-4xl font-sans text-center">Choose your plan</h1>
                    <div className="mt-6">
                        <ul className="grid grid-flow-row gap-5 md:grid-flow-col mx-6">
                            {[
                                { title: "Basic", price: "70", description: "Description for Basic p" },
                                { title: "Medium", price: "100", description: "Descriptioss for Medium planssssssssssssssssssssssss" },
                                { title: "Premium", price: "200", description: "Description for Premium p" },
                            ].map((plan, index) => (
                                <li key={index} className="rounded-lg border shadow-md bg-white flex flex-col p-6 w-64 h-[360px] md:w-[280px]">
                                    <div className="text-center text-2xl font-semibold mb-3">{plan.title}</div>
                                    <div className="text-center text-2xl font-medium border-b border-slate-400 mb-2 pb-3">{plan.price}</div>
                                    <div className="text-left text-wrap">{plan.description}</div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
