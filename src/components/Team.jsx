import { motion } from 'motion/react';

const leadership = [
    {
        name: "Dr. Nemani Subhadra",
        role: "Principal Investigator",
        desc: "Professor and Associate Coordinator, IQAC, Geethanjali College of Engineering.",
        linkedin: "https://www.linkedin.com/in/dr-subhadra-nemani-08a1692a/"
    },
    {
        name: "Dr. G. Neeraja Rani",
        role: "Co-Principal Investigator",
        desc: "Integrating NEP-2020 vision and multidisciplinary learning activities.",
        linkedin: "https://www.linkedin.com/in/dr-g-neeraja-rani-gcet-4a670a2a0/"
    },
    {
        name: "Dr. B. Nagamani",
        role: "Co-Principal Investigator",
        desc: "Application of IKS through story-based learning methodologies.",
        linkedin: "https://www.linkedin.com/in/dr-b-nagamani-gcet-5535b625/"
    },
    {
        name: "Ms. P. Ushashree",
        role: "Co-PI & Mentor",
        desc: "Learning analytics and intelligent tutoring systems integration.",
        linkedin: "https://www.linkedin.com/in/p-ushashree-gcet-4a38092b7/"
    }
];

const interns = [
    {
        name: "N. Abhinav",
        role: "Intern · Ghanitha Module",
        desc: "Full-stack architecture, mobile integrations, and development of the Ghanitha (Vedic Mathematics) module including the Nikhilam Sutra and Piṅgala's patterns.",
        github: "github.com/ABHICODZ",
        linkedin: "https://www.linkedin.com/in/abhinav-nadipelly-504971322"
    },
    {
        name: "B. V. S. Pavan Sreekar",
        role: "Intern · Geometry Module",
        desc: "Interactive Śulbasūtra simulations, square and rectangle constructions, and procedural geometries.",
        github: "github.com/pavansreekar44",
        linkedin: "https://www.linkedin.com/in/bvs-pavan-sreekar-a56391287/"
    },
    {
        name: "Aarav Singh",
        role: "Intern · Astronomy Module",
        desc: "3D celestial simulations, planetary models, and historical astronomical mathematics.",
        github: "github.com/Aarav-Singh2007",
        linkedin: "https://www.linkedin.com/in/aarav-singh-984b8b28b/"
    }
];

const LinkedInIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
);

const GitHubIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
);

export default function Team() {
    return (
        <section id="team" className="relative z-10 py-24 px-6 bg-s1">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-txt mb-4">Project Team</h2>
                    <p className="text-dim text-lg">Minds behind the IKS BGS Samvahan Karyakram initiative</p>
                </div>

                {/* Leadership & Mentors */}
                <div className="mb-24">
                    <h3 className="text-2xl font-serif text-gold-lt mb-10 text-center border-b border-brd/50 pb-4 inline-block mx-auto flex justify-center">Leadership & Mentors</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {leadership.map((member, i) => (
                            <motion.div 
                                key={member.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="flex flex-col items-center text-center p-6 bg-s2 rounded-2xl border border-brd hover:border-gold/50 transition-colors"
                            >
                                <div className="w-20 h-20 rounded-full bg-s1 border-2 border-copper flex items-center justify-center mb-6">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-copper">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                                    </svg>
                                </div>
                                <h4 className="text-lg font-bold text-txt mb-1">{member.name}</h4>
                                <div className="text-gold text-xs font-semibold uppercase tracking-wider mb-3">{member.role}</div>
                                <p className="text-dim text-xs mb-4 leading-relaxed flex-grow">{member.desc}</p>
                                <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-blue-lt hover:text-white transition-colors">
                                    <LinkedInIcon />
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Development Team */}
                <div>
                    <h3 className="text-2xl font-serif text-gold-lt mb-10 text-center border-b border-brd/50 pb-4 inline-block mx-auto flex justify-center">Development Team</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {interns.map((member, i) => (
                            <motion.div 
                                key={member.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.15 }}
                                className="flex flex-col items-center text-center p-8 bg-s2 rounded-2xl border border-brd hover:border-gold transition-colors"
                            >
                                <div className="w-24 h-24 rounded-full bg-s1 border-2 border-gold flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(212,148,58,0.15)]">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 text-gold">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
                                    </svg>
                                </div>
                                <h4 className="text-xl font-bold text-txt mb-2">{member.name}</h4>
                                <div className="text-gold text-sm font-medium mb-4">{member.role}</div>
                                <p className="text-dim text-sm mb-6 leading-relaxed flex-grow">{member.desc}</p>
                                <div className="flex items-center gap-4">
                                    <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-blue-lt hover:text-white transition-colors" title="LinkedIn">
                                        <LinkedInIcon />
                                    </a>
                                    <a href={`https://${member.github}`} target="_blank" rel="noreferrer" className="text-dim hover:text-white transition-colors" title="GitHub">
                                        <GitHubIcon />
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
