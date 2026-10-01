import { motion } from 'motion/react';

const modules = [
    {
        id: 1,
        title: "Vedic Mathematics",
        subtitle: "गणित सभा",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 text-gold">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.5v15" />
            </svg>
        ),
        description: "Explore the elegant algorithms of ancient Indian mathematics. Master calculations using the Nikhilam Sutra, discover the binary numbers of Piṅgala, and unravel the patterns of the Meru Prastāra."
    },
    {
        id: 2,
        title: "Vedic Geometry",
        subtitle: "शुल्बसूत्र",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 text-gold">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.25 10.5l-4.5 4.5m0-4.5l4.5 4.5m1.5-12h-9c-1.657 0-3 1.343-3 3v9c0 1.657 1.343 3 3 3h9c1.657 0 3-1.343 3-3v-9c0-1.657-1.343-3-3-3z" />
            </svg>
        ),
        description: "Dive into the architectural genius of the Śulbasūtras. Learn about the construction of fire altars, Baudhāyana's squares and rectangles, and ancient area transformation techniques."
    },
    {
        id: 3,
        title: "Vedic Astronomy",
        subtitle: "ज्योतिष शास्त्र",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-12 h-12 text-gold">
                <circle cx="12" cy="12" r="9" strokeWidth={1.5} />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3a9 9 0 010 18M12 3a9 9 0 000 18" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12h18" />
            </svg>
        ),
        description: "Journey through the cosmos with ancient observational astronomy. Understand planetary motions, the mathematics of eclipses, and computational models from classic Siddhānta texts."
    }
];

export default function Modules() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    return (
        <section id="modules" className="relative z-10 py-24 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif text-txt mb-4">Learning Modules</h2>
                    <p className="text-dim text-lg">Interactive simulations of ancient sciences</p>
                </div>

                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {modules.map((mod) => (
                        <motion.div 
                            key={mod.id} 
                            variants={cardVariants}
                            className="bg-s2 border border-brd rounded-xl p-8 hover:border-gold transition-colors duration-300 hover:-translate-y-2 group"
                        >
                            <div className="text-5xl mb-6">{mod.icon}</div>
                            <h3 className="text-2xl font-serif text-gold-lt mb-1">{mod.title}</h3>
                            <h4 className="font-deva text-xl text-saffron mb-4">{mod.subtitle}</h4>
                            <p className="text-dim leading-relaxed">{mod.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
