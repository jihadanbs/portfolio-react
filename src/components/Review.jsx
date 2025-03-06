import React, { useEffect } from 'react';
import ReviewCard from './ReviewCard';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Daftar GSAP plugins
gsap.registerPlugin(ScrollTrigger);

const reviews = [
    {
        content: 'Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.',
        name: 'Sophia Ramirez',
        imgSrc: '/images/people-1.jpg',
        company: 'PixelForge'
    },
    {
        content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
        name: 'Ethan Caldwell',
        imgSrc: '/images/people-2.jpg',
        company: 'NexaWave'
    },
    {
        content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
        name: 'Liam Bennett',
        imgSrc: '/images/people-3.jpg',
        company: 'CodeCraft'
    },
    {
        content: 'Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.',
        name: 'Noah Williams',
        imgSrc: '/images/people-4.jpg',
        company: 'BrightWeb'
    },
    {
        content: 'Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.',
        name: 'Ava Thompson',
        imgSrc: '/images/people-5.jpg',
        company: 'TechMosaic'
    },
    {
        content: 'Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.',
        name: 'Jonathan',
        imgSrc: '/images/people-6.jpg',
        company: 'Skyline Digital'
    }
];

const Review = () => {
    useEffect(() => {
        gsap.to('.scrub-slide', {
            x: '-1000', // Animasi perpindahan pada sumbu X
            scrollTrigger: {
                trigger: '.scrub-slide',
                start: 'top bottom', // Mulai animasi saat elemen mencapai bagian bawah viewport
                end: 'top top', // Berakhir saat elemen mencapai bagian atas viewport
                scrub: true, // Sinkronisasi animasi dengan scroll
            },
        });
    }, []);

    return (
        <section
            id="reviews"
            className="section overflow-hidden">
            <div className="container max-w-[1200px] mx-auto">
                <h2 className="headline-2 mb-8 reveal-up">
                    Feedback dari para customer
                </h2>
                <div className="scrub-slide flex items-stretch gap-3 w-full">
                    {reviews.map(({ content, name, imgSrc, company }, index) => (
                        <ReviewCard
                            key={`${name}-${index}`}
                            name={name}
                            imgSrc={imgSrc}
                            company={company}
                            content={content}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Review;
