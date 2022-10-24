import { Image, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute, useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import { THEME } from "@theme/index";
import { Background } from "@components/Background";
import { Heading } from "@components/Heading";

import { styles } from "./styles";
import { GameParams } from "../../@types/navigation";

import logo from "../../assets/logo-nlw-esports.png";

export function Game() {
	const route = useRoute();
	const navigation = useNavigation();

	const game = route.params as GameParams;

	function handleGoBack() {
		navigation.goBack();
	}

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
			</SafeAreaView>
		</Background>
	);
}
