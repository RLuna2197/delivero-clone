import React from 'react'
import { ScrollView } from 'react-native'
import CategoryCard from './CategoryCard'

export default function Categories() {
  return (
    <ScrollView
    contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
    }}
    horizontal
    showsHorizontalScrollIndicator={false}>
        {/*Categories Card*/}
        <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxTx-ry8FBqR7-T2eqfMJB6VyRP4KE6cMiw&s" title="Test"/>
        <CategoryCard imgUrl="https://www.creativefabrica.com/wp-content/uploads/2020/11/07/Burger-Fast-Food-Illustration-SVG-Vector-Graphics-6507025-2-580x387.jpg" title="Test"/>
        <CategoryCard imgUrl="https://img.freepik.com/free-vector/hand-drawn-pizza-cartoon-illustration_52683-127397.jpg" title="Test"/>
        <CategoryCard imgUrl="https://static.vecteezy.com/system/resources/previews/005/925/345/non_2x/cute-cartoon-ice-cream-with-outline-free-vector.jpg" title="Test"/>
        <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxTx-ry8FBqR7-T2eqfMJB6VyRP4KE6cMiw&s" title="Test"/>
        <CategoryCard imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjxTx-ry8FBqR7-T2eqfMJB6VyRP4KE6cMiw&s" title="Test"/>
    </ScrollView>
  )
}
