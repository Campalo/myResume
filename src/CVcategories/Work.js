import React from 'react';
import {View, Text, Image, StyleSheet} from '@react-pdf/renderer';

const Work = () => {
  return (
    <View style={stylesWork.container}>
      <View style={stylesWork.section}>
        <Image
          style={stylesWork.image}
          src='https://img.icons8.com/wired/96/000000/meeting.png'
        />
        <Text style={stylesWork.h1}>Work Experience</Text>
      </View>

      {/* B2EXPAND */}
      <View style={stylesWork.section2}>
        <Text style={stylesWork.pLight}>06.2017 - 01.2019, France</Text>
        <Text style={stylesWork.h3}>Digital Marketing Manager</Text>
        <Text style={stylesWork.h2}>
          B2Expand - Blockchain Video Game Studio
        </Text>

        <Text style={stylesWork.p}>Start-up of 5 and later 20 employees</Text>

        <View style={stylesWork.section3}>
          <Text style={stylesWork.p}>
            <Text style={stylesWork.skills}>Project management: </Text>
            Lead the launch of the first game: 27 000 downloads in one month
          </Text>
        </View>

        <View style={stylesWork.section3}>
          <Text style={stylesWork.p}>
            <Text style={stylesWork.skills}> Analytics, Reporting, UX: </Text>
            Weekly improvement of the game with the developement team, based on
            players' feedback and analytic tools (Unity, Google)
          </Text>
        </View>

        <View style={stylesWork.section3}>
          <Text style={stylesWork.p}>
            <Text style={stylesWork.skills}>Seo, Cms: </Text>
            Create weekly content for the website and social media
          </Text>
        </View>

        <View style={stylesWork.section3}>
          <Text style={stylesWork.p}>
            <Text style={stylesWork.skills}>Blockchain: </Text>
            Gave 2 Blockchain & Video Games talks during worldwide business
            events
          </Text>
        </View>
      </View>

      {/* STARTUPS year */}
      <View style={stylesWork.section2}>
        <Text style={stylesWork.pLight}>
          05.2016 - 05.2017, United States + France
        </Text>
        <Text style={stylesWork.h3}>Start-up experiences</Text>
        <Text style={stylesWork.h2}>
          Piper - Learn electronics while playing
        </Text>
        <Text style={stylesWork.h2}>
          Bricodeurs - Robotics workshops for children
        </Text>
      </View>

      {/* TEFAL */}
      <View style={stylesWork.section2}>
        <Text style={stylesWork.pLight}>03.2015 - 05.2016, France</Text>
        <Text style={stylesWork.h3}>International Product Manager</Text>
        <Text style={stylesWork.h2}>Group Seb - Cookware worldwide leader</Text>

        <Text style={stylesWork.p}>Company of 34 000 employees</Text>

        <View style={stylesWork.section3}>
          <Text style={stylesWork.p}>
            <Text style={stylesWork.skills}>Product management: </Text>
            Participated in 8 new product developments and launches (mandolin,
            knives, baking molds, ...)
          </Text>
        </View>

        <View style={stylesWork.section3}>
          <Text style={stylesWork.p}>
            <Text style={stylesWork.skills}>Communication: </Text>
            Create packaging and video promotion in collaboration with agencies
            and subsidiaries
          </Text>
        </View>

        <View style={stylesWork.section3}>
          <Text style={stylesWork.p}>
            <Text style={stylesWork.skills}>User focus: </Text>
            Lead a survey of 15 users for testing new products
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
    paddingBottom: 5,
    width: '100%',
    backgroundColor: '#FFFFFF',
    marginBottom: 5,
  },
  section: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  section2: {
    flexDirection: 'column',
    marginTop: 5,
    marginBottom: 5,
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
    fontSize: 11,
    lineHeight: 1.3,
  },
  h3: {
    fontSize: 14,
    textDecoration: 'underline',
    textDecorationColor: '#F0DB4F',
    lineHeight: 1.3,
  },
  p: {
    fontSize: 9,
    lineHeight: 1.3,
  },
  pLight: {
    fontSize: 9,
    lineHeight: 1.3,
    color: '#62757f',
  },
  imageSM: {
    backgroundColor: '#E4E4E4',
    height: 10,
    marginRight: 10,
  },
  skills: {
    fontSize: 9,
    lineHeight: 1.3,
    backgroundColor: '#F0DB4F',
    marginRight: 10,
  },
});
