import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images')} style={styles.avatar} /> // colocar path foto aqui
      <Text style={styles.name}>Ailton Santos</Text>
      <Text style={styles.role}>Descrição breve aqui</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  avatar: { width: 140, height: 140, borderRadius: 70, marginBottom: 16 },
  name: { fontSize: 22, fontWeight: '700' },
  role: { color: '#555', marginTop: 6 },
});