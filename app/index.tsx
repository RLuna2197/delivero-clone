import Categories from "@/components/Categories";
import { useNavigation } from "expo-router";
import { useLayoutEffect } from "react";
import { Image, SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { AdjustmentsVerticalIcon, ChevronDownIcon, UserIcon, MagnifyingGlassIcon } from "react-native-heroicons/solid";

export default function Index() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }
  , []);

  return (
    <SafeAreaView className="bg-white pt-5">
      {/*Hearder*/}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image 
        source={{
          uri: 'https://links.papareact.com/wru',
        }}
        className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />
      <View className="flex-1">
        <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
        <Text className="font-bold text-xl">Current Location
        <ChevronDownIcon size={20} color="#00CCBB"/>
        </Text>
      </View>

      <UserIcon size={35} color="#00CCBB"/>
      </View>
      {/*Hearder*/}

      {/*Search Bar*/}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
      <View className="flex-row flex-1 bg-gray-200 p-3 space-x-2 rounded-full">
        <MagnifyingGlassIcon size={20} color="gray"/>
        <TextInput
          placeholder="Restaurants and cuisines"
          keyboardType="default"
        />
      </View>
      <AdjustmentsVerticalIcon color={"#00CCBB"} size={30} className="mx-4"/>
      </View>
      {/*Search Bar*/}

      {/*Body*/}
      <ScrollView className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}>
        {/*Categories*/}
        <View className="flex-row space-x-2 mx-4">
          
          <Categories/>
        </View>
        {/*Categories*/}


      </ScrollView>
      {/*Body*/}

    </SafeAreaView>
  );
}
