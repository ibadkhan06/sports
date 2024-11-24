import React from 'react';
import { View, Text, Image, FlatList, StyleSheet } from 'react-native';
import Item from './Item';

const FootballMatchList = ({ data }) => {

  return (
    <FlatList
      data={data} // Matches data array
      keyExtractor={(item) => item.id.toString()} // Unique key for each match
      renderItem={(item)=> <Item item={item} isFootball={true} />}
      style={styles.container}
      initialNumToRender={10} // Render only 10 items initially
      maxToRenderPerBatch={10} // Render 10 items per batch while scrolling
      windowSize={5} // Pre-render a few items outside the visible area
      removeClippedSubviews={true} // Remove offscreen items from memory
      contentContainerStyle={styles.flatListContent}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container covers the full screen
    paddingHorizontal: 15, // Adjusted padding for consistent spacing
    backgroundColor: "#1E1F26", // Dark background for the entire container
  },
  flatListContent: {
    paddingBottom: 20, // Space at the bottom of the list for better spacing
    paddingTop: 10, // Top padding for better spacing
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10, // Space between rows
    padding: 12, // Padding inside the row for better spacing
    backgroundColor: "#F5F5F5", // Light gray background for individual items
    borderRadius: 10, // Rounded corners for modern design
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 5, // Shadow for Android
  },
  cell: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    color: "#1E88E5", // Vibrant blue text color for better readability
  },
  teamContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  teamLogo: {
    width: 40, // Increased size for better visibility
    height: 40,
    marginHorizontal: 8, // Space between logos and text
    borderRadius: 8, // Rounded logos for a cleaner look
    resizeMode: 'contain', // Prevent distortion
  },
  teamName: {
    fontSize: 16, // Increased font size for better readability
    fontWeight: 'bold',
    color: "#5F4B8B", // Purple text for a consistent theme
  },
  scoreText: {
    fontSize: 18, // Slightly larger font for scores
    fontWeight: 'bold',
    textAlign: 'center',
    color: "#FF5722", // Bright orange for highlighting scores
  },
});

export default FootballMatchList;

