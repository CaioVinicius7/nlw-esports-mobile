import { StatusBar, View } from "react-native";

import { Background } from "@components/Background";

export default function App() {
	return (
		<Background>
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>
			<View></View>
		</Background>
	);
}
