import Image from 'next/image';
const prod = process.env.NODE_ENV === 'production';
const repoName = prod ? process.env.repoName ?? '' : '';

export default function ImageOnGithub(props: React.ComponentProps<typeof Image>) {
	return <Image {...props} src={repoName + props.src} />;
}
