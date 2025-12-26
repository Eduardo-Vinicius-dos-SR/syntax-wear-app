import { Button } from "../Button";
import { Overlay } from "../Overlay";

import galeriaHomem from "../../assets/images/galeria-homem.jpg";
import galeriaTenisRoxo from "../../assets/images/galeria-tenis-roxo.jpg";
import galeriaModelo from "../../assets/images/galeria-modelo.jpg";
import galeriaTenisColorido from "../../assets/images/galeria-tenis-colorido.jpg";
import galeriaTenisBrancoPreto from "../../assets/images/galeria-tenis-branco-e-preto.jpg";
import galeriaTenisCinza from "../../assets/images/galeria-tenis-cinza.jpg";
import styles from "./gallery.module.css";

export const Gallery = () => {
	return (
		<section className="gallery-container container">
			<div className={`${styles.galleryGrid} container`}>
				<div className={`gallery-item relative ${styles.highlight} ${styles.area}`}>
					<img src={galeriaHomem} alt="modelo masculino" className="w-full h-full object-cover rounded-2xl" />

					<Overlay title="Krypton One" subtitle="Estilo urbano com atitude" className="inset-0 justify-center">
						<Button variant="secondary">Feminino</Button>
						<Button variant="secondary">Masculino</Button>
					</Overlay>
				</div>
				<div className={`gallery-item sneaker-purple ${styles.sneakerPurple} ${styles.area}`}>
					<img src={galeriaTenisRoxo} alt="tenis roxo" className="w-full h-full object-cover rounded-2xl" />
				</div>
				<div className={`gallery-item ${styles.model} ${styles.area}`}>
					<img src={galeriaModelo} alt="modelo feminino" className="w-full h-full object-cover rounded-2xl" />
				</div>
				<div className={`gallery-item sneaker-color ${styles.sneakerColor} ${styles.area}`}>
					<img src={galeriaTenisColorido} alt="tenis colorido" className="w-full h-full object-cover rounded-2xl" />
				</div>
				<div className={`gallery-item sneaker-white ${styles.sneakerWhite} ${styles.area}`}>
					<img
						src={galeriaTenisBrancoPreto}
						alt="tenis branco e preto"
						className="w-full h-full object-cover rounded-2xl"
					/>
				</div>
				<div className={`gallery-item sneaker-silver ${styles.sneakerSilver} ${styles.area}`}>
					<img src={galeriaTenisCinza} alt="tenis cinza" className="w-full h-full object-cover rounded-2xl" />
				</div>
			</div>
		</section>
	);
};
