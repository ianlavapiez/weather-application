import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function Header({ navigation, title }: any) {
  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <MaterialIcons
        style={styles.icon}
        name='menu'
        size={28}
        onPress={openDrawer}
      />
      <View>
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  icon: {
    position: 'absolute',
    left: 0,
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#000',
  },
});
