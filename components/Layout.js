import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, ScrollView } from 'react-native'

export default function Layout({ children }) {
  return (
    <ScrollView>
      <View style={styles.container}>
        {children}
        <StatusBar style='auto' />
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 25,
    flex: 1,
    // backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
})
