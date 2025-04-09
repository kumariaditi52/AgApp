import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';

const SettingsScreen = ({ darkMode, setDarkMode, themeStyles, navigateTo }) => {
  const [notifications, setNotifications] = React.useState(true);

  return (
    <View style={[styles.container, {backgroundColor: themeStyles.backgroundColor}]}>
      <Text style={[styles.title, {color: themeStyles.textColor}]}>Settings</Text>
      
      <View style={[styles.settingItem, {backgroundColor: themeStyles.cardColor}]}>
        <Text style={[styles.settingLabel, {color: themeStyles.textColor}]}>Enable Notifications</Text>
        <Switch
          value={notifications}
          onValueChange={setNotifications}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={notifications ? "#4CAF50" : "#f4f3f4"}
        />
      </View>
      
      <View style={[styles.settingItem, {backgroundColor: themeStyles.cardColor}]}>
        <Text style={[styles.settingLabel, {color: themeStyles.textColor}]}>Dark Mode</Text>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={darkMode ? "#4CAF50" : "#f4f3f4"}
        />
      </View>
      
      <TouchableOpacity 
        style={[styles.button, {backgroundColor: themeStyles.cardColor}]}
        onPress={() => navigateTo('PrivacyPolicy')}
      >
        <Text style={[styles.buttonText, {color: themeStyles.textColor}]}>Privacy Policy</Text>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={[styles.button, {backgroundColor: themeStyles.cardColor}]}
        onPress={() => navigateTo('TermsOfService')}
      >
        <Text style={[styles.buttonText, {color: themeStyles.textColor}]}>Terms of Service</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[styles.button, styles.logoutButton]}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  settingLabel: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    alignItems: 'flex-start',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
  logoutButton: {
    backgroundColor: '#ff6b6b',
    alignItems: 'center',
    marginTop: 20,
  },
  logoutText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SettingsScreen;
