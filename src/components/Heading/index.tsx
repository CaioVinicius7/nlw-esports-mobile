import { View, Text, ViewProps } from "react-native";

import { styles } from "./styles";

interface HeadingProps extends ViewProps {
	title: string;
	subTitle: string;
}

export function Heading({ title, subTitle, ...props }: HeadingProps) {
	return (
		<View style={styles.container} {...props}>
			<Text style={styles.title}>{title}</Text>
			<Text style={styles.subTitle}>{subTitle}</Text>
		</View>
	);
}
