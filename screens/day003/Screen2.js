import React from "react";
import {
  View,
  Text,
  ScrollView,
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
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";
import FadeInView from "../../components/FadeIn2";

const Screen2 = ({ navigation }) => {
  const navigateToHome3 = () => {
    navigation.navigate("Home3");
  };
  return (
    <View
      style={{
        flex: 1,
        padding: 20,
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
        <TouchableOpacity onPress={() => navigateToHome3()}>
          <AntDesign name="arrowleft" size={24} color={COLORS.gray} />
        </TouchableOpacity>

        <Text
          style={{
            fontSize: SIZES.large,
            color: COLORS.gray,
            fontFamily: FONTS.bold,
            textAlign: "center",
          }}
        >
          iPhone 14Pro
        </Text>

        <Ionicons name="menu" size={24} color={COLORS.gray} />
      </View>
      <FadeInView>
        <Image
          style={{
            height: height / 2.5,
          }}
          resizeMode="contain"
          source={require("../../assets/images/iphone-14-multi.png")}
        />
      </FadeInView>
      <ScrollView style={{ zIndex: 9999, paddingTop: 20 }}>
        <View
          style={{
            flexDirection: "row",
            width: width,
            gap: 10,
            alignContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
            borderBottomColor: COLORS.gray,
            borderBottomWidth: 1,
          }}
        >
          <View>
            <Entypo name="network" size={24} color={COLORS.purple} />
          </View>
          <View>
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.large,
                fontFamily: FONTS.medium,
              }}
            >
              Technology
            </Text>
            <Text
              style={{
                color: COLORS.gray,
                fontSize: SIZES.medium,
                fontFamily: FONTS.medium,
              }}
            >
              GSM/ CDMA/ HSPA/ EVDO/ LTE/ 5G
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            gap: 10,
            alignContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
            borderBottomColor: COLORS.gray,
            borderBottomWidth: 1,
          }}
        >
          <View>
            <MaterialCommunityIcons
              name="rocket-launch"
              size={24}
              color={COLORS.purple}
            />
          </View>
          <View>
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.large,
                fontFamily: FONTS.medium,
              }}
            >
              Announced
            </Text>
            <Text
              style={{
                color: COLORS.gray,
                fontSize: SIZES.medium,
                fontFamily: FONTS.medium,
              }}
            >
              2022, September 07.
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            gap: 10,
            alignContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
            borderBottomColor: COLORS.gray,
            borderBottomWidth: 1,
          }}
        >
          <View>
            <Ionicons name="body" size={24} color={COLORS.purple} />
          </View>
          <View>
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.large,
                fontFamily: FONTS.medium,
              }}
            >
              Dimensions
            </Text>
            <Text
              style={{
                color: COLORS.gray,
                fontSize: SIZES.medium,
                fontFamily: FONTS.medium,
              }}
            >
              160.7 x 77.6 x 7.9 mm (6.33 x 3.06 x 0.31 in)
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            gap: 10,
            alignContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
            borderBottomColor: COLORS.gray,
            borderBottomWidth: 1,
          }}
        >
          <View>
            <MaterialIcons
              name="settings-display"
              size={24}
              color={COLORS.purple}
            />
          </View>
          <View>
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.large,
                fontFamily: FONTS.medium,
              }}
            >
              Display
            </Text>
            <Text
              style={{
                color: COLORS.gray,
                fontSize: SIZES.medium,
                fontFamily: FONTS.medium,
              }}
            >
              LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits
              (typ), 2000 nits (HBM)
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            gap: 10,
            alignContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
            borderBottomColor: COLORS.gray,
            borderBottomWidth: 1,
          }}
        >
          <View>
            <FontAwesome5 name="microsoft" size={24} color={COLORS.purple} />
          </View>
          <View>
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.large,
                fontFamily: FONTS.medium,
              }}
            >
              OS
            </Text>
            <Text
              style={{
                color: COLORS.gray,
                fontSize: SIZES.medium,
                fontFamily: FONTS.medium,
              }}
            >
              iOS 16, upgradable to iOS 16.3
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: width,
            gap: 10,
            alignContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
            borderBottomColor: COLORS.gray,
            borderBottomWidth: 1,
          }}
        >
          <View>
            <Entypo name="network" size={24} color={COLORS.purple} />
          </View>
          <View>
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.large,
                fontFamily: FONTS.medium,
              }}
            >
              Technology
            </Text>
            <Text
              style={{
                color: COLORS.gray,
                fontSize: SIZES.medium,
                fontFamily: FONTS.medium,
              }}
            >
              GSM/ CDMA/ HSPA/ EVDO/ LTE/ 5G
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            gap: 10,
            alignContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
            borderBottomColor: COLORS.gray,
            borderBottomWidth: 1,
          }}
        >
          <View>
            <MaterialCommunityIcons
              name="rocket-launch"
              size={24}
              color={COLORS.purple}
            />
          </View>
          <View>
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.large,
                fontFamily: FONTS.medium,
              }}
            >
              Announced
            </Text>
            <Text
              style={{
                color: COLORS.gray,
                fontSize: SIZES.medium,
                fontFamily: FONTS.medium,
              }}
            >
              2022, September 07.
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            gap: 10,
            alignContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
            borderBottomColor: COLORS.gray,
            borderBottomWidth: 1,
          }}
        >
          <View>
            <Ionicons name="body" size={24} color={COLORS.purple} />
          </View>
          <View>
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.large,
                fontFamily: FONTS.medium,
              }}
            >
              Dimensions
            </Text>
            <Text
              style={{
                color: COLORS.gray,
                fontSize: SIZES.medium,
                fontFamily: FONTS.medium,
              }}
            >
              160.7 x 77.6 x 7.9 mm (6.33 x 3.06 x 0.31 in)
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            gap: 10,
            alignContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
            borderBottomColor: COLORS.gray,
            borderBottomWidth: 1,
          }}
        >
          <View>
            <MaterialIcons
              name="settings-display"
              size={24}
              color={COLORS.purple}
            />
          </View>
          <View>
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.large,
                fontFamily: FONTS.medium,
              }}
            >
              Display
            </Text>
            <Text
              style={{
                color: COLORS.gray,
                fontSize: SIZES.medium,
                fontFamily: FONTS.medium,
              }}
            >
              LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits
              (typ), 2000 nits (HBM)
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            gap: 10,
            alignContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
            borderBottomColor: COLORS.gray,
            borderBottomWidth: 1,
          }}
        >
          <View>
            <FontAwesome5 name="microsoft" size={24} color={COLORS.purple} />
          </View>
          <View>
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.large,
                fontFamily: FONTS.medium,
              }}
            >
              OS
            </Text>
            <Text
              style={{
                color: COLORS.gray,
                fontSize: SIZES.medium,
                fontFamily: FONTS.medium,
              }}
            >
              iOS 16, upgradable to iOS 16.3
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: width,
            gap: 10,
            alignContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
            borderBottomColor: COLORS.gray,
            borderBottomWidth: 1,
          }}
        >
          <View>
            <Entypo name="network" size={24} color={COLORS.purple} />
          </View>
          <View>
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.large,
                fontFamily: FONTS.medium,
              }}
            >
              Technology
            </Text>
            <Text
              style={{
                color: COLORS.gray,
                fontSize: SIZES.medium,
                fontFamily: FONTS.medium,
              }}
            >
              GSM/ CDMA/ HSPA/ EVDO/ LTE/ 5G
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            gap: 10,
            alignContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
            borderBottomColor: COLORS.gray,
            borderBottomWidth: 1,
          }}
        >
          <View>
            <MaterialCommunityIcons
              name="rocket-launch"
              size={24}
              color={COLORS.purple}
            />
          </View>
          <View>
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.large,
                fontFamily: FONTS.medium,
              }}
            >
              Announced
            </Text>
            <Text
              style={{
                color: COLORS.gray,
                fontSize: SIZES.medium,
                fontFamily: FONTS.medium,
              }}
            >
              2022, September 07.
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            gap: 10,
            alignContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
            borderBottomColor: COLORS.gray,
            borderBottomWidth: 1,
          }}
        >
          <View>
            <Ionicons name="body" size={24} color={COLORS.purple} />
          </View>
          <View>
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.large,
                fontFamily: FONTS.medium,
              }}
            >
              Dimensions
            </Text>
            <Text
              style={{
                color: COLORS.gray,
                fontSize: SIZES.medium,
                fontFamily: FONTS.medium,
              }}
            >
              160.7 x 77.6 x 7.9 mm (6.33 x 3.06 x 0.31 in)
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            gap: 10,
            alignContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
            borderBottomColor: COLORS.gray,
            borderBottomWidth: 1,
          }}
        >
          <View>
            <MaterialIcons
              name="settings-display"
              size={24}
              color={COLORS.purple}
            />
          </View>
          <View>
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.large,
                fontFamily: FONTS.medium,
              }}
            >
              Display
            </Text>
            <Text
              style={{
                color: COLORS.gray,
                fontSize: SIZES.medium,
                fontFamily: FONTS.medium,
              }}
            >
              LTPO Super Retina XDR OLED, 120Hz, HDR10, Dolby Vision, 1000 nits
              (typ), 2000 nits (HBM)
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "100%",
            gap: 10,
            alignContent: "space-between",
            alignItems: "center",
            paddingVertical: 10,
            borderBottomColor: COLORS.gray,
            borderBottomWidth: 1,
          }}
        >
          <View>
            <FontAwesome5 name="microsoft" size={24} color={COLORS.purple} />
          </View>
          <View>
            <Text
              style={{
                color: COLORS.white,
                fontSize: SIZES.large,
                fontFamily: FONTS.medium,
              }}
            >
              OS
            </Text>
            <Text
              style={{
                color: COLORS.gray,
                fontSize: SIZES.medium,
                fontFamily: FONTS.medium,
              }}
            >
              iOS 16, upgradable to iOS 16.3
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Screen2;
