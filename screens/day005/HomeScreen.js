import React from 'react';
import { View,Text, Pressable } from 'react-native';
import { COLORS, FONTS } from "../../constant";
import LottieView from 'lottie-react-native';


const HomeScreen = () => {
    const animation = React.useRef(null);

    const [index, setIndex] = React.useState(0);
    React.useEffect(() => {
        animation.current?.play();
    }, [index]);

    const anims = [
        {
            path: require('../../assets/icons/89032-victory-sign-baby-astronaut.json'),
            text: 'www.herbeysoft.com'
        },
        {
            path: require('../../assets/icons/99618-instagram.json'),
            text: `@herbeysoft`
        },
        {
            path: require('../../assets/icons/99282-twitter.json'),
            text: '@herbeysoft'
        }
        ,
        {
            path: require('../../assets/icons/98799-facebook.json'),
            text: 'Herbey Herdarm'
        }
        ,
        {
            path: require('../../assets/icons/98802-youtube.json'),
            text: 'Herbey Herdarm'
        },
        
    ]
    return(
        <View style={{ flex: 1, backgroundColor: COLORS.white, alignItems: 'center', justifyItems:"center",paddingVertical:70 }}>
         <Pressable style={{ flex: 1 }} onPress={() => {
                if (index == anims.length - 1) return setIndex(0);
                setIndex((prevState) => prevState + 1);
            }}>
                <View style={{ marginTop: 70, justifyContent:'center',alignItems:'center' }}>
                    <LottieView
                        autoPlay
                        ref={animation}
                        style={{
                            width: 300,
                            height: 300,
                            backgroundColor: COLORS.white,
                        }}
                        source={anims[index].path}
                    />
                </View>
                <Text style={{ fontSize: 25, fontFamily: FONTS.medium, color: COLORS.gray, textAlign: 'center' }}>{anims[index].text}</Text>
            </Pressable>
        </View>
    )
}

export default HomeScreen

