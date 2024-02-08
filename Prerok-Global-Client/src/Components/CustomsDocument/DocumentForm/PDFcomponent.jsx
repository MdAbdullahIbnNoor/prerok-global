// PDFComponent.js
import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

const PDFComponent = ({ data }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Customs Cost Analysis</Text>
        <Text>Shipping Fee: ${data.shippingFee.toFixed(2)}</Text>
        <Text>Discharge Cost (10%): ${data.dischargeCost.toFixed(2)}</Text>
        <Text>Storage VAT: ${data.originVAT.toFixed(2)}</Text>
        <Text>Port VAT: ${data.destinationVAT.toFixed(2)}</Text>
        <Text>Total Cost: ${data.totalCost.toFixed(2)}</Text>
      </View>
    </Page>
  </Document>
);

export default PDFComponent;
