import Carousel from '@/components/carousel-wrapper';
import ConnectWithUs from '@/components/connect-with-us';
import EventAnnouncment from '@/components/event-announcement';
const slides = [
  {
    img: "/images/image1.jpeg",
    title: "Majestic Temples",
    description: "Discover India's spiritual heritage"
  },
  {
    img: "/images/image2.jpeg",
    title: "Yoga Retreats",
    description: "Find inner peace and balance"
  },
  {
    img: "/images/image3.jpeg",
    title: "Meditation Sanctuaries",
    description: "Experience tranquility and mindfulness"
  },
  {
    img: "/images/image4.jpeg",
    title: "Sacred Ganges",
    description: "Explore the lifeline of India"
  }
];

export default function Home() {


  return (
    <div className="flex flex-col min-h-screen">
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
