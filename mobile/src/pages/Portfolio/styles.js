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
    width: '100%',

    marginTop: 30,

    borderWidth: 1,
    borderRadius: 8,
  },

  header: {
    width: '90%',
    flex: 1,
    flexDirection: 'row',

    justifyContent: 'space-around',
    alignItems: 'center',

    backgroundColor: '#109B57',

    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: 10,
    padding: 5,

    borderWidth: 1,
    borderColor: '#109B57',
    borderRadius: 8,
  },

  textHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F5F5F5',
  },

  textIputHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black'
  },

  titlesContainer: {
    width: '90%',
    flex: 1,
    flexDirection: 'row',

    justifyContent: 'space-between',
    alignItems: 'center',

    backgroundColor: '#272727',

    borderWidth: 1,
    borderColor: '#272727',
    borderRadius: 8,

    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: 10,
    padding: 10,
  },

  titlesText: {
    width: 50,

    color: '#F5F5F5',
    fontSize: 14,
    fontWeight: 'bold',

    padding: 2,

    textAlign: 'center',
  },

  stocksContainer: {
    width: '90%',
    flex: 1,
    flexDirection: 'row',
    
    justifyContent: 'space-between',    
    alignItems: 'center',

    borderWidth: 1,
    backgroundColor: '#272727',
    borderRadius: 8,

    padding: 10,

    marginLeft: '5%',
    marginRight: '5%',
  },

  input: {
    width: 57,

    fontSize: 13,
    color: 'white',
    textAlign: 'left',


    padding: 0,
    margin: 0,

    borderRadius: 4,
  },

  inputEditable: {
    width: 57,

    fontSize: 13,
    color: 'white',
    textAlign: 'left',

    padding: 0,
    margin: 0,
    borderBottomWidth: 1,
    borderBottomColor: '#109B57',
    borderRadius: 4,
  },

  headerTwo: {
    
    flex: 1,
    flexDirection: 'row',
    
    justifyContent: 'space-between',
    flex: 1
  },

  button: {
    width: '90%',
    marginLeft: '5%',
    marginRight: '5%',
    marginBottom: 10,

    justifyContent: 'center',
    alignItems: 'center',

    borderWidth: 1,
    borderColor: '#109b57',
    borderRadius: 8,

    backgroundColor: '#109B57',
  },

  textButton: {
    color: '#F5F5F5',
    fontWeight: 'bold',
    padding: 10
  }
});

export default styles;