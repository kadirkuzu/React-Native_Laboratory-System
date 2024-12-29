import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ThemeColors } from '../../variables/colors';
import { StyleSheet } from 'react-native';

export const ScreenBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <LinearGradient
      colors={[ThemeColors.secondary, ThemeColors.backgroundColor]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style= {styles.container}
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});