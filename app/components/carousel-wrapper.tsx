"use client";
import React, { useEffect, useState } from 'react';
import Autoplay from "embla-carousel-autoplay"
import { Carousel, CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';

const CarouselWrapper: React.FC<{ slides: { img: string; title: string; description: string; }[] }> = ({ slides }) => {
    const [api, setApi] = React.useState<CarouselApi>()
    // it's read_only, will not change current viewing slide
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        if (!api) {
            return
        }
        const updateCurrentSlide = () => {
            setCurrentSlide(api.selectedScrollSnap()); // Get the current active slide index
        };
        api.on('select', updateCurrentSlide); // Update current slide on selection
        return () => {
            api.off('select', updateCurrentSlide); // Clean up the event listener
        };
    }, [api]);

    const moveToSlide = (index: number) => {
        if (api) {
            api.scrollTo(index); // Move to the specified slide index
        }
    };

    return <Carousel setApi={setApi} opts={{
        align: "start",
        loop: true,
    }} plugins={[
        Autoplay({
            delay: 3000,
        }),
    ]} className='relative group'>
        <CarouselContent>
            {slides.map((slide, index) => (
                <CarouselItem key={index} className='abc'>
                    <div className="relative w-full flex-shrink-0">
                        <img src={slide.img} alt={slide.title} className="w-full h-full object-cover max-h-[200px] sm:max-h-[300px] md:max-h-[400px] lg:max-h-[500px]" />
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 p-4 text-center">
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 sm:mb-2">{slide.title}</h2>
                            <p className="text-sm sm:text-base md:text-lg font-normal">{slide.description}</p>
                        </div>
                    </div>
                </CarouselItem>
            ))}
        </CarouselContent>
        <div className="absolute bottom-2 sm:bottom-4 left-0 right-0 flex justify-center space-x-1 sm:space-x-2">
            {slides.map((_, index) => (
                <div key={index} className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${index === currentSlide ? 'bg-sky-400 opacity-100' : 'bg-white opacity-50'} cursor-pointer transition-all duration-300`} onClick={() => moveToSlide(index)}></div>
            ))}
        </div>
        <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <CarouselPrevious className='transition-background duration-500' />
        </div>
        <div className='opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            <CarouselNext className='transition-background duration-500' />
        </div>
    </Carousel>
};

export default CarouselWrapper;