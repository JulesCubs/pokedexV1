import { StyleSheet, Text, View } from "react-native";
import getColorByType from "../../utils/GetColorByType";
import { capitalize } from "lodash";

interface TypesProps {
  types: string[];
}

export const Type = ({ types }: TypesProps) => {
  return (
    <View style={styles.content}>
      {types.map((item) => (
        <View
          key={item}
          style={[
            styles.pill,
            {
              backgroundColor: getColorByType(item)?.toString(),
            },
          ]}
        >
          <Text style={styles.title}>{capitalize(item)}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pill: {
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 20,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "capitalize",
    color: "#fff",
  },
});
