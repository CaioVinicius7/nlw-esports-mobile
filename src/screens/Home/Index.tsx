import { useEffect, useState } from "react";
import { Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Heading } from "@components/Heading";
import { GameCard, GameCardProps } from "@components/GameCard";
import { Background } from "@components/Background";

import logo from "@assets/logo-nlw-esports.png";

import { styles } from "./styles";

export function Home() {
	const [games, setGames] = useState<GameCardProps[]>([]);

	useEffect(() => {
		fetch("http://192.168.0.137:3333/games")
			.then((response) => response.json())
			.then((data) => setGames(data));
	}, []);

	return (
		<Background>
			<SafeAreaView style={styles.container}>
				<Image source={logo} style={styles.logo} />

				<Heading
					title="Encontre seu duo!"
					subTitle="Selecione o game que deseja jogar..."
				/>

				<FlatList
					data={games}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => <GameCard data={item} />}
					showsHorizontalScrollIndicator={false}
					horizontal
					contentContainerStyle={styles.contentList}
				/>
			</SafeAreaView>
		</Background>
	);
}
