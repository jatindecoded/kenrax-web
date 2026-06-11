import { PackageOpen, Search, SearchIcon } from "lucide-react";
import { useRouter } from '@bprogress/next/app';
import { useState } from "react";
import { productsPageHref } from "./constants";
import { Button } from "./ui/button";
import products from "@/lib/products";

import {
	Command,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";

export const SearchCustom = () => {
	const router = useRouter();

	const [open, setOpen] = useState(false)
	const [query, setQuery] = useState("");


	const onSubmitQuery = () => {
		router.push(productsPageHref + (query !== "" ? ("?name=" + query) : ""))
	}


	return (
		<div className="relative mb-6 h-[36px] relative flex justify-center gap-1">
			{/* <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 h-3 w-3" />
			<Input
				value={searchQuery}
				onChange={(e) => setSearchQuery(e.target.value)}
				placeholder="Search for a product. (Eg. B006700770010)"
				className="px-8 text-xs!" />
			<Button className="absolute right-0.5 top-1/2 -translate-y-1/2" size={'sm'} type="submit">Search</Button> */}

			<Popover open={open} onOpenChange={setOpen} >
				<PopoverTrigger asChild className="h-full">
					<Button
						aria-label="Search products..."
						variant="input"
						role="combobox"
						aria-expanded={open}
						className="w-[80vw] max-w-[600px] justify-start"
					>
						<SearchIcon className="size-4 shrink-0 opacity-50" />

						{query || "Search products..."}
					</Button>
				</PopoverTrigger>
				<PopoverContent
					sideOffset={-36}
					className="w-[80vw] max-w-[600px] p-0 animate-[wiggle_10s_ease-in-out_infinite]!"
					avoidCollisions={false}
				>
					<Command
						filter={(_, search, keywords) => {
							const searchValue =
								keywords && keywords.length > 0 ? keywords.join(" ") : "";

							return searchValue.toLowerCase().replaceAll(" ", "").includes(search.toLowerCase().replaceAll(" ", "")) ? 1 : 0;
						}}
					>
						<CommandInput
							value={query}
							onValueChange={setQuery}
							placeholder="Search products..." className="h-9" />
						<CommandList>
							<CommandEmpty>No products found.</CommandEmpty>
							<CommandGroup>
								{products.map((product, idx) => (
									<CommandItem
										key={idx}
										value={idx.toString()}
										keywords={[product.partNumber, product.type]}
										// value={product.partNumber + " - " + product.type}
										onSelect={(currentValue) => {
											setOpen(false)
											router.push(product.url)
										}}
										className="font-semibold"
									>
										<Link href={product.url} className="flex gap-4 w-full justify-between">
											<div className="flex gap-2 items-center">
												<PackageOpen />
												<span>
													{product.partNumber}
												</span>
											</div>
											<span className="text-xs uppercase text-muted-foreground font-normal">
												{product.type}
											</span>
										</Link>
								
									</CommandItem>
								))}
							</CommandGroup>
						</CommandList>
					</Command>
				</PopoverContent>
			</Popover>
			<Button
				aria-label="Search"
				className="h-full"
				onClick={onSubmitQuery}
			>
				<span className="block md:hidden">
					<Search />
				</span>
				<span className="hidden md:block">
					Search
				</span>
			</Button>



		</div >
	)
}