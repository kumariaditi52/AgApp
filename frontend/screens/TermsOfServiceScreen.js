import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const TermsOfServiceScreen = ({ themeStyles, goBack }) => {
  return (
    <View style={[styles.container, {backgroundColor: themeStyles.backgroundColor}]}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={[styles.title, {color: themeStyles.textColor}]}>Terms of Service</Text>
      </View>
      
      <ScrollView style={styles.content}>
        <View style={[styles.section, {backgroundColor: themeStyles.cardColor}]}>
          <Text style={[styles.sectionTitle, {color: themeStyles.textColor}]}>1. Acceptance of Terms</Text>
          <Text style={[styles.paragraph, {color: themeStyles.textColor}]}>
            By accessing or using the Farmers' Hub application, you agree to be bound by these Terms of Service. 
            If you do not agree to all the terms and conditions, you may not access or use our services.
          </Text>
        </View>
        
        <View style={[styles.section, {backgroundColor: themeStyles.cardColor}]}>
          <Text style={[styles.sectionTitle, {color: themeStyles.textColor}]}>2. Description of Service</Text>
          <Text style={[styles.paragraph, {color: themeStyles.textColor}]}>
            Farmers' Hub provides a platform for farmers to buy agricultural products, connect with other farmers, 
            and access agricultural information. We reserve the right to modify, suspend, or discontinue the service 
            at any time without notice.
          </Text>
        </View>
        
        <View style={[styles.section, {backgroundColor: themeStyles.cardColor}]}>
          <Text style={[styles.sectionTitle, {color: themeStyles.textColor}]}>3. User Accounts</Text>
          <Text style={[styles.paragraph, {color: themeStyles.textColor}]}>
            To use certain features of our service, you may be required to create an account. You are responsible for:
          </Text>
          <Text style={[styles.bulletPoint, {color: themeStyles.textColor}]}>• Maintaining the confidentiality of your account information</Text>
          <Text style={[styles.bulletPoint, {color: themeStyles.textColor}]}>• All activities that occur under your account</Text>
          <Text style={[styles.bulletPoint, {color: themeStyles.textColor}]}>• Notifying us immediately of any unauthorized use</Text>
        </View>
        
        <View style={[styles.section, {backgroundColor: themeStyles.cardColor}]}>
          <Text style={[styles.sectionTitle, {color: themeStyles.textColor}]}>4. User Conduct</Text>
          <Text style={[styles.paragraph, {color: themeStyles.textColor}]}>
            You agree not to use our service to:
          </Text>
          <Text style={[styles.bulletPoint, {color: themeStyles.textColor}]}>• Violate any laws or regulations</Text>
          <Text style={[styles.bulletPoint, {color: themeStyles.textColor}]}>• Post unauthorized commercial communications</Text>
          <Text style={[styles.bulletPoint, {color: themeStyles.textColor}]}>• Engage in unlawful multi-level marketing</Text>
          <Text style={[styles.bulletPoint, {color: themeStyles.textColor}]}>• Submit malicious code or viruses</Text>
          <Text style={[styles.bulletPoint, {color: themeStyles.textColor}]}>• Collect users' information without their consent</Text>
        </View>
        
        <View style={[styles.section, {backgroundColor: themeStyles.cardColor}]}>
          <Text style={[styles.sectionTitle, {color: themeStyles.textColor}]}>5. Purchases and Payments</Text>
          <Text style={[styles.paragraph, {color: themeStyles.textColor}]}>
            If you make a purchase through our service, you agree to provide accurate and complete payment information. 
            You are responsible for all charges incurred under your account and any applicable taxes.
          </Text>
        </View>
        
        <View style={[styles.section, {backgroundColor: themeStyles.cardColor}]}>
          <Text style={[styles.sectionTitle, {color: themeStyles.textColor}]}>6. Limitation of Liability</Text>
          <Text style={[styles.paragraph, {color: themeStyles.textColor}]}>
            To the maximum extent permitted by law, Farmers' Hub shall not be liable for any indirect, incidental, 
            special, consequential, or punitive damages, or any loss of profits or revenues.
          </Text>
        </View>
        
        <View style={[styles.section, {backgroundColor: themeStyles.cardColor}]}>
          <Text style={[styles.sectionTitle, {color: themeStyles.textColor}]}>7. Changes to Terms</Text>
          <Text style={[styles.paragraph, {color: themeStyles.textColor}]}>
            We reserve the right to modify these Terms at any time. We will provide notice of significant changes 
            by posting the new Terms on the application. Your continued use of the service after such modifications 
            will constitute your acceptance of the updated Terms.
          </Text>
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

export default TermsOfServiceScreen;
