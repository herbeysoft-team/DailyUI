import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../../constant";
const { height, width } = Dimensions.get("window");
import { Feather } from "@expo/vector-icons";
import FadeInView from "../../components/FadeIn2";

const Pay = ({ navigation }) => {
  const navigateToHome = () => {
    navigation.navigate("Home2");
  };
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.white,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <FadeInView>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Feather name="check-circle" size={80} color={COLORS.primary} />
          <Text
            style={{
              fontSize: SIZES.extraLarge,
              color: COLORS.primary,
              fontFamily: FONTS.bold,
              textAlign: "center",
              padding: 10,
            }}
          >
            Success !
          </Text>
          <Text
            style={{
              fontSize: SIZES.medium,
              color: COLORS.gray,
              fontFamily: FONTS.medium,
              padding: 20,
              textAlign: "center",
            }}
          >
            Your payment has been successfully processed
          </Text>
          <TouchableOpacity
            onPress={() => navigateToHome()}
            style={{
              backgroundColor: COLORS.primary,
              paddingVertical: 15,
              paddingHorizontal: 20,
              width: "50%",
              borderRadius: 10,
              shadowColor: COLORS.white,
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.3,
              shadowRadius: 10,
            }}
          >
            <Text
              style={{
                fontFamily: FONTS.bold,
                color: COLORS.white,
                fontSize: SIZES.bold,
                textAlign: "center",
              }}
            >
              Done
            </Text>
          </TouchableOpacity>
        </View>
      </FadeInView>
    </View>
  );
};

export default Pay;
