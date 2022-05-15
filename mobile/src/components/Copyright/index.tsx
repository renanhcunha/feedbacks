import React from 'react';
import { Text, View, Linking } from 'react-native';

import { styles } from './styles';

export function Copyright() {
  return (
    <View>
      <Text
        style={styles.text}
        onPress={() => Linking.openURL('https://github.com/renanhcunha')}
      >
        Feito por renanhcunha
      </Text>
    </View>
  );
}