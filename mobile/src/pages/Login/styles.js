import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#B9C7D2',

    justifyContent: 'center',
    alignItems: 'center'
  },

  inputContainer: {
    width: '80%',
    borderRadius: 4,
    
    borderColor: '#f5f5f5',
  },

  registerLink: {
    alignItems: 'flex-end',
    marginTop: 5,
  },
  
  registerLinkText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#f5f5f5',
    
    paddingRight: 10,
    paddingLeft: 10,
  }
});

export default styles;