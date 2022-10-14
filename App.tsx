import { StatusBar } from "react-native";
import {
	useFonts,
	Inter_400Regular,
	Inter_600SemiBold,
	Inter_700Bold,
	Inter_900Black
} from "@expo-google-fonts/inter";

import { Background } from "@components/Background";
import { Home } from "@screens/Home/Index";
import { Loading } from "@components/Loading";

export default function App() {
	const [fontsLoaded] = useFonts({
		Inter_400Regular,
		Inter_600SemiBold,
		Inter_700Bold,
		Inter_900Black
	});

	return (
		<Background>
			<StatusBar
				barStyle="light-content"
				backgroundColor="transparent"
				translucent
			/>

			{fontsLoaded ? <Home></Home> : <Loading />}
		</Background>
	);
}
