import Head from "next/head";
import { Header, Banner, SmallCard } from "../components";

export default function Home({ exploreData, cardsData }) {
	return (
		<div className="min-h-screen">
			<Head>
				<title>AirBNB</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Banner />
			<main className="max-w-7xl mx-auto px-8 sm:px-16">
				<section className="pt-6">
					<h2 className="text-4xl font-semibold pb-5">
						Explore Nearby
					</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						{exploreData?.map((item) => (
							<SmallCard
								key={item.index}
								img={item.img}
								location={item.location}
								distance={item.distance}
							/>
						))}
					</div>
				</section>
			</main>
		</div>
	);
}

export async function getStaticProps() {
	const exploreData = await fetch("https://links.papareact.com/pyp").then(
		(res) => res.json()
	);

	const cardsData = await fetch("https://links.papareact.com/zp1").then(
		(res) => res.json()
	);
	return {
		props: {
			exploreData,
			cardsData,
		},
	};
}
