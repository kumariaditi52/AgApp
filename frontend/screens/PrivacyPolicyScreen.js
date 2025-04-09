import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const PrivacyPolicyScreen = ({ themeStyles, goBack }) => {
  return (
    <View style={[styles.container, {backgroundColor: themeStyles.backgroundColor}]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={[styles.title, {color: themeStyles.textColor}]}>Privacy Policy</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={[styles.section, {backgroundColor: themeStyles.cardColor}]}>
          <Text style={[styles.sectionTitle, {color: themeStyles.textColor}]}>Introduction</Text>
          <Text style={[styles.paragraph, {color: themeStyles.textColor}]}>
            Welcome to Farmers' Hub. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you about how we look after your personal data when you visit our 
            application and tell you about your privacy rights and how the law protects you.
          </Text>
        </View>
        
        <View style={[styles.section, {backgroundColor: themeStyles.cardColor}]}>
          <Text style={[styles.sectionTitle, {color: themeStyles.textColor}]}>Data We Collect</Text>
          <Text style={[styles.paragraph, {color: themeStyles.textColor}]}>
            We may collect, use, store and transfer different kinds of personal data about you which we have 
            grouped together as follows:
          </Text>
          <Text style={[styles.bulletPoint, {color: themeStyles.textColor}]}>• Identity Data: includes first name, last name, username</Text>
          <Text style={[styles.bulletPoint, {color: themeStyles.textColor}]}>• Contact Data: includes email address and telephone numbers</Text>
          <Text style={[styles.bulletPoint, {color: themeStyles.textColor}]}>• Technical Data: includes device information, location data</Text>
          <Text style={[styles.bulletPoint, {color: themeStyles.textColor}]}>• Usage Data: includes information about how you use our application</Text>
        </View>
        
        <View style={[styles.section, {backgroundColor: themeStyles.cardColor}]}>
          <Text style={[styles.sectionTitle, {color: themeStyles.textColor}]}>How We Use Your Data</Text>
          <Text style={[styles.paragraph, {color: themeStyles.textColor}]}>
            We will only use your personal data when the law allows us to. Most commonly, we will use your 
            personal data in the following circumstances:
          </Text>
          <Text style={[styles.bulletPoint, {color: themeStyles.textColor}]}>• To register you as a new customer</Text>
          <Text style={[styles.bulletPoint, {color: themeStyles.textColor}]}>• To process and deliver your orders</Text>
          <Text style={[styles.bulletPoint, {color: themeStyles.textColor}]}>• To manage our relationship with you</Text>
          <Text style={[styles.bulletPoint, {color: themeStyles.textColor}]}>• To improve our app, products/services, and customer relationships</Text>
        </View>
        
        <View style={[styles.section, {backgroundColor: themeStyles.cardColor}]}>
          <Text style={[styles.sectionTitle, {color: themeStyles.textColor}]}>Data Security</Text>
          <Text style={[styles.paragraph, {color: themeStyles.textColor}]}>
            We have put in place appropriate security measures to prevent your personal data from being 
            accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, 
            we limit access to your personal data to those employees, agents, contractors and other third 
            parties who have a business need to know.
          </Text>
        </View>
        
        <View style={[styles.section, {backgroundColor: themeStyles.cardColor}]}>
          <Text style={[styles.sectionTitle, {color: themeStyles.textColor}]}>Contact Us</Text>
          <Text style={[styles.paragraph, {color: themeStyles.textColor}]}>
            If you have any questions about this privacy policy or our privacy practices, please contact us at:
          </Text>
          <Text style={[styles.contactInfo, {color: themeStyles.textColor}]}>Email: privacy@farmershub.com</Text>
          <Text style={[styles.contactInfo, {color: themeStyles.textColor}]}>Phone: +1-234-567-8900</Text>
        </View>
        
        <View style={styles.footer}>
          <Text style={[styles.footerText, {color: themeStyles.textColor}]}>Last updated: June 2023</Text>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    marginRight: 15,
  },
  backButtonText: {
    fontSize: 16,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 10,
    color: '#333',
  },
  bulletPoint: {
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 10,
    marginBottom: 5,
    color: '#333',
  },
  contactInfo: {
    fontSize: 14,
    lineHeight: 20,
    marginLeft: 10,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  footer: {
    marginTop: 10,
    marginBottom: 30,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
});

export default PrivacyPolicyScreen;
