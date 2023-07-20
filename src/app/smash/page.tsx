import TweetComponentList from '@/components/TweetList/TweetComponentList';
import Link from 'next/link';
import twtsJson from '../../../public/twts/smash.json';
import { t_dbAuthor, t_dbTweetDataParsed, t_dbTweetScores } from '@/components/TweetComponent/types';

export default function CategoryPageSmash() {
	const data = twtsJson as { scores: t_dbTweetScores[]; tweets: t_dbTweetDataParsed[]; authors: t_dbAuthor[] };
	return (
		<div>
			<Link href='/'>back to home</Link>
			<TweetComponentList {...data} ngAccounts={[]} readTweets={[]} />
		</div>
	);
}
