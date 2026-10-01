import React from 'react';

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur-md border-b border-brd text-txt py-4 px-6 relative z-10">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="flex items-center gap-3">
                    <span className="font-deva text-gold text-2xl font-bold">अनुभव</span>
                    <span className="font-sans text-sm tracking-widest uppercase text-gold-lt hidden sm:inline-block">IKS Edutainment</span>
                </div>
                <div className="hidden md:flex gap-6 text-sm font-medium">
                    <a href="#about" className="hover:text-gold transition-colors">About</a>
                    <a href="#modules" className="hover:text-gold transition-colors">Modules</a>
                    <a href="#team" className="hover:text-gold transition-colors">Team</a>
                    <a href="#privacy" className="hover:text-gold transition-colors">Privacy Policy</a>
                </div>
            </div>
        </nav>
    );
}
