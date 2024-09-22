"use client";
import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

const CarouselWrapper: React.FC<{ slides: { img: string; title: string; description: string; }[] }> = ({ slides }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = slides.length;

    const moveCarousel = (direction: number) => {
        setCurrentSlide((prev) => (prev + direction + totalSlides) % totalSlides);
    };

    useEffect(() => {
        const interval = setInterval(() => moveCarousel(1), 5000);
        return () => clearInterval(interval);
    }, []);
    /* <Carousel>
        <CarouselContent>
            <CarouselItem>...</CarouselItem>
            <CarouselItem>...</CarouselItem>
            <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
    </Carousel> */

    return (
        <div className="relative group w-full mx-auto mb-8 overflow-hidden" >
            <div className="flex transition-transform duration-500 ease-in-out max-h-[200px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px]" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                    <div key={index} className="relative w-full flex-shrink-0">
                        <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4 text-center">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">{slide.title}</h2>
                            <p className="text-sm sm:text-base md:text-lg font-normal">{slide.description}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center space-x-1 sm:space-x-2">
                {slides.map((_, index) => (
                    <div key={index} className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${index === currentSlide ? 'bg-sky-400 opacity-100' : 'bg-white opacity-50'} cursor-pointer transition-all duration-300`} onClick={() => setCurrentSlide(index)}></div>
                ))}
            </div>
            <button className="text-sky-600 hidden group-hover:block absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-white bg-opacity-30 rounded-full p-1 sm:p-2 focus:outline-none transition-opacity duration-300 hover:bg-opacity-100" onClick={() => moveCarousel(-1)}>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button>
            <button className="text-sky-600 hidden group-hover:block absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-white bg-opacity-30 rounded-full p-1 sm:p-2 focus:outline-none transition-opacity duration-300 hover:bg-opacity-100" onClick={() => moveCarousel(1)}>
                <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </button>
        </div >
    );
};

export default CarouselWrapper;