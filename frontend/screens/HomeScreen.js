import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>Welcome to Farmers' Hub</Text>
          <View style={styles.fruitIconContainer}>
            <Text style={styles.fruitEmoji}>🍉</Text>
          </View>
          <Text style={styles.subText}>Your one-stop solution for agricultural needs</Text>
        </View>
        
        <View style={styles.categoriesSection}>
          <Text style={styles.sectionTitle}>Categories</Text>
          <View style={styles.categories}>
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.categoryEmoji}>🍒</Text>
              <Text style={styles.categoryText}>Fruits</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.categoryEmoji}>🥕</Text>
              <Text style={styles.categoryText}>Vegetables</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.categoryEmoji}>🌱</Text>
              <Text style={styles.categoryText}>Seeds</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.categoryItem}>
              <Text style={styles.categoryEmoji}>🧰</Text>
              <Text style={styles.categoryText}>Tools</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.featuredSection}>
          <Text style={styles.sectionTitle}>Featured Products</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.featuredScroll}>
            {[1, 2, 3, 4].map((item) => (
              <View key={item} style={styles.featuredItem}>
                <View style={styles.featuredImagePlaceholder}>
                  <Text style={styles.featuredEmoji}>🍊</Text>
                </View>
                <Text style={styles.featuredItemName}>Product {item}</Text>
                <Text style={styles.featuredItemPrice}>₹{item * 100}</Text>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
  },
  welcomeSection: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    elevation: 2,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  fruitIconContainer: {
    marginVertical: 15,
  },
  fruitEmoji: {
    fontSize: 80,
  },
  categoryEmoji: {
    fontSize: 40,
  },
  featuredEmoji: {
    fontSize: 40,
  },
  subText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  categoriesSection: {
    padding: 15,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  categoryItem: {
    width: '48%',
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  categoryText: {
    marginTop: 8,
    fontSize: 14,
    color: '#333',
  },
  featuredSection: {
    padding: 15,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    elevation: 2,
    marginBottom: 20,
  },
  featuredScroll: {
    flexDirection: 'row',
  },
  featuredItem: {
    width: 150,
    marginRight: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
  },
  featuredImagePlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  featuredItemName: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  featuredItemPrice: {
    fontSize: 14,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});

export default HomeScreen;
