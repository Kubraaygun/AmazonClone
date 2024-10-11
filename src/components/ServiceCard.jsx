import { Image, StyleSheet, Text, View } from "react-native";

const ServiceCard = ({ item }) => {
  return (
    <View style={styles.outherContainer}>
      <Text style={styles.recentSearch}>{item.title}</Text>
      <Image source={item.image} style={styles.serviceImg} />
    </View>
  );
};

export default ServiceCard;

const styles = StyleSheet.create({
  outherContainer: {
    backgroundColor: "#fff",
    marginLeft: 8,
    width: 140,
    padding: 5,
    borderRadius: 5,
  },
  recentSearch: {
    fontSize: 13,
    marginBottom: 8,
    color: "#00000",
  },
  serviceImg: {
    width: "100%",
    height: 130,
  },
});
