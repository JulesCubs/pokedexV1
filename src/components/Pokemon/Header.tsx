import React from "react";
import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import getColorByType from "../../utils/GetColorByType";
import { capitalize } from "lodash";

interface PokemonProps {
  name: string;
  image: string;
  order: number;
  type: string;
}

export const Header = ({ name, image, order, type }: PokemonProps) => {
  const color = getColorByType(type);

  const bgStyle = { backgroundColor: color, ...styles.bg };

  return (
    <View>
      <View style={[bgStyle, styles.bg]} />
      <SafeAreaView style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.name}>{capitalize(name)}</Text>
          <Text style={styles.order}>#{`${order}`.padStart(3, "0")}</Text>
        </View>
        <View style={styles.contentImg}>
          <Image source={{ uri: image }} style={styles.image} />
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    width: "100%",
    height: 400,
    position: "absolute",
    borderBottomLeftRadius: 300,
    borderBottomEndRadius: 300,
    transform: [{ scaleX: 2 }],
  },
  content: {
    marginHorizontal: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    margin: 30,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  order: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  contentImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    top: 20,
    margin: 20,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "contain",
  },
});
