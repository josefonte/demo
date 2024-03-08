import { Button, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Text, View } from "@/components/Themed";
import React from "react";

export default function TabOneScreen() {
    const [reveal, setReveal] = React.useState(false);

    const onPress = () => {
        setReveal(!reveal);
    };

    return (
        <View style={styles.container}>
            {reveal ? (
                <Image
                    style={styles.image}
                    source="https://editorial.uefa.com/resources/024b-0e997b8ca36e-296992694e08-1000/moussa_marega_porto_.jpeg"
                    contentFit="cover"
                    transition={1000}
                />
            ) : null}
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <Text style={styles.title}>Who's the Goat?</Text>
            <Button title={reveal ? "Hide" : "Reveal"} onPress={onPress} />
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
    button: {
        marginVertical: 30,
        backgroundColor: "black",
    },
    image: {
        width: 300,
        height: 300,
        backgroundColor: "#0553",
    },
});
