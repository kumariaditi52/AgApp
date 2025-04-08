// import React from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';

// const CartScreen = () => {
//   // Sample cart items - replace with your actual data
//   const cartItems = [
//     { id: '1', name: 'Fertilizer A', price: '₹500', quantity: 2 },
//     { id: '2', name: 'Seeds Pack', price: '₹200', quantity: 1 },
//   ];

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Your Cart</Text>
      
//       {cartItems.length > 0 ? (
//         <FlatList
//           data={cartItems}
//           keyExtractor={(item) => item.id}
//           renderItem={({ item }) => (
//             <View style={styles.cartItem}>
//               <Text style={styles.itemName}>{item.name}</Text>
//               <Text style={styles.itemDetails}>Qty: {item.quantity}</Text>
//               <Text style={styles.itemPrice}>{item.price}</Text>
//             </View>
//           )}
//         />
//       ) : (
//         <Text style={styles.emptyCart}>Your cart is empty</Text>
//       )}
      
//       {/* Add checkout button and total here */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f5f5f5',
//     padding: 15,
//   },
//   title: {
//     fontSize: 22,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     color: '#333',
//   },
//   cartItem: {
//     backgroundColor: 'white',
//     padding: 15,
//     borderRadius: 8,
//     marginBottom: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 1 },
//     shadowOpacity: 0.2,
//     shadowRadius: 2,
//     elevation: 2,
//   },
//   itemName: {
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   itemDetails: {
//     fontSize: 14,
//     color: '#666',
//     marginTop: 5,
//   },
//   itemPrice: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: '#4CAF50',
//     marginTop: 5,
//   },
//   emptyCart: {
//     fontSize: 16,
//     color: '#666',
//     textAlign: 'center',
//     marginTop: 50,
//   },
// });

// export default CartScreen;




import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const CartScreen = ({ cartItems, setCartItems }) => {
  // Calculate total price
  const totalPrice = cartItems ? cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0) : 0;
  
  // Function to remove item from cart
  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };
  
  // Function to update item quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(id);
      return;
    }
    
    const updatedCart = cartItems.map(item => 
      item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCart);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Cart</Text>
      
      {cartItems && cartItems.length > 0 ? (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <View style={styles.itemInfo}>
                  <Text style={styles.itemEmoji}>{item.emoji}</Text>
                  <View>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemPrice}>₹{item.price}</Text>
                  </View>
                </View>
                
                <View style={styles.quantityControl}>
                  <TouchableOpacity 
                    style={styles.quantityButton}
                    onPress={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    <Text style={styles.quantityButtonText}>-</Text>
                  </TouchableOpacity>
                  
                  <Text style={styles.quantity}>{item.quantity}</Text>
                  
                  <TouchableOpacity 
                    style={styles.quantityButton}
                    onPress={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    <Text style={styles.quantityButtonText}>+</Text>
                  </TouchableOpacity>
                </View>
                
                <TouchableOpacity 
                  style={styles.removeButton}
                  onPress={() => removeItem(item.id)}
                >
                  <Text style={styles.removeButtonText}>Remove</Text>
                </TouchableOpacity>
              </View>
            )}
          />
          
          <View style={styles.summaryContainer}>
            <View style={styles.summaryRow}>
              <Text style={styles.summaryText}>Subtotal:</Text>
              <Text style={styles.summaryValue}>₹{totalPrice}</Text>
            </View>
            
            <View style={styles.summaryRow}>
              <Text style={styles.summaryText}>Shipping:</Text>
              <Text style={styles.summaryValue}>₹50</Text>
            </View>
            
            <View style={styles.divider} />
            
            <View style={styles.summaryRow}>
              <Text style={styles.totalText}>Total:</Text>
              <Text style={styles.totalValue}>₹{totalPrice + 50}</Text>
            </View>
            
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutButtonText}>Proceed to Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartText}>Your cart is empty</Text>
          <Text style={styles.emptyCartSubtext}>Add items to get started</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 15,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  cartItem: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  itemInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  itemEmoji: {
    fontSize: 30,
    marginRight: 15,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginTop: 5,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  quantityButton: {
    backgroundColor: '#e0e0e0',
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  quantity: {
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 15,
    minWidth: 20,
    textAlign: 'center',
  },
  removeButton: {
    backgroundColor: '#ff6b6b',
    padding: 8,
    borderRadius: 4,
    alignSelf: 'flex-start',
  },
  removeButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  summaryContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  summaryText: {
    fontSize: 16,
    color: '#666',
  },
  summaryValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  divider: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 10,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  totalValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  checkoutButton: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 15,
  },
  checkoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  emptyCartText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  emptyCartSubtext: {
    fontSize: 16,
    color: '#666',
  }
});

export default CartScreen;

