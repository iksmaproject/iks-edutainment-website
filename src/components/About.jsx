import { motion } from 'motion/react';

export default function About() {
    return (
        <section id="about" className="relative z-10 py-24 px-6 bg-s1">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="mb-12"
                >
                    <span className="text-gold-lt text-sm uppercase tracking-widest font-semibold mb-2 block">About the Project</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-txt mb-8">Rediscovering India's Knowledge Traditions</h2>
                </motion.div>

                <div className="space-y-6 text-lg text-dim leading-relaxed">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <strong>Anubhav-Prakriya-Prayoga</strong> is an educational framework developed under the <strong>IKS BGS Samvahan Karyakram</strong> programme. Initiated by the IKS Division under the Ministry of Education, Government of India, the project is spearheaded by Lead Researcher <strong>Dr. Nemani Subhadra</strong> at Geethanjali College of Engineering.
                    </motion.p>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Modern Indian learning often focuses on memorization, leaving learners incapable of applying knowledge. The Indian Knowledge Systems (IKS) approach counters this by emphasizing learning through direct observation (<em>Śravaṇa</em>), logical analysis (<em>Manana</em>), and practical application (<em>Prayoga</em>).
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        We transform primary texts like the <em>Surya Siddhanta</em> and <em>Shulba Sutras</em> into interactive digital experiences. By fusing ancient philosophical and methodological principles with modern gamification, this framework aligns perfectly with the hands-on, idea-based learning vision of the <strong>National Education Policy (NEP) 2020</strong>.
                    </motion.p>
                </div>
            </div>
        </section>
    );
}
