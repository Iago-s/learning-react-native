import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'black',

    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  textContainer: {
    width: '80%',
    height: 70,
    marginTop: 30,
    marginBottom: 20,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#109B57',

    borderWidth: 1,
    borderColor: '#109B57',
    borderRadius: 8,
  },

  text: {
    fontSize: 20,
    fontWeight: 'bold',

    padding: 10,
    color: '#F5F5F5',
  },

  portfoliosContainer: {
    width: '80%',


    flex: 1,
  },

  button: {
    justifyContent: 'flex-start',
    alignItems: 'center',

    marginBottom: 10,

    backgroundColor: '#272727',

    borderWidth: 1,
    borderColor: '#272727',
    borderRadius: 8,

    flexDirection: 'row',
  },

  logo: {
    width: 30,
    height: 30,
    margin: 10
  },

  textButton: {
    color: '#F5F5F5',
    fontSize: 18,

    padding: 10,
  },

  buttonAdd: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'black',
    marginBottom: 30,
  },

  iconAdd: {
    width: 70,
    height: 70,
    margin: 10,

  },
  
});

export default styles;