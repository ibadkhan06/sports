import { View, Text, StyleSheet,FlatList  } from 'react-native'
import React from 'react'
import Item from './Item';

const CricketMatchFlatList = ({data}) => {
    if (!data || data.length === 0) {
        return <View style={styles.emptyContainer}><Text style={styles.emptyText}>No Matches Available</Text></View>;
    }

    return (
        <View style={styles.container}>
          <FlatList
            data={data}
            renderItem={({ item }) => <Item item={item} isCricket={true} />}
            keyExtractor={(item) => item.series_id.toString()}
            // horizontal={true} // Make the FlatList horizontal
            contentContainerStyle={styles.flatListContent}
            showsHorizontalScrollIndicator={false}
            initialNumToRender={10} // Render only 10 items initially
            maxToRenderPerBatch={10} // Render 10 items per batch while scrolling
            windowSize={5} // Pre-render a few items outside the visible area
            removeClippedSubviews={true} // Remove offscreen items from memory
          />
        </View>
      );
}


const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    marginHorizontal: 8,
    backgroundColor: '#f9f9f9', // Subtle light gray background
    borderRadius: 12, // Softer rounded corners
    padding: 16,
    shadowColor: '#000', // Elevation shadow
    shadowOffset: { width: 0, height: 4 }, // Deeper shadow offset
    shadowOpacity: 0.1, // Softer shadow
    shadowRadius: 6, // Slightly larger shadow blur
    elevation: 6, // More pronounced elevation for a modern look
    borderWidth: 1, // Subtle border
    borderColor: '#e0e0e0', // Light gray border color
  },
  flatListContent: {
    paddingBottom: 12, // Increased padding for better spacing
  },
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fefefe', // White background for empty state
    borderRadius: 16, // More rounded corners for empty state
    borderWidth: 1, // Subtle border
    borderColor: '#dcdcdc', // Light gray border color for empty container
  },
  emptyText: {
    fontSize: 16,
    color: '#00796b', // Muted teal for empty message text
    fontWeight: '600', // Semi-bold for better readability
    textAlign: 'center', // Center the text for better focus
  },
});




export default CricketMatchFlatList;