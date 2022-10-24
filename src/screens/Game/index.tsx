import { Background } from "@components/Background";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";

export function Game() {
	return (
		<Background>
			<SafeAreaView style={styles.container}></SafeAreaView>
		</Background>
	);
}
