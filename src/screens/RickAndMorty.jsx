import { useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import { Card, Paragraph, Title, ToggleButton, Text, Button } from "react-native-paper";
import styles from "../utils/styles";


export default function RickMorty() {
  const [data, setData] = useState([]);
  const [buscaBt, setBuscaBt] = useState({
    gender: "",
    status: ""
  })

  useEffect(() => {
    
    const apiUrl = `https://rickandmortyapi.com/api/character?${buscaBt.status}${buscaBt.gender}`;

    
    fetch(apiUrl)
      .then((data) => data.json())
      .then((dataJson) => setData(dataJson.results))
      .catch((error) => {
        console.log(error);
      })
  }, [buscaBt.status, buscaBt.gender]);

  const handleStatusFilter = (status) => {
    setBuscaBt({
      ...buscaBt,
      status: `&status=${status}`
    });
  };

  const handleGenderFilter = (gender) => {
    setBuscaBt({
      ...buscaBt,
      gender: `&gender=${gender}`
    });
  };

  return (
    <View style={styles.containerFullWidth}>
      <View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>Status do personagem: </Text>
          <Button
            onPress={() => handleStatusFilter("alive")}
          >Vivo</Button>
          <Button
            onPress={() => handleStatusFilter("dead")}
          >Morto</Button>
          <Button
            onPress={() => handleStatusFilter("unknown")}
          >Desconhecido</Button>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text>Gênero: </Text>
          <Button
            onPress={() => handleGenderFilter("male")}
          >Masculino</Button>
          <Button
            onPress={() => handleGenderFilter("female")}
          >Feminino</Button>
          <Button
            onPress={() => handleGenderFilter("genderless")}
          >Sem Gênero</Button>
          <Button
            onPress={() => handleGenderFilter("unknown")}

          >Desconhecido</Button>
        </View>
      </View>
      <ScrollView style={styles.widthFull}>
        <View style={{ ...styles.container, ...styles.widthFull }}>
          {data.map((item) => (
            <Card style={{ ...styles.card, marginBottom: 20 }} key={item.id}>
              <Card.Title>{item.name}</Card.Title>
              <Card.Content>
                <Title>{item.name}</Title>
                <Paragraph>Está vivo? {item.status}</Paragraph>
              </Card.Content>
              <Card.Cover source={{ uri: item.image }} />
            </Card>
          ))}
        </View>
      </ScrollView>
    </View>

  );
}