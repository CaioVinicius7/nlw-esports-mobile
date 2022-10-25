import { useState } from "react";
import {
	Modal,
	ModalProps,
	Text,
	TouchableOpacity,
	View,
	Alert,
	ActivityIndicator
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { CheckCircle } from "phosphor-react-native";
import * as Clipboard from "expo-clipboard";

import { Heading } from "@components/Heading";

import { THEME } from "@theme/index";

import { styles } from "./styles";

interface DuoMatchProps extends ModalProps {
	discord: string;
	onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...props }: DuoMatchProps) {
	const [isCopping, setIsCopping] = useState(false);

	async function handleCopyDiscordToClipboard() {
		setIsCopping(true);

		await Clipboard.setStringAsync(discord);

		Alert.alert(
			"Discord Copiado!",
			"Usuário copiado para você colar no Discord."
		);

		setIsCopping(false);
	}

	return (
		<Modal animationType="fade" transparent statusBarTranslucent {...props}>
			<View style={styles.container}>
				<View style={styles.content}>
					<TouchableOpacity style={styles.closeIcon} onPress={onClose}>
						<MaterialIcons
							name="close"
							size={20}
							color={THEME.COLORS.CAPTION_500}
						/>
					</TouchableOpacity>

					<CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight="bold" />

					<Heading
						title="Let´s play!"
						subTitle="Agora é só começar a jogar!"
						style={{
							alignItems: "center",
							marginTop: 24
						}}
					/>

					<Text style={styles.label}> Adicione no Discord </Text>

					<TouchableOpacity
						style={styles.discordButton}
						onPress={handleCopyDiscordToClipboard}
						disabled={isCopping}
					>
						<Text style={styles.discord}>
							{isCopping ? (
								<ActivityIndicator color={THEME.COLORS.PRIMARY} />
							) : (
								discord
							)}
						</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
}
