import Head from "next/head";
import { Header, Banner } from "../components";

export default function Home() {
	return (
		<div className="min-h-screen">
			<Head>
				<title>AirBNB</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Banner />
		</div>
	);
}
