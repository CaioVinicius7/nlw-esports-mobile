import { Image, View } from "react-native";

import { styles } from "./styles";

import logo from "@assets/logo-nlw-esports.png";
import { Heading } from "@components/Heading";

export function Home() {
	return (
		<View style={styles.container}>
			<Image source={logo} style={styles.logo} />

			<Heading
				title="Encontre seu duo!"
				subTitle="Selecione o game que deseja jogar..."
			/>
		</View>
	);
}
