    import React, { useState, useEffect, useRef } from 'react';
    import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput, Animated, Dimensions } from 'react-native';




    const allProducts = [
      { id: '1', name: 'Organic Apples', price: 150, emojiName: 'apple', category: 'fruits' }, // 🍎
      { id: '2', name: 'Fresh Oranges', price: 120, emojiName: 'tangerine', category: 'fruits' }, // 🍊
      { id: '3', name: 'Strawberries', price: 200, emojiName: 'strawberry', category: 'fruits' }, // 🍓
      { id: '4', name: 'Bananas', price: 80, emojiName: 'banana', category: 'fruits' }, // 🍌
      { id: '5', name: 'Tomatoes', price: 60, emojiName: 'tomato', category: 'vegetables' }, // 🍅
      { id: '6', name: 'Carrots', price: 40, emojiName: 'carrot', category: 'vegetables' }, // 🥕
      { id: '7', name: 'Wheat Seeds', price: 250, emojiName: 'ear_of_rice', category: 'seeds' }, // 🌾
      { id: '8', name: 'Sunflower Seeds', price: 180, emojiName: 'sunflower', category: 'seeds' }, // 🌻
      { id: '9', name: 'Garden Shovel', price: 350, emojiName: 'toolbox', category: 'tools' }, // 🧰
      { id: '10', name: 'Watering Can', price: 280, emojiName: 'water_pistol', category: 'tools' }, // 💧
    ];

    // Fruit icons for carousel
    const fruitIcons = [
      { id: 1, emoji: '🍉', name: 'Watermelon' },
      { id: 2, emoji: '🍇', name: 'Grapes' },
      { id: 3, emoji: '🍍', name: 'Pineapple' },
      { id: 4, emoji: '🥭', name: 'Mango' },
      { id: 5, emoji: '🍑', name: 'Peach' },
    ];

    const { width } = Dimensions.get('window');
    const ITEM_WIDTH = width - 80; // Width of each carousel item

    const HomeScreen = ({ addToCart }) => {
      const [searchQuery, setSearchQuery] = useState('');
      const [selectedCategory, setSelectedCategory] = useState('all');
      const [currentFruitIndex, setCurrentFruitIndex] = useState(0);
      const scrollX = useRef(new Animated.Value(0)).current;
      const fruitScrollRef = useRef(null);

      // Filter products based on search query and selected category
      const filteredProducts = allProducts.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
        return matchesSearch && matchesCategory;
      });

      // Auto scroll the fruit carousel every 5 minutes (300000 ms)
      useEffect(() => {
        const interval = setInterval(() => {
          const nextIndex = (currentFruitIndex + 1) % fruitIcons.length;
          setCurrentFruitIndex(nextIndex);
      
          if (fruitScrollRef.current) {
            fruitScrollRef.current.scrollTo({
              x: nextIndex * ITEM_WIDTH,
              animated: true
            });
          }
        }, 300000); // 5 minutes

        return () => clearInterval(interval);
      }, [currentFruitIndex]);

      // Handle scroll events to update current fruit index
      const handleScroll = Animated.event(
        [{ nativeEvent: { contentOffset: { x: scrollX } } }],
        { useNativeDriver: false }
      );

      // Update current fruit index when scrolling ends
      const handleScrollEnd = (event) => {
        const position = event.nativeEvent.contentOffset.x;
        const index = Math.round(position / ITEM_WIDTH);
        setCurrentFruitIndex(index);
      };

      return (
        <View style={styles.container}>
          {/* Search Bar - Moved to the top with improved styling */}
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search products..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor="#888"
            />
          </View>

          <ScrollView style={styles.content}>
            <View style={styles.welcomeSection}>
              <Text style={styles.welcomeText}>Welcome to Farmers' Hub</Text>
          
              {/* Fruit Icon Carousel */}
              <View style={styles.carouselContainer}>
                <ScrollView
                  ref={fruitScrollRef}
                  horizontal
                  pagingEnabled
                  showsHorizontalScrollIndicator={false}
                  onScroll={handleScroll}
                  onMomentumScrollEnd={handleScrollEnd}
                  scrollEventThrottle={16}
                  contentContainerStyle={styles.carouselContent}
                >
                  {fruitIcons.map((fruit, index) => (
                    <View key={fruit.id} style={styles.fruitSlide}>
                      <Text style={styles.fruitEmoji}>{fruit.emoji}</Text>
                      <Text style={styles.fruitName}>{fruit.name}</Text>
                    </View>
                  ))}
                </ScrollView>
            
                {/* Carousel Indicators */}
                <View style={styles.indicatorContainer}>
                  {fruitIcons.map((_, index) => (
                    <View
                      key={index}
                      style={[
                        styles.indicator,
                        currentFruitIndex === index && styles.activeIndicator
                      ]}
                    />
                  ))}
                </View>
              </View>
          
              <Text style={styles.subText}>Your one-stop solution for agricultural needs</Text>
            </View>
        
            <View style={styles.categoriesSection}>
              <Text style={styles.sectionTitle}>Categories</Text>
              <View style={styles.categoryFilters}>
                <TouchableOpacity 
                  style={[
                    styles.categoryFilter, 
                    selectedCategory === 'all' && styles.selectedCategoryFilter
                  ]}
                  onPress={() => setSelectedCategory('all')}
                >
                  <Text style={[
                    styles.categoryFilterText,
                    selectedCategory === 'all' && styles.selectedCategoryFilterText
                  ]}>All</Text>
                </TouchableOpacity>
            
                <TouchableOpacity 
                  style={[
                    styles.categoryFilter, 
                    selectedCategory === 'fruits' && styles.selectedCategoryFilter
                  ]}
                  onPress={() => setSelectedCategory('fruits')}
                >
                  <Text style={[
                    styles.categoryFilterText,
                    selectedCategory === 'fruits' && styles.selectedCategoryFilterText
                  ]}>Fruits</Text>
                </TouchableOpacity>
            
                <TouchableOpacity 
                  style={[
                    styles.categoryFilter, 
                    selectedCategory === 'vegetables' && styles.selectedCategoryFilter
                  ]}
                  onPress={() => setSelectedCategory('vegetables')}
                >
                  <Text style={[
                    styles.categoryFilterText,
                    selectedCategory === 'vegetables' && styles.selectedCategoryFilterText
                  ]}>Vegetables</Text>
                </TouchableOpacity>
            
                <TouchableOpacity 
                  style={[
                    styles.categoryFilter, 
                    selectedCategory === 'seeds' && styles.selectedCategoryFilter
                  ]}
                  onPress={() => setSelectedCategory('seeds')}
                >
                  <Text style={[
                    styles.categoryFilterText,
                    selectedCategory === 'seeds' && styles.selectedCategoryFilterText
                  ]}>Seeds</Text>
                </TouchableOpacity>
            
                <TouchableOpacity 
                  style={[
                    styles.categoryFilter, 
                    selectedCategory === 'tools' && styles.selectedCategoryFilter
                  ]}
                  onPress={() => setSelectedCategory('tools')}
                >
                  <Text style={[
                    styles.categoryFilterText,
                    selectedCategory === 'tools' && styles.selectedCategoryFilterText
                  ]}>Tools</Text>
                </TouchableOpacity>
              </View>
          
              <View style={styles.categories}>
                <TouchableOpacity 
                  style={styles.categoryItem}
                  onPress={() => setSelectedCategory('fruits')}
                >
                  <Text style={styles.categoryEmoji}>🍒</Text>
                  <Text style={styles.categoryText}>Fruits</Text>
                </TouchableOpacity>
            
                <TouchableOpacity 
                  style={styles.categoryItem}
                  onPress={() => setSelectedCategory('vegetables')}
                >
                  <Text style={styles.categoryEmoji}>🥕</Text>
                  <Text style={styles.categoryText}>Vegetables</Text>
                </TouchableOpacity>
            
                <TouchableOpacity 
                  style={styles.categoryItem}
                  onPress={() => setSelectedCategory('seeds')}
                >
                  <Text style={styles.categoryEmoji}>🌱</Text>
                  <Text style={styles.categoryText}>Seeds</Text>
                </TouchableOpacity>
            
                <TouchableOpacity 
                  style={styles.categoryItem}
                  onPress={() => setSelectedCategory('tools')}
                >
                  <Text style={styles.categoryEmoji}>🧰</Text>
                  <Text style={styles.categoryText}>Tools</Text>
                </TouchableOpacity>
              </View>
            </View>
        
            <View style={styles.featuredSection}>
              <Text style={styles.sectionTitle}>
                {selectedCategory === 'all' ? 'All Products' : `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}`}
              </Text>
          
              {filteredProducts.length > 0 ? (
                <View style={styles.productsGrid}>
                  {filteredProducts.map((product) => (
                    <View key={product.id} style={styles.productItem}>
                      <View style={styles.productImagePlaceholder}>
                        <Text style={styles.productEmoji}>{product.emoji}</Text>
                      </View>
                      <Text style={styles.productItemName}>{product.name}</Text>
                      <Text style={styles.productItemPrice}>₹{product.price}</Text>
                      <TouchableOpacity 
                        style={styles.addToCartButton}
                        onPress={() => addToCart(product)}
                      >
                        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
                      </TouchableOpacity>
                    </View>
                  ))}
                </View>
              ) : (
                <Text style={styles.noProductsText}>No products found</Text>
              )}
            </View>
        
            <View style={styles.featuredSection}>
              <Text style={styles.sectionTitle}>Featured Products</Text>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.featuredScroll}>
                {allProducts.slice(0, 5).map((product) => (
                  <View key={product.id} style={styles.featuredItem}>
                    <View style={styles.featuredImagePlaceholder}>
                      <Text style={styles.featuredEmoji}>{product.emoji}</Text>
                    </View>
                    <Text style={styles.featuredItemName}>{product.name}</Text>
                    <Text style={styles.featuredItemPrice}>₹{product.price}</Text>
                    <TouchableOpacity 
                      style={styles.addToCartButton}
                      onPress={() => addToCart(product)}
                    >
                      <Text style={styles.addToCartButtonText}>Add to Cart</Text>
                    </TouchableOpacity>
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
      searchContainer: {
        padding: 10,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        elevation: 2,
      },
      searchInput: {
        backgroundColor: '#f5f5f5',
        padding: 12,
        borderRadius: 8,
        fontSize: 16,
        borderWidth: 1,
        borderColor: '#e0e0e0',
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
      carouselContainer: {
        height: 150,
        width: '100%',
        marginVertical: 15,
      },
      carouselContent: {
        alignItems: 'center',
      },
      fruitSlide: {
        width: ITEM_WIDTH,
        alignItems: 'center',
        justifyContent: 'center',
      },
      fruitEmoji: {
        fontSize: 90,
        textAlign: 'center',
      },
      fruitName: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
      },
      indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
      },
      indicator: {
        height: 8,
        width: 8,
        borderRadius: 4,
        backgroundColor: '#e0e0e0',
        marginHorizontal: 4,
      },
      activeIndicator: {
        backgroundColor: '#4CAF50',
        width: 16,
      },
      categoryEmoji: {
        fontSize: 50,
        textAlign: 'center',
      },
      featuredEmoji: {
        fontSize: 50,
        textAlign: 'center',
      },
      productEmoji: {
        fontSize: 50,
        textAlign: 'center',
      },
      subText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginTop: 10,
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
      categoryFilters: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: 15,
      },
      categoryFilter: {
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        backgroundColor: '#f0f0f0',
        marginRight: 8,
        marginBottom: 8,
      },
      selectedCategoryFilter: {
        backgroundColor: '#4CAF50',
      },
      categoryFilterText: {
        fontSize: 12,
        color: '#333',
      },
      selectedCategoryFilterText: {
        color: 'white',
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
        backgroundColor: '#f0f8e8',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
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
        marginVertical: 5,
      },
      productsGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
      },
      productItem: {
        width: '48%',
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        padding: 10,
        alignItems: 'center',
        marginBottom: 15,
      },
      productImagePlaceholder: {
        width: 100,
        height: 100,
        backgroundColor: '#f0f8e8',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
        borderWidth: 1,
        borderColor: '#e0e0e0',
      },
      productItemName: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
      },
      productItemPrice: {
        fontSize: 14,
        color: '#4CAF50',
        fontWeight: 'bold',
        marginVertical: 5,
      },
      addToCartButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 4,
        marginTop: 5,
        width: '100%',
        alignItems: 'center',
      },
      addToCartButtonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 12,
      },
      noProductsText: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 10,
      }
    });

    export default HomeScreen;

