"use client";
import styles from "./page.module.css";
import Image from "next/image";
import { useTransform, useScroll, motion } from "framer-motion";
import { useRef, useEffect } from "react";
import Lenis from "@studio-freight/lenis";

const images = [
	"1.jpg",
	"2.jpg",
	"3.jpg",
	"4.jpg",
	"5.jpg",
	"6.jpg",
	"7.jpg",
	"8.jpg",
	"9.jpg",
	"10.jpg",
	"11.jpg",
	"12.jpg",
];

export default function Home() {
	const container = useRef(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});

	const y = useTransform(scrollYProgress, [0, 1], [0, 1000]);

	return (
		<main className={styles.main}>
			<div className={styles.spacer}></div>
			<div ref={container} className={styles.gallery}>
				<Column images={[images[0], images[1], images[2]]} y={y} />
				<Column images={[images[3], images[4], images[5]]} />
				<Column images={[images[6], images[7], images[8]]} />
				<Column images={[images[9], images[10], images[11]]} />
			</div>
			<div className={styles.spacer}></div>
		</main>
	);
}

const Column = ({ images, y }) => {
	return (
		<motion.div style={{ y }} className={styles.column}>
			{images.map((src, index) => {
				return (
					<div key={index} className={styles.imageContainer}>
						<Image
							key={index}
							src={`/images/${src}`}
							fill
							alt="Image"
							className="content-img"
						/>
					</div>
				);
			})}
		</motion.div>
	);
};
