import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: 'black',

    alignItems: 'center',
  },

  text: {
    color: 'white',
    fontSize: 18,
  },

  walletContainer: {
    width: '80%',

    marginTop: 30,
  },

  header: {
    flex: 1,
    flexDirection: 'row',

    justifyContent: 'space-around',
    alignItems: 'center',

    backgroundColor: '#109B57',

    marginBottom: 10,
    padding: 10,

    borderWidth: 1,
    borderColor: '#109B57',
    borderRadius: 8,
  },

  textHeader: {
    fontSize: 20,
    color: '#F5F5F5',
  },

  textIputHeader: {
    fontSize: 20,
    color: 'black'
  },

  titlesContainer: {
    flex: 1,
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: '#109B57',

    borderWidth: 1,
    borderColor: '#109B57',
    borderRadius: 8,

    padding: 10,
    marginBottom: 10,
  },

  titlesText: {
    color: '#F5F5F5',
    padding: 10,
    fontSize: 14,
  },

  stocksContainer: {
    flex: 1,
    flexDirection: 'row',
    
    justifyContent: 'space-between',    
    alignItems: 'center',

    backgroundColor: '#272727',
    borderRadius: 8,

    marginBottom: 10,
    padding: 10,
  },

  input: {
    color: 'white',
    fontSize: 14,
  },

  headerTwo: {
    
    flex: 1,
    flexDirection: 'row',
    
    justifyContent: 'space-between',
    flex: 1
  }
});

export default styles;