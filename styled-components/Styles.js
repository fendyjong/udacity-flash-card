import { StyleSheet } from 'react-native'

const Styles = StyleSheet.create({
  marginVerticalMedium: {
    marginTop: 16,
    marginBottom: 16,
  },
  marginVerticalLarge: {
    marginTop: 24,
    marginBottom: 24,
  },

  marginTopSmall: {
    marginTop: 8,
  },
  marginTopMedium: {
    marginTop: 16,
  },
  marginTopLarge: {
    marginTop: 24,
  },

  alignCenter: {
    alignItems: 'center',
  },

  full: {
    width: '100%',
    height: '100%',
  },

  'shadow-1': {
    shadowColor: '#9E9E9E',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 1,
    // elevation: 1,
    // transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
  },
  'shadow-2': {
    shadowColor: '#9E9E9E',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 2,
  },
  'shadow-3': {
    shadowColor: '#9E9E9E',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 1,
    shadowRadius: 3,
  },
  'shadow-4': {
    shadowColor: '#9E9E9E',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 1,
    shadowRadius: 4,
  },
  'shadow-5': {
    shadowColor: '#9E9E9E',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
})

export default Styles

/*
.card-1 {
  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
}
.card-2 {
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
}

.card-3 {
  box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23);
}

.card-4 {
  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
}

.card-5 {
  box-shadow: 0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22);
}
 */
