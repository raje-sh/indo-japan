import Carousel from '@/components/carousel-wrapper';
import ConnectWithUs from '@/components/connect-with-us';
import EventAnnouncment from '@/components/event-announcement';
import { getDocuments } from 'outstatic/server';

type PageProps = {
  params: {
    lang: string;
  };
  searchParams: Record<string, string | string[] | undefined>;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const sortBySequence = (list: (any & { sequence: string })[]) => {
  return list.sort((a, b) => {
    const [aSeq, bSeq] = [parseInt(a.sequence as string), parseInt(b.sequence as string)];
    return aSeq - bSeq;
  });
}

const getData = (locale: string) => {
  const cSlides = sortBySequence(getDocuments('carouselslide', ['title', 'coverImage', 'description', 'sequence', 'locale'])
    .filter(it => it.locale === locale))
  const events = sortBySequence(getDocuments('event', ['title', 'description', 'locale', 'sequence', 'content'])
    .filter(it => it.locale === locale))
  return { cSlides, events };
}
export default function Home(props: PageProps) {
  const { cSlides, events } = getData(props.params.lang);
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <div className="container mx-auto">
          <Carousel slides={cSlides.map(it => ({ img: it.coverImage ?? '', title: it.title, description: it.description ?? '' }))} />
        </div>

        <div className="container mx-auto">
          {events.map(it => <EventAnnouncment date='' title={it.title} venue='' description={it.content} key={it.title} />)}
        </div>

        <div className="container mx-auto py-4">
          <ConnectWithUs />
        </div>
      </main>
    </div>
  );
}
