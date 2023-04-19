import { useEffect, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { ScrollView } from "react-native-web";
import styles from "../utils/styles";

export default function FetchNews() {
  const [data, setData] = useState([]);
  const [nome] = useState("waaaaaa");
  function fetchNewsData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }
  useEffect(() => {
    fetchNewsData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.text}>Fetch {nome}</Text>
      {data.map(
        (item) => (
          <View key={item.id}>
            <Text style={{ fontWeight: "bold", color: "white" }}>{item.title}</Text>
            <Text style={{ color: "white" }}>{item.body}</Text>
          </View>
        
      ))}
    </View>
    </ScrollView>
    
  );
}
