import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import HomeScreen from './screens/HomeScreen';

// Placeholder for other screens
const ProfileScreen = () => (
  <View style={styles.placeholderScreen}>
    <Text style={styles.placeholderText}>Profile Screen</Text>
  </View>
);

const CartScreen = () => (
  <View style={styles.placeholderScreen}>
    <Text style={styles.placeholderText}>Cart Screen</Text>
  </View>
);

const SettingsScreen = () => (
  <View style={styles.placeholderScreen}>
    <Text style={styles.placeholderText}>Settings Screen</Text>
  </View>
);

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');
  
  // Render the appropriate screen based on state
  const renderScreen = () => {
    switch(currentScreen) {
      case 'Home':
        return <HomeScreen />;
      case 'Profile':
        return <ProfileScreen />;
      case 'Cart':
        return <CartScreen />;
      case 'Settings':
        return <SettingsScreen />;
      default:
        return <HomeScreen />;
    }
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>AgricultureApp-Farmers</Text>
      </View>
      
      {renderScreen()}
      
      <View style={styles.navbar}>
        <TouchableOpacity 
          style={[styles.navItem, currentScreen === 'Home' ? styles.activeNavItem : null]} 
          onPress={() => setCurrentScreen('Home')}
        >
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navItem, currentScreen === 'Profile' ? styles.activeNavItem : null]} 
          onPress={() => setCurrentScreen('Profile')}
        >
          <Text style={styles.navIcon}>👤</Text>
          <Text style={styles.navText}>Profile</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navItem, currentScreen === 'Cart' ? styles.activeNavItem : null]} 
          onPress={() => setCurrentScreen('Cart')}
        >
          <Text style={styles.navIcon}>🛒</Text>
          <Text style={styles.navText}>Cart</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navItem, currentScreen === 'Settings' ? styles.activeNavItem : null]} 
          onPress={() => setCurrentScreen('Settings')}
        >
          <Text style={styles.navIcon}>⚙️</Text>
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 15,
    paddingTop: 40,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  navbar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    height: 60,
  },
  navItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeNavItem: {
    borderTopWidth: 2,
    borderTopColor: '#4CAF50',
    backgroundColor: '#f0f9f0',
  },
  navIcon: {
    fontSize: 20,
    marginBottom: 2,
  },
  navText: {
    fontSize: 12,
    color: '#333',
  },
  placeholderScreen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  placeholderText: {
    fontSize: 18,
    color: '#333',
  }
});

export default App;
