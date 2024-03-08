import { StyleSheet } from "react-native";

import EditScreenInfo from "@/components/EditScreenInfo";
import { Text, View } from "@/components/Themed";
import { Image } from "expo-image";

export default function TabTwoScreen() {
    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require("@/assets/images/trophies.png")}
                contentFit="cover"
                transition={1000}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: "80%",
    },
    image: {
        width: 400,
        height: 400,
        backgroundColor: "#0553",
    },
});
