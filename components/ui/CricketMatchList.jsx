import { View, Text, StyleSheet, Pressable } from 'react-native';
import React, { useState } from 'react';
import CricketMatchFlatList from './CricketMatchFlatList';

const CricketMatchList = ({data}) => { 
  const [status, setStatus] = useState(
    data.map((item) => ({
      title: item.type || "Others",
      status: false,
    }))
  );

  const sectionData = data.map((item) => ({
    title: item.type || "Others", // Default to 'Others' if type is empty
    data: item.series,
  }));

  const handlePressOnType = (type) => {
    setStatus((prevStatus) => prevStatus.map(
      element => element.title === type ? {...element, status: !element.status} : element 
    ));
  };

  const isTypeActive = (title) => {
    const statusEntry = status.find((item) => item.title === title);
    return statusEntry ? statusEntry.status : false;
  };

  return (
    <View style={styles.container}>
      {sectionData.map((element) => (
        <View key={element.title}>
          {/* Title Text with Arrow - Interactive */}
          <View style={styles.titleContainer}>
            <Text style={[styles.text, isTypeActive(element.title) && styles.textActive]}>
              {element.title}
            </Text>
            <Pressable onPress={() => handlePressOnType(element.title)}>
              <Text style={styles.arrow}>
                {isTypeActive(element.title) ? '-' : '+'}
              </Text>
            </Pressable>
          </View>

          {/* Conditionally render the MatchFlatList based on section status */}
          {isTypeActive(element.title) && (
            <View style={styles.flatListContainer}>
              <CricketMatchFlatList data={element.data} />
            </View>
          )}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#F0F8FF", // Light blue background
    width: '100%',
    alignSelf: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    
    width: '100%',
    marginTop:16
  },
  text: {
    color: "#4A4A4A", // Dark gray
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: "#E8E8E8", // Light gray background
    borderWidth: 2,
    borderColor: "#D3D3D3", // Subtle gray
    textAlign: 'center',
    flex: 1,
    marginHorizontal: 5,
    elevation: 3,
  },
  textActive: {
    backgroundColor: "#4682B4", // Vibrant blue for active tab
    color: "#FFFFFF",
  },
  flatListContainer: {
    padding: 8,
    backgroundColor: "#000000", // Light gray for FlatList container
    borderRadius: 8,
    marginTop: 20,
  },
  arrow: {
    color: "#FF0000", // Red color for the arrow signs (+ and -)
    fontSize: 20,
    paddingLeft: 10, // Space between arrow and text
  },
});

export default CricketMatchList;
