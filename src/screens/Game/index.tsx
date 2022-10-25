import { useEffect, useState } from "react";
import { FlatList, Image, TouchableOpacity, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import { THEME } from "@theme/index";
import { Background } from "@components/Background";
import { Heading } from "@components/Heading";
import { DuoCard, DuoCardProps } from "@components/DuoCard";
import { DuoMatch } from "@components/DuoMatch";

import { styles } from "./styles";
import { GameParams } from "../../@types/navigation";

import logo from "../../assets/logo-nlw-esports.png";

export function Game() {
	const [duos, setDuos] = useState<DuoCardProps[]>([]);
	const [discordDuoSelected, setDiscordDuoSelected] = useState("caio#1234");

	const route = useRoute();
	const navigation = useNavigation();

	const game = route.params as GameParams;

	function handleGoBack() {
		navigation.goBack();
	}

	useEffect(() => {
		fetch(`http://192.168.0.137:3333/games/${game.id}/ads`)
			.then((response) => response.json())
			.then((data) => setDuos(data));
	}, []);

	return (
		<Background>
			<SafeAreaView style={styles.container}>
				<View style={styles.header}>
					<TouchableOpacity onPress={handleGoBack}>
						<Entypo
							name="chevron-thin-left"
							color={THEME.COLORS.CAPTION_300}
							size={20}
						/>
					</TouchableOpacity>

					<Image source={logo} style={styles.logo} />

					<View style={styles.right} />
				</View>

				<Image
					source={{
						uri: game.banner
					}}
					style={styles.cover}
					resizeMode="cover"
				/>

				<Heading title={game.title} subTitle="Conecte-se e comece a jogar!" />

				<FlatList
					data={duos}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<DuoCard data={item} onConnect={() => {}} />
					)}
					style={styles.containerList}
					horizontal
					contentContainerStyle={
						duos.length > 0 ? styles.contentList : styles.emptyListContent
					}
					showsHorizontalScrollIndicator={false}
					ListEmptyComponent={() => (
						<Text style={styles.emptyListText}>
							Não há anúncios publicados ainda.
						</Text>
					)}
				/>

				<DuoMatch
					discord="caio#1234"
					visible={discordDuoSelected.length > 0}
					onClose={() => setDiscordDuoSelected("")}
				/>
			</SafeAreaView>
		</Background>
	);
}
