import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet } from "react-native";
import { Image } from "expo-image";
import { Text, View } from "@/components/Themed";

export default function ModalScreen() {
    return (
        <View style={styles.container}>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <Text style={styles.title}>AUTHORS</Text>
            <View
                style={styles.separator}
                lightColor="#eee"
                darkColor="rgba(255,255,255,0.1)"
            />
            <View style={styles.authorsContainer}>
                <View style={styles.authorImage}>
                    <Text style={styles.authorsText}>José Fonte</Text>
                    <Image
                        style={styles.image}
                        source="https://avatars.githubusercontent.com/u/73178551?s=400&u=f731b4eb21666e95ace44de763b615ea33660abd&v=4"
                        placeholder={blurhash}
                        contentFit="cover"
                        transition={1000}
                    />
                </View>
                <View style={styles.authorImage}>
                    <Text style={styles.authorsText}>José Miguel Barbosa</Text>
                    <Image
                        style={styles.image}
                        source="https://picsum.photos/seed/696/3000/2000"
                        placeholder={blurhash}
                        contentFit="cover"
                        transition={1000}
                    />
                </View>
            </View>

            <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
        </View>
    );
}

const blurhash =
    "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    authorsContainer: {
        flex: 1,
        flexDirection: "column",
        gap: 10,
        alignItems: "center",
        justifyContent: "flex-start",
    },
    authorsText: {
        fontSize: 15,
        fontWeight: "500",
    },
    authorImage: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
        width: 200,
        height: 200,
        backgroundColor: "#0553",
    },
});
