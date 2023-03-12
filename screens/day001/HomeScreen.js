import React from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { COLORS, SIZES, assets, SHADOWS, FONTS } from "../../constant";
const { height } = Dimensions.get("window");
import FadeInView from '../../components/FadeIn2';

const HomeScreen = ({navigation}) => {

const navigateToSingUp = () => {
    navigation.navigate('SignUp')
}
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        backgroundColor: COLORS.purple,
        alignItems: "center",
        justifyContent:"center",
      }}
    >
      <FadeInView>
      <Image
          style={{
            height: height / 2.5
          }}
          resizeMode="contain"
          source={require("../../assets/images/fav.png")}
        />
        </FadeInView>
        <View
          style={{
            paddingHorizontal: 40,
            paddingTop: 40,
          }}
        >
          <Text
            style={{
              fontSize: SIZES.extraLarge,
              color: COLORS.white,
              fontFamily: FONTS.bold,
              textAlign: "center",
            }}
          >
            Welcome To HerbeySoft
          </Text>

          <Text
            style={{
              fontSize: SIZES.medium,
              color: COLORS.gray,
              fontFamily: FONTS.bold,
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Embracing Innovation and exploring the latest technology tools
          </Text>
        </View>
        <FadeInView>
        <View
          style={{
            paddingHorizontal: 20,
            paddingTop: 60,
            flexDirection: "row",
            gap:5,
          }}
        >
          <TouchableOpacity
            onPress={() => navigateToSingUp()}
            style={{
              backgroundColor: COLORS.orange,
              paddingVertical: 15,
              paddingHorizontal: 20,
              width: "48%",
              borderRadius: 10,
              shadowColor: COLORS.purple,
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
                color: COLORS.purple,
                fontSize: FONTS.large,
                textAlign: "center",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigateToSingUp()}
            style={{
                backgroundColor: COLORS.white,
                paddingVertical: 15,
                paddingHorizontal: 20,
                width: "48%",
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
                color: COLORS.purple,
                fontSize: SIZES.large,
                textAlign: "center",
              }}
            >
              Register
            </Text>
          </TouchableOpacity>
        </View>
        </FadeInView>
      
    </View>
  );
};

export default HomeScreen;
