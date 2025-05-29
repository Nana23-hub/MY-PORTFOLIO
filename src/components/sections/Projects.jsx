//import { RevealOnScroll } from "../RevealOnScroll"

export const Projects = () => {
    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            {/* <RevealOnScroll> */}
            <div className="max-w-5xl mx-auto px-4">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-purple-400 bg-clip-text text-transparent ">
                    {""}
                    Featured Projects
                </h2>
                    
                    <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                       <h3 className="text-xl font-bold mb-2">Login Page</h3> 
                       <p className="text-grey-400 mb-4"> A simple login page that allows users to login to their account.
                       </p>
                       <div className="flex flex-wrap gap-2 mb-4">
                        {["HTML","CSS"].map((skill,index)=>(
                            <span 
                            key={index}
                                className=" bg-yellow-500/10 text-yellow py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {skill}           
                                </span>
                        ))}
                        </div>
                            <div className="flex justify-between items-center">
                        <a
                          href="https://nana23-hub.github.io/CONTACT-US-FORM/"
                            className="text-yellow-400 hover:text-blue-300 transition-colors my-4 animate-pulse">
                            {" "}
                            View Project -{" "}
                        </a>
                    </div>
                       
                    </div>

                    <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                       <h3 className="text-xl font-bold mb-2">Gallery Page</h3> 
                       <p className="text-grey-400 mb-4">A Gallery Page that displays images of different categories of building.
                       </p>
                       <div  className="flex flex-wrap gap-2 mb-4">
                        {["HTML","CSS"].map((skill,index)=>(
                            <span 
                            key={index}
                                className=" bg-yellow-500/10 text-yellow py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {skill}           
                                </span>
                        ))}
                        </div>
                            <div className="flex justify-between items-center">
                        <a
                          href=" https://nana23-hub.github.io/Gallery-gallery/"
                            className="text-yellow-400 hover:text-blue-300 transition-colors my-4 animate-pulse">
                            {" "}
                            View Project -{" "}
                        </a>
                    </div>
                       
                    </div>

                    
                    <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                       <h3 className="text-xl font-bold mb-2">Word Counter App</h3> 
                       <p className="text-grey-400 mb-4"> This is a simple word counter app that counts the number of words,sentences,character and common words in a given text.
                       </p>
                       <div  className="flex flex-wrap gap-2 mb-4">
                        {["HTML","CSS","Javascript"].map((skill,index)=>(
                            <span 
                            key={index}
                                className=" bg-yellow-500/10 text-yellow py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {skill}           
                                </span>
                        ))}
                        </div>
                            <div className="flex justify-between items-center">
                        <a
                          href="https://nana23-hub.github.io/JavaScript-projects/"
                            className="text-yellow-400 hover:text-blue-300 transition-colors my-4 animate-pulse">
                            {" "}
                            View Project -{" "}
                        </a>
                    </div>
                       
                    </div>

                    <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                       <h3 className="text-xl font-bold mb-2">To-do Task Manager App</h3> 
                       <p className="text-grey-400 mb-4"> This is a simple Todo Task Manager application that allows users to add, display, update, and delete tasks.
                         The tasks are stored in the browser's local storage, so they persist even after the page is refreshed..
                       </p>
                       <div  className="flex flex-wrap gap-2 mb-4">
                        {["HTML","CSS","Javascript"].map((skill,index)=>(
                            <span 
                            key={index}
                                className=" bg-yellow-500/10 text-yellow py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {skill}           
                                </span>
                        ))}
                        </div>
                            <div className="flex justify-between items-center">
                        <a
                          href="https://nana23-hub.github.io/JavaScript-projects/"
                            className="text-yellow-400 hover:text-blue-300 transition-colors my-4 animate-pulse">
                            {" "}
                            View Project -{" "}
                        </a>
                    </div>
                       
                    </div>

                    <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                       <h3 className="text-xl font-bold mb-2">Weather APP</h3> 
                       <p className="text-grey-400 mb-4"> This is a simple API weather application that allows users to search for the weather in a specific city.It also displays the current weather and the forecast for the next 5 days.
                       </p>
                       <div  className="flex flex-wrap gap-2 mb-4">
                        {["HTML","CSS","Javascript"].map((skill,index)=>(
                            <span 
                            key={index}
                                className=" bg-yellow-500/10 text-yellow py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {skill}           
                                </span>
                        ))}
                        </div>
                            <div className="flex justify-between items-center">
                        <a
                          href="https://nana23-hub.github.io/JavaScript-projects/"
                            className="text-yellow-400 hover:text-blue-300 transition-colors my-4 animate-pulse ">
                            {" "}
                            View Project -{" "}
                        </a>
                    </div>
                       
                    </div>

                        <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                       <h3 className="text-xl font-bold mb-2">Random User Generator</h3> 
                       <p className="text-grey-400 mb-4"> This is a simple random user generator application that allows users to generate random user profiles.
                       </p>
                       <div  className="flex flex-wrap gap-2 mb-4">
                        {["HTML","CSS","Javascript"].map((skill,index)=>(
                            <span 
                            key={index}
                                className=" bg-yellow-500/10 text-yellow py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {skill}           
                                </span>
                        ))}
                        </div>
                            <div className="flex justify-between items-center">
                        <a
                          href="https://nana23-hub.github.io/JavaScript-projects/"
                            className="text-yellow-400 hover:text-blue-300 transition-colors my-4 animate-pulse ">
                            {" "}
                            View Project -{" "}
                        </a>
                    </div>
                       
                    </div>

                    
                    <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                       <h3 className="text-xl font-bold mb-2">Lost and Found System</h3> 
                       <p className="text-grey-400 mb-4"> You're tasked with building the backend for a campus Lost & Found system. Security staff or students can log found items, and users can view, update, and manage those entries.
                       </p>
                       <div  className="flex flex-wrap gap-2 mb-4">
                        {["Node.js","Javascript","Express.js","MongoDB"].map((skill,index)=>(
                            <span 
                            key={index}
                                className=" bg-yellow-500/10 text-yellow py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {skill}           
                                </span>
                        ))}
                        </div>
                            <div className="flex justify-between items-center">
                        <a
                          href="https://github.com/Nana23-hub/-CAREEREX-API.git"
                            className="text-yellow-400 hover:text-blue-300 transition-colors my-4 animate-pulse">
                            {" "}
                            View Project -{" "}
                        </a>
                    </div>
                       
                    </div>

                                        <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                       <h3 className="text-xl font-bold mb-2">Fintech Digital Wallet System (PayFlow)</h3> 
                       <p className="text-grey-400 mb-4"> A Fintech Digital Wallet System that allows users to create an account, add funds, make payments, and view transaction history. It also includes features such as user authentication, secure payment integration, and transaction management.
                       </p>
                       <div  className="flex flex-wrap gap-2 mb-4">
                        {["Node.js","Express.js","Javascript","MongoDB"].map((skill,index)=>(
                            <span 
                            key={index}
                                className=" bg-yellow-500/10 text-yellow py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {skill}           
                                </span>
                        ))}
                        </div>
                            <div className="flex justify-between items-center">
                        <a
                          href="https://github.com/Nana23-hub/FINAL-CAREEREX-PROJECT.git"
                            className="text-yellow-400 hover:text-blue-300 transition-colors my-4 animate-pulse">
                            {" "}
                            View Project -{" "}
                        </a>
                    </div>
                       
                    </div>


                    <div className="p-6 rounded-xl border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
                       <h3 className="text-xl font-bold mb-2">E-Commerce Fruit Store</h3> 
                       <p className="text-grey-400 mb-4"> An e-commerce Fruitstore that allows users to browse and purchase products online.It also includes features such as user authentication,secure payment.
                       </p>
                       <div  className="flex flex-wrap gap-2 mb-4">
                        {["HTML","CSS","React"].map((skill,index)=>(
                            <span 
                            key={index}
                                className=" bg-yellow-500/10 text-yellow py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                                 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
                                    {skill}           
                                </span>
                        ))}
                        </div>
                            <div className="flex justify-between items-center">
                        <a
                          href="https://github.com/Nana23-hub/Fruits-Store.git"
                            className="text-yellow-400 hover:text-blue-300 transition-colors my-4 animate-pulse">
                            {" "}
                            View Project -{" "}
                        </a>
                    </div>
                       
                    </div>
                

                
                       
                    </div>
                    
                {/* </RevealOnScroll> */}
            
        </section>
    )
}