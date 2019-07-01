import React from 'react';
import {View, Text, Image, StyleSheet} from '@react-pdf/renderer';

const Enjoy = () => {
  return (
    <View style={stylesInterests.container}>
      <View style={stylesInterests.section}>
        <Image
          style={stylesInterests.image}
          src='https://i.imgur.com/m6bKPT7.png'
        />
        <Text style={stylesInterests.h1}>Interests</Text>
      </View>

      <View style={stylesInterests.section1}>
        <View style={stylesInterests.section2}>
          <Image
            style={stylesInterests.imageSM}
            src='https://i.imgur.com/m6bKPT7.png'
          />
          <Text style={stylesInterests.p}>Sport</Text>
        </View>

        <View style={stylesInterests.section2}>
          <Image
            style={stylesInterests.imageSM}
            src='https://i.imgur.com/m6bKPT7.png'
          />
          <Text style={stylesInterests.p}>Meet</Text>
        </View>

        <View style={stylesInterests.section2}>
          <Image
            style={stylesInterests.imageSM}
            src='https://i.imgur.com/m6bKPT7.png'
          />
          <Text style={stylesInterests.p}>Cook</Text>
        </View>
      </View>
    </View>
  );
};

export default Enjoy;

const stylesInterests = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
    width: '100%',
    backgroundColor: '#FFFFFF',
    marginBottom: 5,
  },
  section: {
    flexDirection: 'row',
  },
  section1: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  section2: {
    flexDirection: 'column',
  },
  image: {
    backgroundColor: '#F0DB4F',
  },
  imageSM: {
    marginTop: 10,
    marginBottom: 5,
    marginRight: 30,
    height: 25,
    width: 25,
  },
  h1: {
    marginLeft: 10,
    fontSize: 16,
  },
  p: {
    fontSize: 10,
  },
});
