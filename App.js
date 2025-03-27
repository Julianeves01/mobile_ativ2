import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> 🎀 Bem vindos ao meu app mores! </Text>
      <Image source={require('./assets/img/babe.jpg')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 300,
    height: 300,
    borderRadius: 50,
    margin: 40,
  },

  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'pink',
    textAlign: 'center',
    margin: 40,
  }
});
