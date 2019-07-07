import React from 'react';
import {View, Text, Image, StyleSheet} from '@react-pdf/renderer';

const Work = () => {
  return (
    <View style={stylesProjects.container}>
      <View style={stylesProjects.section}>
        <Image
          style={stylesProjects.image}
          src='https://img.icons8.com/wired/96/000000/test-tube.png'
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
        <Text style={stylesProjects.pLight}>06-07.2019, Berlin</Text>
        <Text style={stylesProjects.h3}>Web App Certificate Generator</Text>
        <Text style={stylesProjects.h2}>Edera - Online course company</Text>
        <Text
          style={stylesProjects.link}
          href='https://github.com/nelidiakonidze/Zertify'>
          Click to discover the project: frontend
        </Text>
        <Text
          style={stylesProjects.link}
          href='https://github.com/nelidiakonidze/zertify-backend'>
          + backend
        </Text>

        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>
              TeamWork - Git, Scrum, Demo:{' '}
            </Text>
            Project team of 4 developers
          </Text>
        </View>
        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>
              Frontend - React, CSS, Material-ui:{' '}
            </Text>
            Create Lists and Certificate components
          </Text>
        </View>

        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>
              Backend - Node.js, Express, Rest Api, Heroku:{' '}
            </Text>
            Mock the students and courses data. Deploy it online to fetch it
            inside components
          </Text>
        </View>

        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>Library - React-pdf: </Text>
            Create the certificate component as a PDF file on the browser
          </Text>
        </View>

        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>UI - Adobe XD: </Text>
            Create the framework of the webApp
          </Text>
        </View>
      </View>

      {/* WWF Hackathon *******************************************************/}
      <View style={stylesProjects.section2}>
        <Text style={stylesProjects.pLight}>06.2019, Berlin</Text>
        <Text style={stylesProjects.h3}>Mobile App Water Watch</Text>
        <Text style={stylesProjects.h2}>
          Hackathon - WWF and Facebook Developer Circle
        </Text>
        <Text
          style={stylesProjects.link}
          href='https://github.com/Campalo/DrinkCode'>
          Click to discover the prototype
        </Text>

        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>TeamWork - Git: </Text>
            Project team of 3 developers and 1 UI designer
          </Text>
        </View>

        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>
              Frontend - Angular, Typescript, Material-ui:{' '}
            </Text>
            Create a component to attached details to photos
          </Text>
        </View>

        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>Backend - Firebase: </Text>
            Store the photo to FireStorage, save the photo details to FireStore,
            to then fetch it in the vote component
          </Text>
        </View>

        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}> Library - Capacitor: </Text>
            Get access to camera and geolocalisation of the user
          </Text>
        </View>
      </View>

      {/* Quiz Fox *******************************************************/}
      <View style={stylesProjects.section2}>
        <Text style={stylesProjects.pLight}>04-05.2019, Berlin</Text>
        <Text style={stylesProjects.h3}>Trivial Pursuit-like Web app</Text>
        <Text style={stylesProjects.h2}>Wild Code School projects</Text>
        <Text
          style={stylesProjects.link}
          href='https://github.com/Campalo/QuizFox'>
          Click to play the game
        </Text>

        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>TeamWork - Git, Scrum: </Text>
            Project team of 3, then 2 developers
          </Text>
        </View>

        <View style={stylesProjects.section3}>
          <Text style={stylesProjects.p}>
            <Text style={stylesProjects.skills}>
              Frontend - React, CSS, Material-ui:{' '}
            </Text>
            Create the router. Fetch an api to get the questions and answers.
            Develop several components and functionalities for a good user
            experience (shuffle answers, increase points, give color
            feedback,...)
          </Text>
        </View>
      </View>
    </View>
  );
};

//https://github.com/Campalo/QuizFox

export default Work;

const stylesProjects = StyleSheet.create({
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
  link: {
    fontSize: 9,
    lineHeight: 1.3,
    color: '#4453A4',
    textDecoration: 'none',
  },
  skills: {
    fontSize: 9,
    lineHeight: 1.3,
    backgroundColor: '#F0DB4F',
    marginRight: 10,
  },
});
