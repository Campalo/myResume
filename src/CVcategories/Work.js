import React from 'react';
import {View, Text, Image, StyleSheet} from '@react-pdf/renderer';

const Work = () => {
  return (
    <View style={stylesWork.container}>
      <View style={stylesWork.section}>
        <Image style={stylesWork.image} src='https://i.imgur.com/m6bKPT7.png' />
        <Text style={stylesWork.h1}>Work Experience</Text>
      </View>

      {/* BEXPAND */}
      <View style={stylesWork.section2}>
        <Text style={stylesWork.h2}>06.2017 - 01.2019, France</Text>
        <Text style={stylesWork.h3}>Digital Marketing Manager</Text>
        <Text style={stylesWork.p}>
          B2Expand - Blockchain Video Game Studio
        </Text>
      </View>

      <View style={stylesWork.section2}>
        <Text style={stylesWork.pLight}>
          Start-up of 5 and later 20 employees
        </Text>

        <View style={stylesWork.section3}>
          <Text style={stylesWork.p}>
            <Text style={stylesWork.skills}>project management: </Text>
            Lead the launch of the first game: 27 000 downloads in one month
          </Text>
        </View>

        <View style={stylesWork.section3}>
          <Text style={stylesWork.p}>
            <Text style={stylesWork.skills}> analytics, reporting, UX: </Text>
            Weekly improvement of the game with the developers team, based on
            players'feedback and analytic tools (Unity, Google)
          </Text>
        </View>

        <View style={stylesWork.section3}>
          <Text style={stylesWork.p}>
            <Text style={stylesWork.skills}>seo, cms, community: </Text>
            Create weekly content for the website and social media
          </Text>
        </View>

        <View style={stylesWork.section3}>
          <Text style={stylesWork.p}>
            <Text style={stylesWork.skills}>blockchain: </Text>
            Give 2 Blockchain & Video Games talks during worldwide B2B events
          </Text>
        </View>
      </View>

      {/* TEFAL */}
      <View style={stylesWork.section2}>
        <Text style={stylesWork.h2}>03.2015 - 05.2016, France</Text>
        <Text style={stylesWork.h3}>International Product Manager</Text>
        <Text style={stylesWork.p}>Group Seb - Cookware worldwide leader</Text>
      </View>

      <View style={stylesWork.section2}>
        <Text style={stylesWork.pLight}>Company of 34 000 employees</Text>

        <View style={stylesWork.section3}>
          <Text style={stylesWork.p}>
            <Text style={stylesWork.skills}>project management: </Text>
            Take part in 8 new product developments and launchs
          </Text>
        </View>

        <View style={stylesWork.section3}>
          <Text style={stylesWork.p}>
            <Text style={stylesWork.skills}>communication: </Text>
            Create packaging and video promotion in collaboration with agencies
            and subsidiaries
          </Text>
        </View>

        <View style={stylesWork.section3}>
          <Text style={stylesWork.p}>
            <Text style={stylesWork.skills}>User Focus </Text>
            Organize a group consumer survey with 15 users to test the new
            product
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Work;

const stylesWork = StyleSheet.create({
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
  section2: {
    flexDirection: 'column',
    marginTop: 5,
  },
  section3: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {
    backgroundColor: '#F0DB4F',
  },
  h1: {
    marginLeft: 10,
    fontSize: 16,
  },
  h2: {
    fontSize: 10,
    paddingTop: 10,
    lineHeight: 1.3,
    color: '#696E72',
  },
  h3: {
    fontSize: 14,
    textDecoration: 'underline',
    textDecorationColor: '#F0DB4F',
    lineHeight: 1.3,
  },
  p: {
    fontSize: 10,
    lineHeight: 1.3,
  },
  pLight: {
    fontSize: 10,
    lineHeight: 1.3,
    color: '#696E72',
  },
  imageSM: {
    backgroundColor: '#E4E4E4',
    height: 10,
    marginRight: 10,
  },
  subCategorie: {
    fontSize: 10,
    lineHeight: 1.3,
    marginLeft: 5,
    marginRight: 5,
    backgroundColor: '#E4E4E4',
  },
  skills: {
    fontSize: 10,
    lineHeight: 1.3,
    backgroundColor: '#F0DB4F',
    marginRight: 10,
    textTransform: 'uppercase',
  },
});
