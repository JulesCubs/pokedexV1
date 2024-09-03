import { capitalize } from "lodash";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface StatProps {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
    url: string;
  };
}

interface StatsProps {
  stats: StatProps[];
}

export const Stats = ({ stats }: StatsProps) => {
  const barStyles = (stat: number): any => {
    const color = stat > 50 ? "green" : stat > 20 ? "yellow" : "red";
    return {
      backgroundColor: color,
      width: `${stat}%`,
    };
  };

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {stats.map((stat: StatProps) => (
        <View key={stat.stat.name} style={styles.block}>
          <View style={styles.blockTitle}>
            <Text style={styles.statsName}>{capitalize(stat.stat.name)}</Text>
          </View>
          <View style={styles.blockInfo}>
            <Text style={styles.statsNumber}>{stat.base_stat}</Text>
            <View style={styles.bgBar}>
              <View style={[barStyles(stat.base_stat), styles.bar]} />
            </View>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 20,
    marginTop: 40,
    marginBottom: 80,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 5,
  },
  block: {
    flexDirection: "row",
    paddingVertical: 5,
  },
  blockTitle: {
    width: "30%",
    marginRight: 10,
  },
  statsName: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#333",
  },
  blockInfo: {
    width: "70%",
    flexDirection: "row",
    justifyContent: "center",
  },
  statsNumber: {
    width: "12%",
    fontSize: 12,
  },
  bgBar: {
    width: "88%",
    height: 5,
    backgroundColor: "#dddddd",
    borderRadius: 20,
    overflow: "hidden",
  },
  bar: {
    height: 5,
    borderRadius: 20,
  },
});
