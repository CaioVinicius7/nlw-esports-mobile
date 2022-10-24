import { useEffect, useState } from "react";
import { Image, View, FlatList } from "react-native";

import { Heading } from "@components/Heading";
import { GameCard, GameCardProps } from "@components/GameCard";

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
		<View style={styles.container}>
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
		</View>
	);
}
