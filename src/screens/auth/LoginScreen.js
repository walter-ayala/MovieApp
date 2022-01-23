import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Colors} from '../../assets/colors/colors';
import Button from '../../components/Button';
import Field from '../../components/Field';
import Logo from '../../components/Logo';
import useUser from '../../hooks/useUser';
import {showWarningMessage} from '../../utils/alerts/showMessage';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {signIn, loading} = useUser();

  const validateLogin = async () => {
    try {
      if (!email) throw 'Email is required';
      if (!password) throw 'Password is required';
      if (loading) return '';
      await signIn({email, password});
    } catch (error) {
      showWarningMessage(error);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Logo />
        <View style={styles.fieldsContainer}>
          <Field
            value={email}
            label="Email"
            placeholder="movies@gmail.com"
            type="email-address"
            onChangeText={value => setEmail(value)}
          />
          <Field
            value={password}
            label="Password"
            placeholder="Password"
            onChangeText={value => setPassword(value)}
            secure
          />
        </View>
        <Button title="Log In" loading={loading} onPress={validateLogin} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.PRIMARY,
    flex: 1,
    justifyContent: 'center',
  },
  formContainer: {
    marginHorizontal: 40,
    borderWidth: 0.5,
    borderRadius: 30,
    padding: 20,
    borderColor: Colors.PRIMARY,
    backgroundColor: Colors.WHITE,
  },
  fieldsContainer: {
    marginTop: 0,
  },
});

export default LoginScreen;
