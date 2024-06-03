import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

type CategoryCardProps = {
    imgUrl: string;
    title: string;
    }
export default function CategoryCard({imgUrl, title}: CategoryCardProps) {
  return (
    <TouchableOpacity className="relative mr-2">
            <Image
            source={{
                uri: imgUrl,
            }}
            className="h-20 w-20 rounded"
            />
            <Text className="absolute bottom-1 text-white font-bold">{title}</Text>
    </TouchableOpacity>
  )
}