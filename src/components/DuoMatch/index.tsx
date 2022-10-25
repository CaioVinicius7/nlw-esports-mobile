import { Modal, ModalProps, Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { CheckCircle } from "phosphor-react-native";

import { Heading } from "@components/Heading";

import { THEME } from "@theme/index";

import { styles } from "./styles";

interface DuoMatchProps extends ModalProps {
	discord: string;
	onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...props }: DuoMatchProps) {
	return (
		<Modal transparent statusBarTranslucent {...props}>
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

					<TouchableOpacity style={styles.discordButton}>
						<Text style={styles.discord}>{discord}</Text>
					</TouchableOpacity>
				</View>
			</View>
		</Modal>
	);
}
