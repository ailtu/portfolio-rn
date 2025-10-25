import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#1e90ff', headerShown: true }}>
      <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ color, size }) => <Ionicons name="home" color={color} size={size} /> }} />
      <Tabs.Screen name="sobre" options={{ title: 'Sobre', tabBarIcon: ({ color, size }) => <Ionicons name="information-circle" color={color} size={size} /> }} />
      <Tabs.Screen name="experiencia-academica" options={{ title: 'Acadêmica', tabBarIcon: ({ color, size }) => <Ionicons name="school" color={color} size={size} /> }} />
      <Tabs.Screen name="experiencia-profissional" options={{ title: 'Profissional', tabBarIcon: ({ color, size }) => <Ionicons name="briefcase" color={color} size={size} /> }} />
      <Tabs.Screen name="projetos" options={{ title: 'Projetos', tabBarIcon: ({ color, size }) => <Ionicons name="code" color={color} size={size} /> }} />
      <Tabs.Screen name="galeria" options={{ title: 'Galeria', tabBarIcon: ({ color, size }) => <Ionicons name="images" color={color} size={size} /> }} />
    </Tabs>
  );
}