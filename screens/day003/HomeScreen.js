import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../../constant";
const { height, width } = Dimensions.get("window");
import {
  AntDesign,
  Entypo,
  EvilIcons,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import FadeInView from "../../components/FadeIn2";

const HomeScreen = ({ navigation }) => {
  const navigateToScreen2 = () => {
    navigation.navigate("Screen2");
  };
  return (
    <View
      style={{
        flex: 1,
        paddingTop: 20,
        paddingHorizontal: 20,
        backgroundColor: COLORS.black,
        alignItems: "center",
        width: width,
      }}
    >
      <View
        style={{
          width: "100%",
          height: "10%",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <AntDesign name="apple1" size={24} color={COLORS.gray} />

        <Ionicons name="menu" size={24} color={COLORS.gray} />
      </View>
      <Text
        style={{
          fontSize: SIZES.large,
          color: COLORS.white,
          fontFamily: FONTS.light,
          textAlign: "center",
          opacity: 0.8,
          padding: 10,
        }}
      >
        New
      </Text>
      <Text
        style={{
          fontSize: SIZES.extraLarge * 1.4,
          color: COLORS.white,
          fontFamily: FONTS.medium,
          textAlign: "center",
          padding: 10,
        }}
      >
        iPhone 14Pro
      </Text>
      <Text
        style={{
          fontSize: SIZES.extraLarge * 2,
          color: COLORS.purple,
          fontFamily: FONTS.regular,
          textAlign: "center",
          padding: 5,
        }}
      >
        Pro. Beyond.
      </Text>

      <Text
        style={{
          fontSize: SIZES.medium,
          color: COLORS.white,
          fontFamily: FONTS.regular,
          textAlign: "center",
          padding: 20,
          opacity: 0.8,
        }}
      >
        Check back later for availability
      </Text>
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 10,
          flexDirection: "row",
          gap: 5,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary2,
            paddingVertical: 15,
            paddingHorizontal: 10,
            width: "48%",
            borderRadius: 100,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.regular,
              color: COLORS.white,
              fontSize: 20,
              textAlign: "center",
            }}
          >
            Find a Store
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigateToScreen2()}
          style={{
            paddingVertical: 15,
            paddingHorizontal: 10,
            width: "48%",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              fontFamily: FONTS.bold,
              color: COLORS.primary2,
              fontSize: SIZES.large,
              textAlign: "center",
              fontSize: 20,
            }}
          >
            Learn More
            <AntDesign name="caretright" size={16} color={COLORS.primary2} />
          </Text>
        </TouchableOpacity>
      </View>
      <Image
        style={{
          height: height / 2.5,
          position: "absolute",
          bottom: 0,
        }}
        resizeMode="contain"
        source={require("../../assets/images/iphone-14-pro.png")}
      />
    </View>
  );
};

export default HomeScreen;
