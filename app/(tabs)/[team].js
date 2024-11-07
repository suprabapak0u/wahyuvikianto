import { Link, useLocalSearchParams } from "expo-router";
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

  const TeamDetail = () => {
    const { team } = useLocalSearchParams();
    const selectedTeam = DATA.filter(function (item) {
      return item.name === team;
    });
  
    console.log(selectedTeam);
  
    return (
      <SafeAreaView
        style={{
          backgroundColor: "blue",
          flex: 1,
          // flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <FilmCard item={selectedTeam[0]} />
      </SafeAreaView>
    );
  };
  
  export default TeamDetail;