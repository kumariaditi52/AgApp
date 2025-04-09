    import React, { useState, useEffect } from 'react';
    import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
    import { Card, Avatar, Button, Divider } from 'react-native-paper';
    import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

    const ProfileScreen = ({ navigation }) => {
      // Mock data - in a real app, you would fetch this from an API or context
      const [farmer, setFarmer] = useState({
        id: '1',
        name: 'Rajesh Kumar',
        phone: '+91 9876543210',
        email: 'rajesh.kumar@example.com',
        location: 'Haryana, India',
        farmSize: '5 Acres',
        crops: ['Wheat', 'Rice', 'Sugarcane'],
        experience: '15 years',
        profileImage: 'https://randomuser.me/api/portraits/men/32.jpg',
        rating: 4.8,
        totalOrders: 124,
        completedOrders: 120,
      });

      return (
        <ScrollView style={styles.scrollView}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Image 
                source={{ uri: farmer.profileImage }} 
                style={styles.profileImage} 
              />
              <Text style={styles.name}>{farmer.name}</Text>
              <View style={styles.locationContainer}>
                <Icon name="map-marker" size={16} color="#4CAF50" />
                <Text style={styles.location}>{farmer.location}</Text>
              </View>
              <View style={styles.ratingContainer}>
                <Icon name="star" size={16} color="#FFD700" />
                <Text style={styles.rating}>{farmer.rating} Rating</Text>
              </View>
            </View>

            <Card style={styles.card}>
              <Card.Title title="Contact Information" />
              <Card.Content>
                <View style={styles.infoRow}>
                  <Icon name="phone" size={20} color="#4CAF50" />
                  <Text style={styles.infoText}>{farmer.phone}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Icon name="email" size={20} color="#4CAF50" />
                  <Text style={styles.infoText}>{farmer.email}</Text>
                </View>
              </Card.Content>
            </Card>

            <Card style={styles.card}>
              <Card.Title title="Farm Details" />
              <Card.Content>
                <View style={styles.infoRow}>
                  <Icon name="ruler-square" size={20} color="#4CAF50" />
                  <Text style={styles.infoText}>Farm Size: {farmer.farmSize}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Icon name="sprout" size={20} color="#4CAF50" />
                  <Text style={styles.infoText}>Main Crops: {farmer.crops.join(', ')}</Text>
                </View>
                <View style={styles.infoRow}>
                  <Icon name="calendar-clock" size={20} color="#4CAF50" />
                  <Text style={styles.infoText}>Farming Experience: {farmer.experience}</Text>
                </View>
              </Card.Content>
            </Card>

            <Card style={styles.card}>
              <Card.Title title="Order Statistics" />
              <Card.Content>
                <View style={styles.statsContainer}>
                  <View style={styles.statItem}>
                    <Text style={styles.statNumber}>{farmer.totalOrders}</Text>
                    <Text style={styles.statLabel}>Total Orders</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Text style={styles.statNumber}>{farmer.completedOrders}</Text>
                    <Text style={styles.statLabel}>Completed</Text>
                  </View>
                  <View style={styles.statItem}>
                    <Text style={styles.statNumber}>{((farmer.completedOrders / farmer.totalOrders) * 100).toFixed(0)}%</Text>
                    <Text style={styles.statLabel}>Success Rate</Text>
                  </View>
                </View>
              </Card.Content>
            </Card>

            <View style={styles.buttonContainer}>
              <Button 
                mode="contained" 
                style={styles.editButton}
                onPress={() => navigation.navigate('EditProfile')}
              >
                Edit Profile
              </Button>
          
              <Button 
                mode="outlined" 
                style={styles.settingsButton}
                onPress={() => navigation.navigate('Settings')}
              >
                Settings
              </Button>
            </View>
          </View>
        </ScrollView>
      );
    };

    const styles = StyleSheet.create({
      scrollView: {
        flex: 1,
        backgroundColor: '#f5f5f5',
      },
      container: {
        flex: 1,
        padding: 16,
      },
      header: {
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        elevation: 2,
      },
      profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
      },
      name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
      },
      locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
      },
      location: {
        fontSize: 14,
        color: '#666',
        marginLeft: 5,
      },
      ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      rating: {
        fontSize: 14,
        color: '#666',
        marginLeft: 5,
      },
      card: {
        marginBottom: 16,
        elevation: 2,
      },
      infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
      },
      infoText: {
        fontSize: 16,
        color: '#333',
        marginLeft: 10,
      },
      statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 10,
      },
      statItem: {
        alignItems: 'center',
      },
      statNumber: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#4CAF50',
      },
      statLabel: {
        fontSize: 14,
        color: '#666',
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 30,
      },
      editButton: {
        flex: 1,
        marginRight: 8,
        backgroundColor: '#4CAF50',
      },
      settingsButton: {
        flex: 1,
        marginLeft: 8,
        borderColor: '#4CAF50',
      },
    });

    export default ProfileScreen;
