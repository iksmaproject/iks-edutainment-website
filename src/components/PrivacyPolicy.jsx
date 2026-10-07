import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const policies = [
    {
        title: "1. Information We Collect",
        content: "We collect only what the app needs to work. Account information: your name, your email address and, if you register with email, a password that we store only in hashed form. If you use Google Sign-In, we receive your name and email address from Google; we do not store your Google profile ID or profile photo. Learning data: the modules and sections you complete, practice and quiz scores, learning-report scores (for example reasoning or pattern-recognition levels) and your points, level and daily streak. One-time verification data: when you register with email, your email address and a one-time code are kept briefly to verify you and are deleted once verification is complete. Kept only on your device: your language choice, your learning-path choices (class, interests, learning style, daily goal), downloaded lesson lists and some activity progress in the astronomy lessons. Technical logs: like most online services, our hosting and database providers may record standard technical data such as IP address and request times for security and reliability. We do not collect precise location, contact lists, photos or files, or audio recordings. You can also try the app as a guest; guest mode does not create an account and sends no personal information to us."
    },
    {
        title: "2. How We Use Your Information",
        content: "Your data is used only to run your learning journey: creating and securing your account, verifying your email with a one-time code, keeping your progress, points and streak, generating learning reports, protecting sign-up from automated bots, and sending important security or administrative notices. We do not use your data for advertising or marketing, and we do not sell it."
    },
    {
        title: "3. Data Sharing & Third-Party Services",
        content: "We do not sell or rent your personal information. We rely on the following service providers, who process data only to provide their service: Google Sign-In (authentication), Supabase (database), Brevo (sending the email one-time code), Google Cloud Run (hosting), and Cloudflare Turnstile (a check, shown during registration, that confirms a person is signing up; Cloudflare may process technical information from your device such as your IP address). Some Vedic Geometry lessons embed videos from YouTube; if you play one, YouTube (Google) may collect information under its own privacy policy. The app does not contain advertising or analytics tracking tools. These providers may process data on servers outside India."
    },
    {
        title: "4. Data Storage & Security",
        content: "Your account and learning data are stored in Supabase, a managed PostgreSQL service. Data sent between the app and our servers is encrypted in transit with TLS/SSL. Passwords are stored only as hashes, never in plain text. After you sign in, a sign-in token is kept in the app's private storage on your device and is removed when you sign out. We follow data minimisation: we collect only what is needed for the app to work."
    },
    {
        title: "5. Children's Privacy",
        content: "This app is made for school and college learners, including students under 18. We keep data collection to the minimum needed for learning, show no advertising and do not use children's data for marketing. Learners can try the app as a guest without giving any personal information. We recommend that learners under 18 create an account with the knowledge of a parent, guardian or their school. A parent or guardian can ask us at any time to show or delete a child's data (see Section 6). If you believe a child's data was collected without suitable consent, write to us and we will delete it. We aim to follow India's Digital Personal Data Protection Act, 2023 and Google Play's Families policy, and we will update this policy as these rules require."
    },
    {
        title: "6. Data Retention & Deletion Rights",
        content: "We keep your data while your account is active. You can ask us to delete your account and data at any time: email iks.ma.project@gmail.com from the email address of your account with the subject \"Delete my account\". After we confirm the request, your account, progress and learning reports are permanently deleted from our active systems within 14 days; copies in routine backups are removed when those backups are overwritten. Data that is kept only on your device (such as your language choice) is removed when you clear the app's data or uninstall the app."
    },
    {
        title: "7. App Permissions",
        content: "The app uses Internet access to sign you in and sync your progress; vibration for touch feedback; and audio playback settings so narration and sound effects play correctly, including with the screen off. On some Android versions the media components we use also declare audio-recording and storage permissions. The app does not use them: it never records audio, and it never reads your photos, files or contacts. It does not use your camera or location."
    },
    {
        title: "8. Changes to This Policy",
        content: "Any changes to this privacy policy will be posted on this page and the Effective Date will be updated. For significant changes, we will notify you via the email address associated with your account."
    },
    {
        title: "9. Contact Us",
        content: "If you have any questions or concerns about this Privacy Policy, your data rights, or the Google Play Data Safety section, or to ask for access to or deletion of your data, please contact the Principal Investigator and development team at iks.ma.project@gmail.com."
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
                    <p className="text-dim">Effective Date: 6 October 2026</p>
                    <p className="text-dim mt-4">We respect your privacy and are committed to protecting your personal data. Anubhav–Prakriya–Prayoga is built by the IKS Edutainment project team at Geethanjali College of Engineering and Technology, Hyderabad, under the IKS Division, Ministry of Education, Government of India.</p>
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
