import React from "react";
import { 
  View, Text, TextInput, Image, ScrollView, FlatList, TouchableOpacity, StyleSheet 
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

const categories = [
  { id: "1", name: "Pizza", image: require("../../assets/pizza.jpg") },
  { id: "2", name: "Burgers", image: require("../../assets/burger.jpg") },
  { id: "3", name: "Steak", image: require("../../assets/steak.jpg") },
];

const popularItems = [
  { id: "1", name: "Food 1", price: "$1", image: require("../../assets/food1.jpg") },
  { id: "2", name: "Food 2", price: "$3", image: require("../../assets/food2.jpg") },
];

const recommendedItems = [
  { id: "1", name: "Special Dish", price: "$5", image: require("../../assets/food1.jpg") },
  { id: "2", name: "Chef's Choice", price: "$6", image: require("../../assets/food2.jpg") },
];

const ExplorerScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}

      {/* Search & Location */}
      <View style={styles.searchRow}>
        <TouchableOpacity style={styles.locationButton}>
          <Ionicons name="location-outline" size={22} color="black" />
        </TouchableOpacity>

        <View style={styles.searchContainer}>
          <TextInput placeholder="Search for meals or area" style={styles.searchInput} />
          <TouchableOpacity style={styles.searchButton}>
            <Ionicons name="search" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Top Categories */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Top Categories</Text>
        <TouchableOpacity>
          <MaterialIcons name="filter-list" size={24} color="orange" />
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.categoryContainer}>
            <Image source={item.image} style={styles.categoryImage} />
            <Text style={styles.categoryText}>{item.name}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.divider} />

      {/* Popular Items */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Popular Items</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={popularItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.popularItem}>
            <Image source={item.image} style={styles.popularImage} />
            <View style={styles.popularInfo}>
              <Text style={styles.popularName}>{item.name}</Text>
              <Text style={styles.popularPrice}>{item.price}</Text>
            </View>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.divider} />

      {/* Recommended Items */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recommended for You</Text>
        <TouchableOpacity>
          <Text style={styles.viewAll}>View all</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        horizontal
        data={recommendedItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.recommendItem}>
            <Image source={item.image} style={styles.recommendImage} />
            <Text style={styles.recommendName}>{item.name}</Text>
            <Text style={styles.recommendPrice}>{item.price}</Text>
          </View>
        )}
        showsHorizontalScrollIndicator={false}
      />

      <View style={styles.divider} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  locationButton: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 10,
    backgroundColor: "#f1f1f1",
    marginRight: 10,
  },
  locationText: {
    marginLeft: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  searchContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    backgroundColor: "#f1f1f1",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
  },
  searchButton: {
    padding: 8,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  viewAll: {
    color: "orange",
    fontWeight: "bold",
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 10,
    opacity: 0.5,
  },
  categoryContainer: {
    alignItems: "center",
    marginRight: 15,
  },
  categoryImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
  },
  popularItem: {
    flexDirection: "row",
    alignItems: "center",
    width: 220,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginRight: 15,
  },
  popularImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  popularInfo: {
    marginLeft: 10,
    flex: 1,
  },
  popularName: {
    fontSize: 16,
    fontWeight: "bold",
  },
  popularPrice: {
    fontSize: 14,
    color: "#888",
  },
  recommendItem: {
    alignItems: "center",
    marginRight: 15,
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  recommendImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
  },
  recommendName: {
    marginTop: 5,
    fontSize: 16,
    fontWeight: "bold",
  },
  recommendPrice: {
    fontSize: 14,
    color: "#888",
  },
});

export default ExplorerScreen;
