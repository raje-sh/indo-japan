import { BlogList } from "@/app/components/blogs-list";
import { AppLocale } from "@/app/i18n";

export default function Home(props: { params: { lang: AppLocale } }) {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex-grow">
                <BlogList locale={props.params.lang} limit={10} />
            </main>
        </div>
    );
}
