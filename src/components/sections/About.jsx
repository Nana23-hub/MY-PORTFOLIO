//import { RevealOnScroll } from "../RevealOnScroll";
export const About = ()=>{
    const frontendSkills = [
        "HTML", 
        "CSS",
        "JavaScript", 
        "React",
    ];

        const backendSkills = [
            "PHP", 
            "Laravel",
            "Node.js", 
            "Express",
            "MongoDB",
    ];
   return(
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
            {/* <RevealOnScroll> */}
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-purple-400 bg-clip-text text-transparent">
                {""}
                About Me</h2>
                <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all font-mono">
                    <p className="text-grey-300 mb-6">
                        <p className="font-bold text-2xl">Hi, I'm AISHA,a junior Full-Stack Web Developer</p>

                        I'm a passionate and driven junior full-stack developer with a few months of experience in web developement.Currently,I'm focused on learning front-end technologies like HTML,CSS,javascript and REACT,while also working with backend tools such as Node.js,Express, PHP laravel and MongoDB.

                        I recently completed several personal projects and physical courses,which have helped me understand how full-stack applications are built and the importance of working in a collaborative,agile environment.
                        i'm excited about applying what i've learned to real-world projects and continuing to grow as a developer.

                        I'm always lookingfor opportunities to learn more,whether through mentorships,internships,or collaborative projects.Feel free to check out my portfolio,and dont hesitate to reach out if you'd like to connect!
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((skill, index) => (
                                    <span
                                    key={index}
                                     className="bg-yellow-500/10 text-yellow py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        
                          
                        </div>
                        
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((skill, index) => (
                                    <span
                                    key={index}
                                     className="bg-yellow-400/10 text-yellow py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
                <div className="grid grid-cols-1 md:grd-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4 ">Education</h3>
                            <ul className="list-disc list-inside text-grey space-y-2">
                            <li><strong>HND in Biochemistry</strong> - The Polytechnic Ibadan (2017-2023)</li>
                            <li>Appclick ICT Academy</li> 
                            <li>Relevant Coursework:Web Development</li>
                            </ul>
                    </div>

                </div>
        </div>
        {/* </RevealOnScroll> */}
    </section>
   ) 
}