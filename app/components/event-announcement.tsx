import React from 'react';

type EventAnnouncementProps = {
    title: string,
    date: string,
    venue: string,
    description: string
}
const EventAnnouncment: React.FC<EventAnnouncementProps> = (props) => {
    console.log("🚀 ~ props:", props)
    return (
        <div className=" rounded-lg shadow-md p-6 font-serif">
            <div className="flex flex-col xs:flex-col sm:flex-row justify-between items-center mb-6 font-extrabold dark:text-white">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 xs:mb-4 sm:mb-0 text-center sm:text-left">{props.title}</h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center sm:text-right">OCTOBER 12, 2024</h2>
            </div>
            {props.description}
            {/* <h3 className="text-xl md:text-2xl mb-6 text-center sm:text-left">Venue - Wakakusa Park (Pyramid Park), Seishincho</h3>
            <div className="schedule max-w-2xl mx-auto text-left">
                <div className="flex flex-col space-y-4">
                    <p className="flex flex-col sm:flex-row sm:justify-between">
                        <span className="font-bold">Puja & Pushpanjali</span>
                        <span className="mt-1 sm:mt-0">10:30 - 13:30</span>
                    </p>
                    <p className="flex flex-col sm:flex-row sm:justify-between">
                        <span className="font-bold">Bhog Prasad</span>
                        <span className="mt-1 sm:mt-0">13:00 - 14:30</span>
                    </p>
                    <p className="flex flex-col sm:flex-row sm:justify-between">
                        <span className="font-bold">Cross Cultural Events</span>
                        <span className="mt-1 sm:mt-0">13:30 - 16:00</span>
                    </p>
                    <p className="flex flex-col sm:flex-row sm:justify-between">
                        <span className="font-bold">Garba Dance</span>
                        <span className="mt-1 sm:mt-0">16:00 - 17:30</span>
                    </p>
                    <p className="flex flex-col sm:flex-row sm:justify-between">
                        <span className="font-bold">Sandhi Puja, Arti & Sindoor khela</span>
                        <span className="mt-1 sm:mt-0">17:30 - 18:30</span>
                    </p>
                </div>
            </div>
            <div className="contact-info mt-8 flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    08036043943, 07026456999
                </p>
                <p className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                    jicajapan2020@gmail.com
                </p>
            </div> */}
        </div>
    );
};

export default EventAnnouncment;