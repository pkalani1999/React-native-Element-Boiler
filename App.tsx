import {Modal, ScrollView, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import {
  Avatar,
  Badge,
  BottomSheet,
  Button,
  CheckBox,
  Header,
  Image,
  Input,
  ListItem,
  Skeleton,
  Slider,
  Text,
  ThemeProvider,
  Tooltip,
  createTheme,
} from '@rneui/themed';

const theme = createTheme({
  lightColors: {
    primary: '#e7e7e8',
  },
  darkColors: {
    primary: '#000',
  },
  mode: 'light',
});

const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [checked, setChecked] = React.useState(false);

  const list = [
    {title: 'List Item 1'},
    {title: 'List Item 2'},
    {
      title: 'Cancel',
      containerStyle: {backgroundColor: 'red'},
      titleStyle: {color: 'white'},
      onPress: () => setIsVisible(false),
    },
  ];
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <ScrollView>
            <Skeleton animation="pulse" width={80} height={40} />
            <Skeleton
              LinearGradientComponent={LinearGradient}
              animation="wave"
              width={80}
              height={40}
            />
            <Skeleton animation="none" width={80} height={40} />
            <CheckBox
              checked
              title="Label"
              checkedColor="red"
              checkedTitle="red"
            />
            <CheckBox checked title="Label" />
            <Button
              title="Open Bottom Sheet"
              onPress={() => setIsVisible(true)}
              buttonStyle={{margin: 10}}
            />
            <CheckBox
              checked={checked}
              checkedColor="#0F0"
              checkedTitle="Great!"
              containerStyle={{width: '100%'}}
              onIconPress={() => setChecked(!checked)}
              onLongIconPress={() => console.log('onLongIconPress()')}
              onLongPress={() => console.log('onLongPress()')}
              onPress={() => console.log('onPress()')}
              size={30}
              textStyle={{}}
              title="Check for Awesomeness"
              titleProps={{}}
              uncheckedColor="#F00"
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 20,
                marginBottom: 40,
              }}>
              <Badge value="3" status="success" />
              <Badge value="99+" status="error" />
              <Badge value="500" status="primary" />
              <Badge value="10" status="warning" />
            </View>
            <Text>Mini Badge</Text>
            <Text style={{textAlign: 'center'}}>
              This type of badge shows when no value prop is provided. This form
              is effective for showing statuses.
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 20,
                marginBottom: 20,
              }}>
              <Badge status="success" />
              <Badge status="error" />
              <Badge status="primary" />
              <Badge status="warning" />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginBottom: 20,
              }}>
              <Text style={{color: '#397af8', paddingVertical: 10}}>
                Success
              </Text>
              <Text style={{color: '#397af8', paddingVertical: 10}}>Error</Text>
              <Text style={{color: '#397af8', paddingVertical: 10}}>
                Primary
              </Text>
              <Text style={{color: '#397af8', paddingVertical: 10}}>
                Warning
              </Text>
            </View>

            <Text>Badge as Indicator</Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                marginTop: 20,
                marginBottom: 40,
              }}>
              <View>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                  }}
                  size="medium"
                />
                <Badge
                  status="success"
                  containerStyle={{position: 'absolute', top: 5, left: 40}}
                />
              </View>
              <View>
                <Avatar
                  rounded
                  source={{
                    uri: 'https://randomuser.me/api/portraits/women/40.jpg',
                  }}
                  size="large"
                />
                <Badge
                  status="primary"
                  value={10}
                  containerStyle={{position: 'absolute', top: 5, left: 60}}
                />
              </View>
            </View>
            <Header
              backgroundImageStyle={{}}
              barStyle="default"
              centerComponent={{
                text: 'MY TITLE',
                style: {color: 'red'},
              }}
              centerContainerStyle={{}}
              // containerStyle={{width: 350}}
              leftComponent={{icon: 'menu', color: 'red'}}
              leftContainerStyle={{}}
              linearGradientProps={{}}
              placement="center"
              rightComponent={{icon: 'home', color: 'red'}}
              rightContainerStyle={{}}
              statusBarProps={{}}
            />

            <Tooltip
              popover={<Text>PopOver Content</Text>}
              containerStyle={{}}
              height={40}
              width={150}
              highlightColor="transparent"
              ModalComponent={Modal}
              onClose={() => console.log('onClose()')}
              onOpen={() => console.log('onOpen()')}
              overlayColor="rgba(250, 250, 250, 0.70)">
              <Text>Hello, There</Text>
            </Tooltip>
            <Input
              containerStyle={{}}
              disabledInputStyle={{backgroundColor: '#ddd'}}
              inputContainerStyle={{}}
              errorMessage="Oops! that's not correct."
              errorStyle={{}}
              errorProps={{}}
              inputStyle={{}}
              label="User Form"
              labelStyle={{}}
              labelProps={{}}
              leftIcon={<Icon name="account-outline" size={20} />}
              leftIconContainerStyle={{}}
              rightIcon={<Icon name="close" size={20} />}
              rightIconContainerStyle={{}}
              placeholder="Enter Name"
            />
            <BottomSheet modalProps={{}} isVisible={isVisible}>
              {list.map((l, i) => (
                <ListItem
                  key={i}
                  containerStyle={l.containerStyle}
                  onPress={l.onPress}>
                  <ListItem.Content>
                    <ListItem.Title style={l.titleStyle}>
                      {l.title}
                    </ListItem.Title>
                  </ListItem.Content>
                </ListItem>
              ))}
            </BottomSheet>
          </ScrollView>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
};

export default App;

const styles = StyleSheet.create({});
