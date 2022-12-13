import {StyleSheet} from 'react-native';

export const colores = {
  primary: '#5856d6',
};

export const styles = StyleSheet.create({
  globalMargin: {
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    marginBottom: 10,
  },
  botonGrande: {
    width: 100,
    height: 60,
    backgroundColor: 'crimson',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  botonGrandeTexto: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 15,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  menuContainer: {
    // backgroundColor: 'salmon',
    marginVertical: 30,
    // paddingHorizontal: 30,
    alignItems: 'center',
  },
  menuBoton: {
    paddingVertical: 10,
  },
  menuTexto: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});
