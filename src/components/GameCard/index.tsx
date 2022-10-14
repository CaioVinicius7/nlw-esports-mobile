import {
	TouchableOpacity,
	TouchableOpacityProps,
	ImageBackground,
	ImageSourcePropType,
	Text
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { THEME } from "@theme/index";

import { styles } from "./styles";

export interface GameCard {
	id: string;
	name: string;
	ads: string;
	cover: ImageSourcePropType;
}

interface GameCardProps extends TouchableOpacityProps {
	data: GameCard;
}

export function GameCard({ data, ...props }: GameCardProps) {
	return (
		<TouchableOpacity style={styles.container} {...props}>
			<ImageBackground style={styles.cover} source={data.cover}>
				<LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
					<Text style={styles.name}>{data.name}</Text>

					<Text style={styles.ads}>{data.ads} anúncios</Text>
				</LinearGradient>
			</ImageBackground>
		</TouchableOpacity>
	);
}
