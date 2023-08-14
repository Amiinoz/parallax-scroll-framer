import styles from "./page.module.css";
import Image from "next/image";

const images = [
	"/images/1.jpg",
	"/images/2.jpg",
	"/images/3.jpg",
	"/images/4.jpg",
	"/images/5.jpg",
	"/images/6.jpg",
	"/images/7.jpg",
	"/images/8.jpg",
	"/images/9.jpg",
	"/images/10.jpg",
	"/images/11.jpg",
	"/images/12.jpg",
];

export default function Home() {
	return (
		<main className={styles.main}>
			<div className="styles.gallery">
				<Column images={[images[0], images[1], images[2]]} />
				<Column images={[images[3], images[4], images[5]]} />
				<Column images={[images[6], images[7], images[8]]} />
				<Column images={[images[9], images[10], images[11]]} />
			</div>
		</main>
	);
}

const Column = ({ images }) => {
	return (
		<div className="styles.column">
			{images.map((image, index) => {
				return (
					<Image
						key={index}
						src={image}
						alt="Image"
						width={300}
						height={300}
					/>
				);
			})}
		</div>
	);
};
