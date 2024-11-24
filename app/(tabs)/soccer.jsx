import { View, Text, Pressable,StyleSheet,Image,ScrollView } from 'react-native'
import React from 'react'
import { useRouter } from "expo-router";
const soccer = () => {
  const router = useRouter();
  const leagues = [
    {name: "Champions League", id:"CL", emblem:"https://crests.football-data.org/CL.png"},
    {name: "Premier League", id:"PL", emblem:"https://crests.football-data.org/PL.png"},
    {name: "Serie A", id:"SA", emblem:"https://crests.football-data.org/SA.png"},
    {name: "FIFA World Cup", id:"WC", emblem: "https://crests.football-data.org/qatar.png"},
    {name: "Ligue 1", id:"FL1", emblem: "https://crests.football-data.org/FL1.png"},
    {name: "Bundesliga", id:"BL1", emblem:"https://crests.football-data.org/BL1.png"}
  ]
  
  const handlePress = (id) => {
    router.push(`/(league)/${id}`)
  }
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {leagues.map((item) => (
          <Pressable
            key={item.id}
            onPress={() => handlePress(item.id)}
            style={({ pressed }) => [
              styles.tab,
              pressed && styles.pressed, // Styling for press state
            ]}
          >
            <View style={styles.tabContent}>
              {item.emblem && <Image source={{ uri: item.emblem }} style={styles.tabImage} />}
              <Text style={styles.tabText}>{item.name}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensures the container covers the full screen
    backgroundColor: '#2C2F33', // Darker gray background
    justifyContent: 'center', // Centers the content vertically
    alignItems: 'center', // Centers the content horizontally
    paddingHorizontal: 20, // Adds padding on the sides
  },
  scrollContainer: {
    width: '100%', // Ensures content spans the width of the screen
    paddingTop: 20, // Adds some padding on top
    paddingBottom: 20, // Adds padding at the bottom for spacing
  },
  tab: {
    backgroundColor: '#E0E0E0', // Light gray background
    marginVertical: 10, // Space between tabs vertically
    height: 100, // Fixed height
    width: 320, // Fixed width
    borderRadius: 15, // Rounded corners for a modern design
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 4, // Moderate shadow effect on Android
    shadowColor: '#000', // Shadow effect on iOS
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15, // Softer shadow
    shadowRadius: 5, // Softer shadow spread
  },
  tabContent: {
    flexDirection: 'row',
    alignItems: 'center', // Align text and image vertically
    justifyContent: 'space-between', // Distributes space between image and text
    width: '100%', // Ensures content spans across the fixed tab width
    paddingHorizontal: 15, // Adds padding inside the tab
  },
  tabImage: {
    width: 60, // Fixed size for images
    height: 60,
    borderRadius: 10, // Rounded edges for a clean look
    backgroundColor: '#D1C4E9', // Light purple background for image container
    resizeMode: 'cover', // Ensures the image covers the available space
  },
  tabText: {
    fontSize: 16, // Balanced font size
    fontWeight: '600', // Slightly lighter weight for modern look
    color: '#424242', // Dark gray text color for better readability
    textAlign: 'left', // Align text to the left for a natural flow
    flex: 1, // Ensures the text takes up remaining space
    marginLeft: 10, // Adds space between the image and the text
  },
  pressed: {
    backgroundColor: '#CFD8DC', // Subtle change on press
    borderRadius: 15,
  },
});



export default soccer