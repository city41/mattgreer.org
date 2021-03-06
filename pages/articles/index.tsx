import React from 'react';
import { ArticlesPage } from '../../components/articles/ArticlesPage';
import { getAllArticleTags } from '../../lib/tags';
import { getAllArticleItems } from '../../lib/items';

export const config = {
	unstable_runtimeJS: false,
};

type ArticlesIndexNextPageProps = {
	allTags: string[];
	items: FeatureItem[];
};

export async function getStaticProps(): Promise<{
	props: ArticlesIndexNextPageProps;
}> {
	const allTags = getAllArticleTags();
	const items = getAllArticleItems({
		sortByDateDescending: true,
	});

	return { props: { allTags, items } };
}

export default function ArticlesIndexNextPage({
	allTags,
	items,
}: ArticlesIndexNextPageProps) {
	return <ArticlesPage allTags={allTags} items={items} />;
}
