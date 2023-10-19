import React from 'react'
import { Image, Text, View } from 'react-native'
import { gStyle } from '../../styles/styles'

const PostsScreen = () => {
  return (
    <View style={gStyle.sectionPosts}>
      <Image
        source={require('../../assets/img/avatar.png')}
        style={{ width: 60, height: 60, borderRadius: 15 }}
      />
      <View style={gStyle.userPostsData}>
        <Text style={gStyle.userPostsName}>Natali Romanova</Text>
        <Text style={gStyle.userPostsEmail}>email@example.com</Text>
      </View>
    </View>
  )
}

export default PostsScreen
