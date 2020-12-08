import React from 'react';
import { TagFilter } from '../TagFilter';
import { Feature } from '../index/Feature';
import { Root } from '../layouts/Root';

type ArticlesPageProps = {
	tag?: TagLabel;
	allTags: TagLabel[];
	items: PortfolioItem[];
};

function ArticlesPage({ tag, allTags, items }: ArticlesPageProps) {
	const headerContent = (
		<TagFilter tags={allTags} currentTag={tag} classification="articles" />
	);

	return (
		<Root
			title="Articles"
			page="portfolio"
			smallLogo
			headerContent={headerContent}
		>
			<div className="flex flex-col space-y-48 overflow-x-hidden max-w-6xl -mx-8 sm:mx-auto">
				{items.map((i) => (
					<Feature key={i.slug} {...i} />
				))}
			</div>
		</Root>
	);
}

export { ArticlesPage };