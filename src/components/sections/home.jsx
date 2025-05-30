
//import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () =>{
    return(

        <section
            id="home" 
             className="min-h-screen flex items-center justify-center relative ">
                {/* <RevealOnScroll> */} 
                {/* <RevealOnScroll> */}  
                
        <div className="text-center z-10 px-4 font-mono text-grey-400">
             <h1 className="text-5xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-purple-500 bg-clip-text text-transparent leading-right animate-pulse ml-1 ">
                Hello, I'm Aishat (NANA Tech)
             </h1>
             <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
                I'm a passionate full-stack developer who loves crafting clean,scalable web applications.
                 My goal in the tech field is to build solutions that offer both
                 exceptional performance and a delightful user experience.
             </p>
             <div className="flex justify-center space-x-4">
                <a href="#projects" className="bg-yellow-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] rounded-lg">
                    View Projects</a>

                <a href="#contact" className="border border-yellow-500/50 text-yellow-500 py-3 px-6 rounded font-medium transition-all duration-200
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] rounded-lg hover:bg-yellow-500/10">
                    Contact Me</a>
             </div>
        </div> 
        {/* </RevealOnScroll> */}
        </section>
    )
}