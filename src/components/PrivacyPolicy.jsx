import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const policies = [
    {
        title: "1. Information We Collect",
        content: "To provide an immersive educational experience, we collect only essential data: Account Information (name, email address, hashed password, and Google profile ID if utilizing Single Sign-On) and Learning Data (module progress, quiz scores). We strictly DO NOT collect sensitive identifiers such as precise location, contact lists, photos, or microphone access."
    },
    {
        title: "2. How We Use Your Information",
        content: "Your data is used exclusively to facilitate your learning journey. This includes account management, synchronizing progress across devices, generating personalized learning reports, and delivering critical security or administrative notices. We do not use your data for profiling or targeted advertising."
    },
    {
        title: "3. Data Sharing & Third-Party Services",
        content: "We absolutely do not sell or rent your personal information to third parties. We utilize trusted, compliant infrastructure providers: Google Sign-In (Authentication), Supabase (Encrypted Database & Auth), Brevo (Email OTP), and Google Cloud Run (Hosting). We do not integrate any advertising, marketing, or analytical trackers."
    },
    {
        title: "4. Data Storage & Security",
        content: "Data is securely stored in Supabase (a managed PostgreSQL environment). All data in transit is encrypted using industry-standard TLS/SSL protocols. Authentication tokens are stored securely within your device's encrypted keystore. We adhere strictly to data minimization principles."
    },
    {
        title: "5. Children's Privacy (COPPA & GDPR-K Compliance)",
        content: "We comply fully with the Children's Online Privacy Protection Act (COPPA) and Google Play's Families Policy. While our content is educational and suitable for all ages, we do not knowingly permit children under 13 to create independent accounts without verifiable parental or institutional consent. If we learn we have collected data from a child under 13 without consent, we will delete it immediately."
    },
    {
        title: "6. Data Retention & Deletion Rights",
        content: "We retain your data only as long as your account is active. You have the right to request complete data deletion at any time. To request account and data deletion, please email us directly at iks.ma.project@gmail.com from the email address associated with your account. Upon receiving your request, all personal data and learning progress will be permanently wiped from our active servers within 14 days."
    },
    {
        title: "7. App Permissions",
        content: "Our application requests minimal device permissions. We request Internet/Network access solely to sync your learning progress with our secure database and authenticate your account. We do not request 'dangerous' permissions (such as camera, microphone, or precise location) as they are not required for core functionality."
    },
    {
        title: "8. Changes to This Policy",
        content: "Any changes to this privacy policy will be posted on this page and the Effective Date will be updated. For significant changes, we will notify you via the email address associated with your account."
    },
    {
        title: "9. Contact Us",
        content: "If you have any questions or concerns regarding this Privacy Policy, your data rights, or the Google Play Data Safety section, please contact the Principal Investigator and development team at iks.ma.project@gmail.com."
    }
];

function AccordionItem({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border border-brd rounded-lg mb-4 overflow-hidden bg-s2">
            <button 
                onClick={() => setIsOpen(!isOpen)} 
                className="w-full px-6 py-4 text-left flex justify-between items-center text-gold-lt font-serif text-lg hover:bg-white/5 transition-colors"
            >
                {title}
                <motion.span 
                    animate={{ rotate: isOpen ? 180 : 0 }} 
                    transition={{ duration: 0.3 }}
                >
                    ▼
                </motion.span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 pb-6 pt-2 text-dim border-t border-brd/50">
                            {content}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function PrivacyPolicy() {
    return (
        <section id="privacy" className="relative z-10 py-24 px-6">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-serif text-txt mb-4">Privacy Policy</h2>
                    <p className="text-dim">Effective Date: 1 October 2026</p>
                    <p className="text-dim mt-4">We respect your privacy and are committed to protecting your personal data.</p>
                </div>

                <div className="space-y-2">
                    {policies.map((policy) => (
                        <AccordionItem key={policy.title} title={policy.title} content={policy.content} />
                    ))}
                </div>
            </div>
        </section>
    );
}
