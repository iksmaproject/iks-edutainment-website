import { useRef } from 'react';
import { motion } from 'motion/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const titleRef = useRef(null);

    useGSAP(() => {
        gsap.to(titleRef.current, {
            y: 100,
            opacity: 0.8,
            ease: "none",
            scrollTrigger: {
                trigger: titleRef.current,
                start: "top center",
                end: "bottom top",
                scrub: true
            }
        });
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    return (
        <section className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-20 px-6">
            <motion.div 
                className="max-w-4xl mx-auto text-center w-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {/* ── Top Logos ── */}
                <motion.div variants={itemVariants} className="flex justify-center items-center gap-8 mb-10">
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.1)] p-2 border-2 border-gold/30">
                            <img src="/IKS-Edutainment/geethanjali-logo.png" alt="Geethanjali College" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-[10px] text-dim uppercase tracking-widest font-semibold">GCET</span>
                    </div>
                    <div className="h-12 w-[1px] bg-brd"></div>
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(212,148,58,0.1)] p-1 border-2 border-gold/30">
                            <img src="/IKS-Edutainment/iks-logo.png" alt="IKS Division" className="w-full h-full object-contain" />
                        </div>
                        <span className="text-[10px] text-dim uppercase tracking-widest font-semibold">MoE & AICTE</span>
                    </div>
                </motion.div>

                <motion.div variants={itemVariants} className="mb-6 inline-block">
                    <span className="text-xs sm:text-sm font-medium uppercase tracking-wider text-gold-lt bg-s1 px-4 py-2 rounded-full border border-brd">
                        IKS BGS Samvahan Karyakram
                    </span>
                </motion.div>

                <motion.div variants={itemVariants} ref={titleRef} className="mb-8">
                    <h1 className="font-deva text-5xl sm:text-7xl md:text-8xl text-saffron font-bold mb-4 drop-shadow-lg">
                        अनुभव-प्रक्रिया-प्रयोग
                    </h1>
                    <h2 className="font-serif text-2xl sm:text-3xl text-gold-lt italic">
                        Anubhav · Prakriya · Prayoga
                    </h2>
                </motion.div>

                <motion.div variants={itemVariants} className="w-24 h-1 bg-gradient-to-r from-copper via-gold to-copper mx-auto mb-8 rounded-full" />

                <motion.p variants={itemVariants} className="text-lg sm:text-xl text-dim max-w-2xl mx-auto mb-12 leading-relaxed">
                    An Experiential Learning Framework for Vedic Mathematics and Astronomy. Transforming ancient Indian knowledge into story-driven, interactive digital experiences.
                </motion.p>

                <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 items-center text-sm text-dim">
                    <div className="flex items-center gap-2 bg-s2 px-4 py-2 rounded-full border border-brd hover:border-gold/50 transition-colors">
                        <span className="w-6 h-6 rounded-full bg-s1 flex items-center justify-center border border-brd text-xs">🇮🇳</span>
                        Built with ❤️ in India
                    </div>
                    <a href="mailto:iks.ma.project@gmail.com" className="flex items-center gap-2 bg-s2 px-4 py-2 rounded-full border border-brd hover:border-gold transition-colors">
                        <span className="w-6 h-6 rounded-full bg-s1 flex items-center justify-center border border-brd text-xs">✉️</span>
                        iks.ma.project@gmail.com
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
}
