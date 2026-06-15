
import Link from "next/link";
import { Roboto , Poppins} from 'next/font/google'

const poppins= Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
})

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
})
const BlogsPage = () => {
const blogs = [
  {
    id: 1,
    title: "Understanding Client-Side Rendering",
    slug: "understanding-client-side-rendering",
    author: "John Doe",
    category: "Web Development",
    publishedAt: "2026-06-01",
    image: "https://example.com/images/csr.jpg",
    excerpt:
      "Learn how client-side rendering works and why it's popular in modern web applications.",
    content:
      "Client-side rendering (CSR) allows the browser to build the user interface using JavaScript after the initial page load..."
  },
  {
    id: 2,
    title: "Server-Side Rendering Explained",
    slug: "server-side-rendering-explained",
    author: "Jane Smith",
    category: "Web Development",
    publishedAt: "2026-06-03",
    image: "https://example.com/images/ssr.jpg",
    excerpt:
      "A beginner-friendly guide to server-side rendering and its SEO benefits.",
    content:
      "Server-side rendering (SSR) generates HTML on the server before sending it to the browser, resulting in faster initial content display..."
  },
  {
    id: 3,
    title: "Next.js Rendering Strategies",
    slug: "nextjs-rendering-strategies",
    author: "Alex Johnson",
    category: "JavaScript",
    publishedAt: "2026-06-07",
    image: "https://example.com/images/nextjs.jpg",
    excerpt:
      "Explore SSR, SSG, ISR, and CSR in Next.js with practical examples.",
    content:
      "Next.js offers multiple rendering methods that allow developers to optimize performance and user experience..."
  },
  {
    id: 4,
    title: "SEO Tips for Modern Websites",
    slug: "seo-tips-for-modern-websites",
    author: "Sarah Lee",
    category: "SEO",
    publishedAt: "2026-06-10",
    image: "https://example.com/images/seo.jpg",
    excerpt:
      "Improve your website's search engine ranking with these practical SEO techniques.",
    content:
      "SEO remains a critical part of web development. Proper metadata, fast loading times, and quality content all contribute to better rankings..."
  }
];
     

    return (
        <div className={poppins.className}>
           <h2 className ="text-3xl font-bold mb-4"></h2>
           
            {blogs.map(blog => <div key={blog.id}>
                  <h2 className="text-4xl font-bold mb-2">{blog.title}</h2>
                  <Link href={`/blogs/${blog.id}`}> Show details</Link>

            </div>)}

        </div>
    );
};

export default BlogsPage;