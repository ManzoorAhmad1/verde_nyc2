'use client';

import { useEffect, useState } from 'react';
import { Facebook, Instagram, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { FaGoogle } from "react-icons/fa";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const MenuDropdown = ({ isOpen, onClose }: Props) => {
    const [closing, setClosing] = useState(false);
    const [mounted, setMounted] = useState(false);

    const menuLinks = [
        { label: 'HOME', href: '/' },
        { label: 'DINNER PARTY', href: '/dinner-party' },
        { label: 'MENU', href: '/menu' },
        { label: 'RESTURENT', href: '/resturent' },
        { label: 'BAR', href: '/bar' },
        { label: 'GALLERY', href: '/gallery' },
    ];

    const footerLinks = [
        'Privacy Policy',
        'Terms of Service',
        'Cookie Policy',
    ];

    const closeMenu = () => {
        setClosing(true);
        setTimeout(() => {
            onClose();
            setClosing(false);
        }, 1000);
    };

    useEffect(() => {
        if (isOpen) {
            setMounted(true);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
            setTimeout(() => setMounted(false), 600);
        }
    }, [isOpen]);

    useEffect(() => {
        const escHandler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeMenu();
        };
        window.addEventListener('keydown', escHandler);
        return () => window.removeEventListener('keydown', escHandler);
    }, []);

    if (!mounted) return null;

    return (
        <div className={`fixed inset-0 z-50 flex bg-white transition-transform duration-500 ease-in-out ${closing ? 'translate-y-[-100%]' : 'translate-y-0'
            }`}
            style={{ transitionDelay: closing ? '500ms' : '0ms' }}>
            {/* LEFT SIDE */}
            <div className="relative w-full md:w-1/2 lg:w-[60%] px-16 py-14 flex flex-col justify-between bg-white overflow-hidden">
                {/* Decorative background */}
                <div className="absolute inset-0 bg-[url('/images/menu-bg.png')] bg-repeat opacity-[0.06] pointer-events-none" />

                {/* CLOSE */}
                <button
                    onClick={closeMenu}
                    className="absolute top-4 left-16 text-black font-serif text-sm tracking-widest hover:opacity-70 transition-opacity"
                >
                    CLOSE
                </button>

                {/* MENU LINKS */}
                <div className="relative space-y-1.5">
                    {menuLinks.map((item, i) => {
                        const delay = closing
                            ? `${(menuLinks.length - i - 1) * 0.1}s`
                            : `${i * 0.15}s`;

                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                onClick={closeMenu}
                                style={{ animationDelay: delay }}
                                className={`block font-serif text-black text-[32px] tracking-wide hover:opacity-70 transition-opacity
                ${closing ? 'menu-out' : 'menu-in'}`}
                            >
                                {item.label}
                            </Link>
                        );
                    })}
                </div>

                {/* FOOTER */}
                <div className="relative w-full">
                    <div className="flex w-full justify-between items-start mb-6">
                        <p className="text-xs text-black/60 leading-relaxed">
                        </p>
                        <div className="text-xs text-black/70">
                            {footerLinks.map((f, i) => (
                                <p
                                    key={f}
                                    style={{
                                        animationDelay: closing
                                            ? `${0.1 + i * 0.05}s`
                                            : `${1.5 + i * 0.15}s`
                                    }}
                                    className={`${closing ? 'menu-out' : 'menu-in'} hover:opacity-70 text-lg italic text-black/80 transition-opacity cursor-pointer mb-2 last:mb-0`}
                                >
                                    {f}
                                </p>
                            ))}
                        </div>
                    </div>

                    <div className="flex w-full justify-between items-start">
                        <p className="text-lg text-primary italic leading-relaxed">
                            After Paris, St Tropez,<br />
                            Dubai & Sardinia :<br />
                            Verde NYC
                        </p>
                        <div className="flex items-center gap-4 p-1">
                            <a href="https://www.instagram.com/verde_nyc/" target="_blank" rel="noopener noreferrer">
                                <Instagram
                                    className='text-black h-10 w-10 hover:opacity-70 transition-opacity cursor-pointer'
                                    style={{
                                        animationDelay: closing ? '0.15s' : '2s',
                                        animation: closing ? 'scaleOut 0.3s ease-out forwards' : 'scaleIn 0.4s ease-out forwards'
                                    }}
                                />
                            </a>
                            <a href="https://www.facebook.com/profile.php?id=61574715609154" target="_blank" rel="noopener noreferrer">
                                <Facebook
                                    className='text-black h-10 w-10 hover:opacity-70 transition-opacity cursor-pointer'
                                    style={{
                                        animationDelay: closing ? '0.2s' : '2.15s',
                                        animation: closing ? 'scaleOut 0.3s ease-out forwards' : 'scaleIn 0.4s ease-out forwards'
                                    }}
                                />
                            </a>
                            <FaGoogle
                                className='text-black h-10 w-10'
                                style={{
                                    animationDelay: closing ? '0.25s' : '2.3s',
                                    animation: closing ? 'scaleOut 0.3s ease-out forwards' : 'scaleIn 0.4s ease-out forwards'
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="hidden md:flex w-[40%] h-screen.m relative bg-[#f7f2ee] overflow-hidden">
                <div className={`relative w-full h-full flex items-center justify-center
        ${closing ? 'image-out' : 'image-in'}`}>

                    <div className="relative w-full h-full">
                        <Image
                            src="/images/WhatsApp Image 2026-01-24 at 10.31.46 AM.jpeg"
                            fill
                            className="object-cover"
                            alt="De L'Amour Illustration"
                            priority
                            sizes="40vw"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuDropdown;