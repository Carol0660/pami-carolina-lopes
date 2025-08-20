import Button from '@/components/Button';
import ImageViewer from '@/components/ImageViewer';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const PlaceholderImage = require('@/assets/images/background-image.png');

export default function Index() {
  return (
    <View style={styles.container}>
       <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
       <View style={styles.footerContainer}>
        <Button theme="primary" label="Choose a photo" />
        <Button label="Choose a photo" />
        <Button label="Use this photo" />
      </View>
      <Text style={styles.text}>Home screen</Text>
        <Link href="/about" style={styles.button}>
        Go to About screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a2635ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
  text: {
    color: '#b9c8e4ff',
  },
   button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
   footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  },
});
