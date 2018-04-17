import { StyleSheet } from 'react-native';

var em = (n) => n * 35;

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3ba3b9',
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    backgroundColor: '#2c3e50',
    alignItems: 'center',
    justifyContent: 'center'
  },

  h1: {
    fontSize: em(2.5),
    marginTop: em(0.5),
    marginBottom: em(0.5),
    marginLeft: em(0),
    marginRight: em(0),
    fontWeight: '500'
  },

  h2: {
    fontSize: em(2),
    marginTop: em(0.5),
    marginBottom: em(0.5),
    marginLeft: em(0),
    marginRight: em(0),
    fontWeight: '500'
  },

  h3: {
    fontSize: em(1.75),
    marginTop: em(0.5),
    marginBottom: em(0.5),
    marginLeft: em(0),
    marginRight: em(0),
    fontWeight: '500'
  },

  h4: {
    fontSize: em(1.5),
    marginTop: em(0.5),
    marginBottom: em(0.5),
    marginLeft: em(0),
    marginRight: em(0),
    fontWeight: '500'
  },

  h5: {
    fontSize: em(1.25),
    marginTop: em(0.5),
    marginBottom: em(0.5),
    marginLeft: em(0),
    marginRight: em(0),
    fontWeight: '500'
  }
});

export const home = StyleSheet.create({
  title: {
    color: '#FFFFFF'
  },

  image: {
    marginTop: em(0.1),
    marginBottom: em(0.1),
    marginLeft: em(0),
    marginRight: em(0),
    scaleX: 0.5,
    scaleY: 0.5
  }
});