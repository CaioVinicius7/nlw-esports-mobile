import {
	TouchableOpacity,
	TouchableOpacityProps,
	ImageBackground,
	Text
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import { THEME } from "@theme/index";

import { styles } from "./styles";

export interface GameCardProps {
	id: string;
	title: string;
	_count: {
		ads: number;
	};
	banner: string;
}

interface Props extends TouchableOpacityProps {
	data: GameCardProps;
}

export function GameCard({ data, ...props }: Props) {
	return (
		<TouchableOpacity style={styles.container} {...props}>
			<ImageBackground style={styles.cover} source={{ uri: data.banner }}>
				<LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
					<Text style={styles.name}>{data.title}</Text>

					<Text style={styles.ads}>{data._count.ads} anúncios</Text>
				</LinearGradient>
			</ImageBackground>
		</TouchableOpacity>
	);
}
