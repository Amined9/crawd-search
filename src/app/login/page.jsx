"Use client";
import Navbar from "@/components/Navbar";

export default function Login() { 
    return(
        <>
            <Navbar/>
            <div className="flex justify-center mx-6 md:mx-auto max-w-[800px] h-screen">
                <div className="mt-20">
                    <p className="text-4xl font-sans font-bold text-center">Welcome back</p>
                    <form className="flex flex-col md:flex-row items-center space-y-3 mt-7 max-w-[600px]" method="post">
                        <input
                            type="text"
                            placeholder="Email"
                            className="border border-gray-300 rounded-md p-2 w-[350px]"
                        />
                        <button type="submit" className="ml-2 bg-blue-600 text-white p-2 rounded-md text-nowrap w-[100px]">
                            Sign in
                        </button>
                    </form>
                </div>
                
            </div>


        </>
    )
}