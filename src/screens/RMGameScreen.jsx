import { useEffect, useState } from "react";
import { Image, View } from "react-native";
import { Button, Text } from "react-native-paper";
import styles from "../utils/styles";

export default function RMGameScreen() {
  const [personagem, setPersonagem] = useState(null);
  const [personagens, setPersonagens] = useState([]);
  const [totalPersonagens, setTotalPersonagens] = useState(1);
  var [TextoErro] = "";

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((json) => {
        setTotalPersonagens(json.info.count);
      });
  }, []);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/" + retornaIndiceAleatorio())
      .then((response) => response.json())
      .then((json) => {
        setPersonagem(json);
      });
  }, [totalPersonagens]);

  function buscaPersonagemAleatorio() {
    fetch(
      "https://rickandmortyapi.com/api/character/" + retornaIndiceAleatorio()
    )
      .then((response) => response.json())
      .then((json) => {
        setPersonagem(json);
      });
  }

  async function handlePersonagemVivoOuMorto(resposta) {
    const isAlive = personagem.status === "Alive";
    if (resposta === isAlive) {
      alert("Você acertou!")
      buscaPersonagemAleatorio();
    } else {
      alert("Você errou!");
    }
  }

  function retornaIndiceAleatorio() {
    return Math.floor(Math.random() * totalPersonagens);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Rick and Morty Game</Text>
      <Text style={styles.text}>Você sabe se o personagem está vivo?</Text>
      {personagem && (
        <View>
          <Image
            source={{ uri: personagem.image }}
            
            style={{width: 200, height: 200,}}
          />
          <Text style={styles.text}>
            O/a personagem {personagem.name} está vivo/a/e?
          </Text>
          <View style={styles.container}>
            <Button
              style={styles.button}
              mode="contained"
              onPress={() => handlePersonagemVivoOuMorto(true)}
            >
              SIM
            </Button>
            <Button
              style={styles.button}
              mode="contained"
              onPress={() => handlePersonagemVivoOuMorto(false)}
            >
              NÃO
            </Button>
            <Button onPress={buscaPersonagemAleatorio} style={styles.button}>
              Buscar Personagem
            </Button>
          </View>
        </View>
      )}
    </View>
  );
}
