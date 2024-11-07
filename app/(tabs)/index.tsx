import { Link } from "expo-router";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FilmCard from "../../components/FilmCard";

const DATA = [
  {
    id: "1",
    name: "Start Up",
    logo: "https://i.pinimg.com/originals/29/56/7c/29567c2b19765f9ed10f1028dfa4cfc7.jpg",

  },
  {
    id: "2",
    name: "Catatan Si Boy",
    logo: "https://m.media-amazon.com/images/M/MV5BYzQwZWE5ODEtNTMwMC00MzcwLWJkMmQtMTZjOTdlNTRlY2Y2XkEyXkFqcGc@._V1_.jpg",
  },
  {
    id: "3",
    name: "Fast And The Furious",
    logo: "https://image.tmdb.org/t/p/original/bXN6rKZ3GRh7ao6H7xaSUvYPgpk.jpg",
  },
];

export default function HomeScreen() {
  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
        // flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FlatList
        data={DATA}
        renderItem={({ item }) => <FilmCard item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 200,
    width: 150,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});