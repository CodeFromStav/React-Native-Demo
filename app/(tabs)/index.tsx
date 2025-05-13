import { StyleSheet, View } from "react-native";
// import { Link } from 'expo-router';
import Button from '@/components/Button';
import ImageViewer from "@/components/ImageViewer";


const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    //top view is the parent container
    <View style = {styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style = {styles.footerContainer}>
        <Button theme = "primary" label = "Choose a photo" />
        <Button label = "Use this photo" />
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
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  }
});