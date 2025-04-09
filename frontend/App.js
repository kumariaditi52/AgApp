

// import React, { useState } from 'react';
// import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
// import HomeScreen from './screens/HomeScreen';
// import ProfileScreen from './screens/ProfileScreen';
// import CartScreen from './screens/CartScreen';
// import SettingsScreen from './screens/SettingsScreen';

// const App = () => {
//   const [currentScreen, setCurrentScreen] = useState('Home');
//   // Add cart state to manage cart items
//   const [cartItems, setCartItems] = useState([]);
  
//   // Function to add item to cart
//   const addToCart = (product) => {
//     // Check if product already exists in cart
//     const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    
//     if (existingItemIndex !== -1) {
//       // If product exists, increase quantity
//       const updatedCart = [...cartItems];
//       updatedCart[existingItemIndex].quantity += 1;
//       setCartItems(updatedCart);
//     } else {
//       // If product doesn't exist, add it with quantity 1
//       setCartItems([...cartItems, { ...product, quantity: 1 }]);
//     }
//   };
  
//   // Render the appropriate screen based on state
//   const renderScreen = () => {
//     switch(currentScreen) {
//       case 'Home':
//         return <HomeScreen addToCart={addToCart} />;
//       case 'Profile':
//         return <ProfileScreen />;
//       case 'Cart':
//         return <CartScreen cartItems={cartItems} setCartItems={setCartItems} />;
//       case 'Settings':
//         return <SettingsScreen />;
//       default:
//         return <HomeScreen addToCart={addToCart} />;
//     }
//   };
  
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.headerText}>AgricultureApp-Farmers</Text>
//       </View>
      
//       {renderScreen()}
      
//       <View style={styles.navbar}>
//         <TouchableOpacity 
//           style={[styles.navItem, currentScreen === 'Home' ? styles.activeNavItem : null]} 
//           onPress={() => setCurrentScreen('Home')}
//         >
//           <Text style={styles.navIcon}>🏠</Text>
//           <Text style={styles.navText}>Home</Text>
//         </TouchableOpacity>
        
//         <TouchableOpacity 
//           style={[styles.navItem, currentScreen === 'Profile' ? styles.activeNavItem : null]} 
//           onPress={() => setCurrentScreen('Profile')}
//         >
//           <Text style={styles.navIcon}>👤</Text>
//           <Text style={styles.navText}>Profile</Text>
//         </TouchableOpacity>
        
//         <TouchableOpacity 
//           style={[styles.navItem, currentScreen === 'Cart' ? styles.activeNavItem : null]} 
//           onPress={() => setCurrentScreen('Cart')}
//         >
//           <Text style={styles.navIcon}>🛒</Text>
//           <Text style={styles.navText}>Cart</Text>
//           {cartItems.length > 0 && (
//             <View style={styles.badge}>
//               <Text style={styles.badgeText}>{cartItems.length}</Text>
//             </View>
//           )}
//         </TouchableOpacity>
        
//         <TouchableOpacity 
//           style={[styles.navItem, currentScreen === 'Settings' ? styles.activeNavItem : null]} 
//           onPress={() => setCurrentScreen('Settings')}
//         >
//           <Text style={styles.navIcon}>⚙️</Text>
//           <Text style={styles.navText}>Settings</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     backgroundColor: '#4CAF50',
//     padding: 15,
//     paddingTop: 40,
//     alignItems: 'center',
//   },
//   headerText: {
//     fontSize: 20,
//     fontWeight: 'bold',
//     color: 'white',
//   },
//   navbar: {
//     flexDirection: 'row',
//     backgroundColor: 'white',
//     borderTopWidth: 1,
//     borderTopColor: '#e0e0e0',
//     height: 60,
//   },
//   navItem: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'relative',
//   },
//   activeNavItem: {
//     borderTopWidth: 2,
//     borderTopColor: '#4CAF50',
//     backgroundColor: '#f0f9f0',
//   },
//   navIcon: {
//     fontSize: 20,
//     marginBottom: 2,
//   },
//   navText: {
//     fontSize: 12,
//     color: '#333',
//   },
//   badge: {
//     position: 'absolute',
//     right: 10,
//     top: 8,
//     backgroundColor: 'red',
//     borderRadius: 10,
//     width: 20,
//     height: 20,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   badgeText: {
//     color: 'white',
//     fontSize: 12,
//     fontWeight: 'bold',
//   }
// });

// export default App;








import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import CartScreen from './screens/CartScreen';
import SettingsScreen from './screens/SettingsScreen';
import PrivacyPolicyScreen from './screens/PrivacyPolicyScreen';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('Home');
  // Add cart state to manage cart items
  const [cartItems, setCartItems] = useState([]);
  // Add dark mode state
  const [darkMode, setDarkMode] = useState(false);
  // Add state for secondary screens
  const [secondaryScreen, setSecondaryScreen] = useState(null);
  
  // Function to add item to cart
  const addToCart = (product) => {
    // Check if product already exists in cart
    const existingItemIndex = cartItems.findIndex(item => item.id === product.id);
    
    if (existingItemIndex !== -1) {
      // If product exists, increase quantity
      const updatedCart = [...cartItems];
      updatedCart[existingItemIndex].quantity += 1;
      setCartItems(updatedCart);
    } else {
      // If product doesn't exist, add it with quantity 1
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };
  
  // Function to navigate to secondary screens
  const navigateTo = (screen) => {
    setSecondaryScreen(screen);
  };
  
  // Function to go back from secondary screens
  const goBack = () => {
    setSecondaryScreen(null);
  };
  
  // Get theme-based styles
  const themeStyles = {
    backgroundColor: darkMode ? '#121212' : '#f5f5f5',
    textColor: darkMode ? '#ffffff' : '#333333',
    cardColor: darkMode ? '#1e1e1e' : '#ffffff',
    headerColor: darkMode ? '#2c2c2c' : '#4CAF50',
  };
  
  // Render secondary screens
  if (secondaryScreen) {
    switch(secondaryScreen) {
      case 'PrivacyPolicy':
        return <PrivacyPolicyScreen themeStyles={themeStyles} goBack={goBack} />;
      default:
        return null;
    }
  }
  
  // Render the appropriate screen based on state
  const renderScreen = () => {
    switch(currentScreen) {
      case 'Home':
        return <HomeScreen addToCart={addToCart} themeStyles={themeStyles} />;
      case 'Profile':
        return <ProfileScreen themeStyles={themeStyles} />;
      case 'Cart':
        return <CartScreen cartItems={cartItems} setCartItems={setCartItems} themeStyles={themeStyles} />;
      case 'Settings':
        return <SettingsScreen 
                 darkMode={darkMode} 
                 setDarkMode={setDarkMode} 
                 themeStyles={themeStyles}
                 navigateTo={navigateTo}
               />;
      default:
        return <HomeScreen addToCart={addToCart} themeStyles={themeStyles} />;
    }
  };
  
  return (
    <View style={[styles.container, {backgroundColor: themeStyles.backgroundColor}]}>
      <View style={[styles.header, {backgroundColor: themeStyles.headerColor}]}>
        <Text style={styles.headerText}>AgricultureApp-Farmers</Text>
      </View>
      
      {renderScreen()}
      
      <View style={[styles.navbar, {backgroundColor: themeStyles.cardColor, borderTopColor: darkMode ? '#333' : '#e0e0e0'}]}>
        <TouchableOpacity 
          style={[styles.navItem, currentScreen === 'Home' ? 
            [styles.activeNavItem, {borderTopColor: themeStyles.headerColor, backgroundColor: darkMode ? '#2a2a2a' : '#f0f9f0'}] : null]} 
          onPress={() => setCurrentScreen('Home')}
        >
          <Text style={styles.navIcon}>🏠</Text>
          <Text style={[styles.navText, {color: themeStyles.textColor}]}>Home</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navItem, currentScreen === 'Profile' ? 
            [styles.activeNavItem, {borderTopColor: themeStyles.headerColor, backgroundColor: darkMode ? '#2a2a2a' : '#f0f9f0'}] : null]} 
          onPress={() => setCurrentScreen('Profile')}
        >
          <Text style={styles.navIcon}>👤</Text>
          <Text style={[styles.navText, {color: themeStyles.textColor}]}>Profile</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navItem, currentScreen === 'Cart' ? 
            [styles.activeNavItem, {borderTopColor: themeStyles.headerColor, backgroundColor: darkMode ? '#2a2a2a' : '#f0f9f0'}] : null]} 
          onPress={() => setCurrentScreen('Cart')}
        >
          <Text style={styles.navIcon}>🛒</Text>
          <Text style={[styles.navText, {color: themeStyles.textColor}]}>Cart</Text>
          {cartItems.length > 0 && (
            <View style={styles.badge}>
              <Text style={styles.badgeText}>{cartItems.length}</Text>
            </View>
          )}
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.navItem, currentScreen === 'Settings' ? 
            [styles.activeNavItem, {borderTopColor: themeStyles.headerColor, backgroundColor: darkMode ? '#2a2a2a' : '#f0f9f0'}] : null]} 
          onPress={() => setCurrentScreen('Settings')}
        >
          <Text style={styles.navIcon}>⚙️</Text>
          <Text style={[styles.navText, {color: themeStyles.textColor}]}>Settings</Text>
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
    position: 'relative',
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
  badge: {
    position: 'absolute',
    right: 10,
    top: 8,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: 'bold',
  }
});

export default App;
