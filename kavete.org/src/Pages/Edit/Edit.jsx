import React from "react";
import "./Edit.css";
import { Page, Text, View, Document, StyleSheet, PDFViewer } from "@react-pdf/renderer";

const Edit = () => {
  const styles = StyleSheet.create({
    page1: {
      backgroundColor: "yellow",
    },
    
  });
  return (
    <div className="fadein">


<div className="hero">
            <h1>Your CV</h1>
            
        </div>
      <div className="app-box">
        <Document>
          <Page size="A4" style={styles.page1}>
            <View>
              <Text>Content for CV goes here..</Text>
            </View>
            </Page>
            <Page size="A4" style={styles.page1}>
            <View>
              <Text>Section #2</Text>
            </View>
          </Page>
        </Document>


        <PDFViewer style={{ width: "100%", height: "500px" }}>
          <Document />
        </PDFViewer>
      </div>
    </div>
  );
  
};

export default Edit;
