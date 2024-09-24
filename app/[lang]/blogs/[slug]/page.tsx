/* eslint-disable @typescript-eslint/no-unused-vars */
import { getDocumentBySlug, getDocuments } from "outstatic/server";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export async function generateStaticParams() {
  const blogs = getDocuments('blogs', ['slug'])
  return blogs.map(it => ({ slug: it.slug }));
}

const MarkdownRenderer: React.FC<{ markdown: string }> = ({ markdown }) => {
  return (
    <Markdown
      remarkPlugins={[remarkGfm]}
      className="prose"
      components={{
        h1: ({ node, ...props }) => (
          <h1 className="text-3xl font-bold mb-4" {...props} />
        ),
        h2: ({ node, ...props }) => (
          <h2 className="text-2xl font-semibold mb-3" {...props} />
        ),
        h3: ({ node, ...props }) => (
          <h3 className="text-xl md:text-2xl mb-6 text-center sm:text-left" {...props} />
        ),
        p: ({ node, ...props }) => (
          <p className="mb-4 text-base" {...props} />
        ),
        ul: ({ node, ...props }) => (
          <div className="schedule max-w-2xl mx-auto text-left">
            <div className="flex flex-col space-y-4">
              {props.children}
            </div></div>
        ),
        li: ({ node, ...props }) => (
          <li className="mb-2 text-base text-gray-600 dark:text-gray-400" {...props}>
            {props.children}
          </li>
        ),
        blockquote: ({ node, ...props }) => (
          <blockquote className="border-l-4 border-gray-500 pl-4 italic text-gray-600 mb-4" {...props} />
        ),
        strong: ({ node, ...props }) => (
          <strong className="font-bold" {...props} />
        ),
        em: ({ node, ...props }) => (
          <em className="italic" {...props} />
        ),
        code: ({ node, ...props }) => (
          <code className="bg-gray-200 p-1 rounded" {...props} />
        ),
        pre: ({ node, ...props }) => (
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto" {...props} />
        ),
      }}
    >
      {markdown}
    </Markdown>
  );
};


type BlogParams = {
  params: {
    slug: string
  }
}

export default function Blog(props: BlogParams) {
  const blog = getDocumentBySlug('blogs', props.params.slug, ['title', 'description', 'content'])
  if (!blog) return null;
  return (
    <div className="p-4">
      <h1 className="text-4xl font-extrabold dark:text-white">{blog.title}</h1>
      {blog.content}
      <MarkdownRenderer markdown={blog.content} />
    </div>
  )
}
