import { Colors } from '@/constants/theme';
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function App() {
  const handlePress = () => {
    alert('Botão pressionado!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá meu professor favorito ❤️ </Text>
      <Button title="Clique aqui" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffe5f7',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    

  },

});
