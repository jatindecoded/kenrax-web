import { BlogPost } from "@/components/blogPost";
import blogs from "../../../data/blogs/blogs.json";
import { Blog8 } from "@/components/blog8";
import { Metadata } from "next";
import { toKebabCase } from "@/scripts/fetchNotionProducts";
import properties from "@/data/properties.json"

function excerptOf(blog: { content?: Array<any> }): string {
	const first = (blog.content ?? []).find(
		(block: any) => (block.paragraph?.rich_text ?? []).length > 0
	);
	if (!first) return "Kenrax blog — guides on air compressor filters and maintenance.";
	const text = (first.paragraph?.rich_text ?? [])
		.map((rt: any) => rt.plain_text)
		.join("");
	return text.length > 155 ? text.slice(0, 155).trimEnd() + "…" : text;
}


export default async function Blog({ params }: { params: Promise<{ slug: string }> }) {
	const { slug } = await params;
	const blog = blogs.find((blog) => blog.slug === slug)
	if (!blog) {
		return <Blog8 />
	}

	const excerpt = excerptOf(blog)

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
		"description": excerpt
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
	const blog = blogs.find(blog => blog.slug === slug);

	if (!blog) return {};

	const excerpt = excerptOf(blog);
	const ogImage = blog.coverImage || properties["media.homepage.photo.1"].media[0];
	const fullSlug = blog.slug || slug;

	return {
		title: `${blog.title} | Kenrax Blog`,
		description: excerpt,
		openGraph: {
			title: `${blog.title} | Kenrax Blog`,
			description: excerpt,
			url: `https://kenrax.in/blog/${fullSlug}`,
			type: "article",
			publishedTime: blog.createdAt,
			authors: ["Kenrax Industries"],
			images: [{ url: ogImage }]
		},
		twitter: {
			card: "summary_large_image",
			title: blog.title,
			description: excerpt,
			images: [{ url: ogImage }]
		},
		alternates: {
			canonical: `https://kenrax.in/blog/${fullSlug}`
		}
	};
}
