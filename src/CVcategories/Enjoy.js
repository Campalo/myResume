import React from 'react';
import {View, Text, Image, StyleSheet} from '@react-pdf/renderer';

const Enjoy = () => {
  return (
    <View style={stylesEnjoy.container}>
      <View style={stylesEnjoy.section}>
        <Image
          style={stylesEnjoy.image}
          src='https://i.imgur.com/m6bKPT7.png'
        />
        <Text style={stylesEnjoy.h1}>Career goals</Text>
      </View>

      <View style={stylesEnjoy.section}>
        <Image
          style={stylesEnjoy.imageSM}
          // src='https://img.icons8.com/wired/96/000000/witch-.png'
          src='https://img.icons8.com/dusk/96/000000/witch.png'
        />
        <Text style={stylesEnjoy.p}>
          Mastering components creation : design and functionalities
        </Text>
      </View>

      <View style={stylesEnjoy.section}>
        <Image
          style={stylesEnjoy.imageSM}
          // src='https://img.icons8.com/wired/96/000000/r2-d2.png'
          src='https://img.icons8.com/dusk/96/000000/r2-d2.png'
        />
        <Text style={stylesEnjoy.p}>
          Discovering new technologies: IOT, Mobile App,...
        </Text>
      </View>

      <View style={stylesEnjoy.section}>
        <Image
          style={stylesEnjoy.imageSM}
          src='https://img.icons8.com/dusk/96/000000/diversity.png'
        />
        <Text style={stylesEnjoy.p}>Working in diverse teams</Text>
      </View>

      <View style={stylesEnjoy.section}>
        <Image
          style={stylesEnjoy.imageSM}
          src='https://img.icons8.com/dusk/96/000000/europe.png'
        />
        <Text style={stylesEnjoy.p}>Working remotely from time to time</Text>
      </View>
    </View>
  );
};

export default Enjoy;

const stylesEnjoy = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
    paddingBottom: 5,
    width: '100%',
    backgroundColor: '#FFFFFF',
    marginBottom: 5,
  },
  section: {
    flexDirection: 'row',
  },
  image: {
    backgroundColor: '#F0DB4F',
  },
  imageSM: {
    marginRight: 5,
    marginTop: 5,
    height: 12,
    width: 12,
  },
  h1: {
    marginLeft: 10,
    fontSize: 16,
  },
  p: {
    fontSize: 9,
    marginTop: 7,
  },
});
