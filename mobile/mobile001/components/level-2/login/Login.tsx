import React from 'react';
import i18n from '../../../i18n/i18n';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
  titleContainer: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 24,
  },
  textInputsContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  textInput: {
    borderColor: '#6f6f6f',
    borderWidth: 1,
    width: Dimensions.get('screen').width * 0.7,
    marginLeft: 10,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5897fb',
    width: Dimensions.get('screen').width * 0.3,
    height: 36,
    borderRadius: 10,
  },
});

export default function Login() {
  return (
    <View>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}> {i18n.login.title}</Text>
      </View>
      <View style={styles.textInputsContainer}>
        <Text>{i18n.login.username}</Text>
        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.textInputsContainer}>
        <Text>{i18n.login.password}</Text>
        <TextInput style={styles.textInput} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text>{i18n.login.loginButton}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
