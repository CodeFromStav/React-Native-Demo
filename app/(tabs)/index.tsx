import { StyleSheet, View } from "react-native";
// import { Link } from 'expo-router';
import { Image } from "expo-image";

const PlaceholderImage = require("../assets/images/placeholder.png");

export default function Index() {
  return (
    <View style = {styles.container}> 
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff"
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});