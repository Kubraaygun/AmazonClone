import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ProductData } from "../data/ProductData";
import { FontAwesome } from "@expo/vector-icons";
import PrimeLogo from "../assets/prime-logo.png";

const ProductScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Results</Text>
        <Text style={styles.tagline}>
          Price and other details may vary based on product aside and colour
        </Text>
        {ProductData.map((item) => (
          <View key={item.id} style={styles.productSection}>
            <View style={styles.productImgSection}>
              <Image source={item.image} style={styles.productImg} />
            </View>

            <View style={styles.productDetailSection}>
              <Text style={styles.sponsored}>Sponsored</Text>
              <Text style={styles.productName}>{item.productName}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.rating}>{item.rating}</Text>
              <FontAwesome name="star" size={10} color={"#ffa41c"} />
              <Text style={styles.ratingCount}>{item.ratingCount}</Text>
            </View>

            <View style={styles.row}>
              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.crossout}>{item.crossOutText}</Text>
            </View>

            <Text style={styles.cashback}>
              {" "}
              Up to 5% cashback with Amazon Pay Credit card
            </Text>

            <Image source={PrimeLogo} style={styles.logo} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {},
  title: {},
  tagline: {},
  productSection: {},
  productImgSection: {},
  productImg: {},
  productDetailSection: {},
  sponsored: {},
  productName: {},
  row: {},
  crossout: {},
  price: {},
  logo: {},
  rating: {},
  ratingCount: {},
});
