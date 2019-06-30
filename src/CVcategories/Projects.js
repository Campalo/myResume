import React from 'react';
import {View, Text, Image, StyleSheet} from '@react-pdf/renderer';

const Work = () => {
  return (
    <View style={stylesProjects.container}>
      <View style={stylesProjects.section}>
        <Image
          style={stylesProjects.image}
          src='https://i.imgur.com/m6bKPT7.png'
        />
        <Text style={stylesProjects.h1}>Project experience</Text>
      </View>

      {/* TAAL **************************************************************/}
      {/* <View style={stylesProjects.section2}>
        <Text style={stylesProjects.h2}>01.2019 - now, Remote</Text>
        <Text style={stylesProjects.h3}>Volunteer - WebMarketing Advisor</Text>
        <Text style={stylesProjects.p}>
          TAAL Project - Facilitate access to New Technologies
        </Text>
        <Text
          style={stylesProjects.link}
          href='https://www.linkedin.com/company/taal-project/'>
          Click to discover the association
        </Text>
      </View>

      <View style={stylesProjects.section2}>
        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>UI, Adobe XD: </Text>
            Renovation of the website structure and design
          </Text>
        </View>

        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}> SEO, Google Ads: </Text>
            Optimize the content of the website and set up ads campaigns
          </Text>
        </View>
      </View> */}

      {/* Certificate Generator *******************************************************/}
      <View style={stylesProjects.section2}>
        <Text style={stylesProjects.h2}>06.2019 - now, Berlin</Text>
        <Text style={stylesProjects.h3}>Wepp App Certificate Generator</Text>
        <Text style={stylesProjects.p}>Edera - Online course company</Text>
        <Text
          style={stylesProjects.link}
          href='https://github.com/nelidiakonidze/Zertify'>
          Click to discover the project (WIP)
        </Text>
      </View>

      <View style={stylesProjects.section2}>
        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>Git, Scrum: </Text>
            Project team of 4 developers
          </Text>
        </View>
        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>React, CSS, Material-ui: </Text>
            Create Lists and Certificate components
          </Text>
        </View>

        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>
              Node.js, Express, Rest Api, Heroku:
            </Text>
            Mock the students and courses data. Deploy it online to fetch it
            inside components
          </Text>
        </View>

        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}> React-pdf: </Text>
            Create the certificate component as a PDF file on the browser
          </Text>
        </View>

        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>UI, Adobe XD: </Text>
            Create the framework of the webApp
          </Text>
        </View>
      </View>

      {/* WWF Hackathon *******************************************************/}
      <View style={stylesProjects.section2}>
        <Text style={stylesProjects.h2}>06.2019, Berlin</Text>
        <Text style={stylesProjects.h3}>Mobile App Water Watch</Text>
        <Text style={stylesProjects.p}>
          Hackathon - WWF and Facebook Developer Circle
        </Text>
        <Text
          style={stylesProjects.link}
          href='https://github.com/Campalo/DrinkCode'>
          Click to discover the prototype
        </Text>
      </View>

      <View style={stylesProjects.section2}>
        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>Git: </Text>
            Project team of 3 developers and 1 UI designer
          </Text>
        </View>
        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>Capacitor: </Text>
            Get access to camera and geolocalisation of the user
          </Text>
        </View>

        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>Firebase: </Text>
            Store the photo to FireStorage, save the photo details to FireStore,
            to then fetch it in the vote component
          </Text>
        </View>

        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>
              Angular, Typescript, Material-ui:
            </Text>
            Create Description component to add a details to the photo
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Work;

const stylesProjects = StyleSheet.create({
  container: {
    flexDirection: 'column',
    padding: 10,
    width: '100%',
    backgroundColor: '#FFFFFF',
    marginBottom: 19,
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
  link: {
    fontSize: 10,
    lineHeight: 1.3,
    color: '#4db6ac',
  },
  skills: {
    fontSize: 10,
    lineHeight: 1.3,
    backgroundColor: '#F0DB4F',
    marginRight: 10,
    textTransform: 'uppercase',
  },
});
