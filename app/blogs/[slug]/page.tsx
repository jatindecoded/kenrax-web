import { BlogPost } from "@/components/blogPost";
import blogs from "../../../data/blogs/blogs.json";
import { Blog8 } from "@/components/blog8";
import { Metadata } from "next";
import { toKebabCase } from "@/scripts/fetchNotionProducts";
import properties from "@/data/properties.json"


export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const blog = blogs.find((blog) => blog.slug === slug)
	if (!blog) {
		return <Blog8 />
	}

	const blogPostingJsonLd = {
		"@context": "https://schema.org",
		"@type": "BlogPosting",
		"headline": blog.title,
		"datePublished": blog.createdAt,
		"dateModified": blog.createdAt,
		"author": {
			"@type": "Organization",
			"name": "Kenrax Industries"
		},
		"publisher": {
			"@type": "Organization",
			"name": "Kenrax Industries",
			"logo": {
				"@type": "ImageObject",
				"url": "https://kenrax.in/favicon.svg"
			}
		},
		"mainEntityOfPage": {
			"@type": "WebPage",
			"@id": `https://kenrax.in/blog/${slug}`
		},
		"image": blog.coverImage || properties["media.homepage.photo.1"].media[0],
		"description": "Read more about air compressor filters and spares from the Kenrax blog."
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
			/>
			<BlogPost blog={blog} />
		</>
	)
}

// synchronous static params—no async keyword
export function generateStaticParams() {
	return blogs.map((b) => ({
		slug: b.slug,
	}));
}


export async function generateMetadata(
	{ params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {

	const { slug } = await params;
	const blog = blogs.find(blog => toKebabCase(blog.title) === slug);

	if (!blog) return {};

	const ogImage = blog.coverImage || properties["media.homepage.photo.1"].media[0];
	const fullSlug = blog.slug || slug;

	return {
		title: `${blog.title} | Kenrax Blog`,
		description: "Read more about air compressor filters and spares from the Kenrax blog.",
		openGraph: {
			title: `${blog.title} | Kenrax Blog`,
			description: "Read more about air compressor filters and spares from the Kenrax blog.",
			url: `https://kenrax.in/blog/${fullSlug}`,
			type: "article",
			publishedTime: blog.createdAt,
			authors: ["Kenrax Industries"],
			images: [{ url: ogImage }]
		},
		twitter: {
			card: "summary_large_image",
			title: blog.title,
			description: "Read more about air compressor filters and spares from the Kenrax blog.",
			images: [{ url: ogImage }]
		},
		alternates: {
			canonical: `https://kenrax.in/blog/${fullSlug}`
		}
	};
}
