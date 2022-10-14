import { Image, View } from "react-native";

import { Heading } from "@components/Heading";
import { GameCard } from "@components/GameCard";

import logo from "@assets/logo-nlw-esports.png";

import { styles } from "./styles";

import { GAMES } from "@utils/games";

export function Home() {
	return (
		<View style={styles.container}>
			<Image source={logo} style={styles.logo} />

			<Heading
				title="Encontre seu duo!"
				subTitle="Selecione o game que deseja jogar..."
			/>

			<GameCard data={GAMES[0]} />
		</View>
	);
}
