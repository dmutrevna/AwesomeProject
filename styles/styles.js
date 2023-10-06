import { StyleSheet } from 'react-native'

export const gStyle = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    // marginTop: 263,
    fontFamily: 'r-regular',
    paddingLeft: 16,
    paddingRight: 16,
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
  },

  photoBlok: {
    width: 120,
    height: 120,
    backgroundColor: '#F6F6F6',
    position: 'absolute',
    top: -60,
    left: '36%',
    borderRadius: 16,
  },

  buttonX: {
    left: 105,
    top: 80,
  },

  registerSection: {
    paddingTop: 92,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    width: 375,
    height: 549,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    paddingLeft: 16,
  },

  title: {
    fontFamily: 'r-medium',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 32,
  },

  input: {
    width: 343,
    height: 50,
    backgroundColor: 'rgba(246, 246, 246, 1)',
    borderRadius: 5,
    borderColor: 'rgba(232, 232, 232, 1)',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 16,
  },
  inputFocus: {
    borderColor: 'rgba(255, 108, 0, 1)',
  },

  lastInput: {
    marginBottom: 0,
  },

  placeholder: {
    fontSize: 16,
  },

  buttonRegister: {
    width: 341,
    height: 51,
    backgroundColor: 'rgba(255, 108, 0, 1)',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 43,
    textAlign: 'center',
  },

  textButton: {
    fontFamily: 'r-regular',
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },

  textLogin: {
    marginTop: 16,
    fontFamily: 'r-regular',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 78,
    color: 'rgba(27, 67, 113, 1)',
  },

  passwordInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  eyeIcon: {
    marginLeft: -40,
    marginBottom: 2,
  },
})
