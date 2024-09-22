import Carousel from '@/components/carousel-wrapper';
import ConnectWithUs from '@/components/connect-with-us';
import EventAnnouncment from '@/components/event-announcement';
const slides = [
  {
    img: "https://media.worldnomads.com/Explore/india/spiritual-travel-istock.jpg",
    title: "Majestic Temples",
    description: "Discover India's spiritual heritage"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThb65lVsja8XoQLY8V0aBbqFG9NSCIQz9MCg&s",
    title: "Yoga Retreats",
    description: "Find inner peace and balance"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR-3FdkNXqrEVZD27W6432ViHzBOPQLkAqaw&s",
    title: "Meditation Sanctuaries",
    description: "Experience tranquility and mindfulness"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KuRK3hajDDClUgHLIxTXyC3HVzYnpSBGXg&s",
    title: "Sacred Ganges",
    description: "Explore the lifeline of India"
  },
  {
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0KuRK3hajDDClUgHLIxTXyC3HVzYnpSBGXg&s",
    title: "Serene Ashrams",
    description: "Immerse in spiritual learning"
  }
];

export default function Home() {


  return (
    <div className="flex flex-col min-h-screen text-slate-520 dark:text-slate-400 bg-white dark:bg-slate-900">
      <main className="flex-grow">
        <div className="container mx-auto">
          <Carousel slides={slides} />
        </div>

        <div className="container mx-auto">
          <EventAnnouncment />
        </div>

        <div className="container mx-auto py-4">
          <ConnectWithUs />
        </div>
      </main>
    </div>
  );
}
