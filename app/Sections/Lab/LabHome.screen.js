import React, { PureComponent } from 'react';
import { BackHandler } from 'react-native';
import {Container, Content, Icon, Fab, View} from 'native-base';
import { TabBar } from 'react-native-tab-view';

import SvgUri from 'react-native-svg-uri'
import { createTabNavigator } from 'react-navigation';
import OrderStack from './Screens/Order/Order.Stack'
import ReportScreen from './Screens/Report.screen'
import PriceListStack from './Screens/priceList/PriceList.Stack'
import BillStack from './Screens/Bill/Bill.Stack';

const Tab=createTabNavigator(
  {
    report: { screen: ReportScreen,title:'گزارش گیری'},
    priceList: { screen: PriceListStack,title:'جستجوی لابراتور'},
    orderManagement: { screen: OrderStack,title:'مدیریت سفارشات'},
    bill: { screen: BillStack,title:'صورت حساب های من'},
  },
  {
    swipeEnabled:true,
    animationEnabled:true,
    tabBarPosition:'bottom',
    lazy:true,
    tabBarComponent:props=>{
      return(
      <TabBar
      {...props}
      style={{ height: 45, backgroundColor: '#7EDAD1', borderBottomColor: 'white', borderBottomWidth: 0 }}
      // labelStyle={styles.label}
      indicatorStyle={{backgroundColor:'#7EDAD1'}}
      // renderIcon={this._renderIcon}
      onTabPress={()=>{}}
    />
    )},
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'report') {
          iconName = `<?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 58.365 58.365" style="enable-background:new 0 0 58.365 58.365;" xml:space="preserve"><path d="M57.863,26.632l-8.681-8.061V5.365h-10v3.921L29.182,0L0.502,26.632c-0.404,0.376-0.428,1.009-0.052,1.414c0.375,0.404,1.008,0.427,1.414,0.052l3.319-3.082v33.349h16h16h16V25.015l3.319,3.082c0.192,0.179,0.437,0.267,0.681,0.267c0.269,0,0.536-0.107,0.732-0.319C58.291,27.641,58.267,27.008,57.863,26.632z M41.182,7.365h6v9.349l-6-5.571V7.365zM23.182,56.365V35.302c0-0.517,0.42-0.937,0.937-0.937h10.126c0.517,0,0.937,0.42,0.937,0.937v21.063H23.182z M51.182,56.365h-14V35.302c0-1.62-1.317-2.937-2.937-2.937H24.119c-1.62,0-2.937,1.317-2.937,2.937v21.063h-14V23.158l22-20.429l14.28,13.26l5.72,5.311v0l2,1.857V56.365z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`;
        } else if (routeName === 'priceList') {
          iconName = `<?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 52.966 52.966" style="enable-background:new 0 0 52.966 52.966;" xml:space="preserve"><path d="M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19S32.459,40,21.983,40z"/><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`;
        } else if (routeName === 'orderManagement') {
          iconName = `<?xml version="1.0" encoding="iso-8859-1"?><svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><g><g><path d="M157.662,102.614c-4.427,0-8.017,3.589-8.017,8.017c0,9.725-7.912,17.637-17.637,17.637s-17.637-7.912-17.637-17.637s7.912-17.637,17.637-17.637c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017c-18.566,0-33.67,15.105-33.67,33.67s15.105,33.67,33.67,33.67s33.67-15.105,33.67-33.67C165.679,106.203,162.089,102.614,157.662,102.614z"/></g></g><g><g><path d="M157.662,196.676c-4.427,0-8.017,3.589-8.017,8.017c0,9.725-7.912,17.637-17.637,17.637s-17.637-7.912-17.637-17.637s7.912-17.637,17.637-17.637c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017c-18.566,0-33.67,15.105-33.67,33.67s15.105,33.67,33.67,33.67s33.67-15.105,33.67-33.67C165.679,200.266,162.089,196.676,157.662,196.676z"/></g></g><g><g><path d="M251.724,213.779h-59.858c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h59.858c4.427,0,8.017-3.589,8.017-8.017S256.152,213.779,251.724,213.779z"/></g></g><g><g><path d="M251.724,179.574h-59.858c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h59.858c4.427,0,8.017-3.589,8.017-8.017S256.152,179.574,251.724,179.574z"/></g></g><g><g><path d="M234.622,307.841h-42.756c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h42.756c4.427,0,8.017-3.589,8.017-8.017S239.049,307.841,234.622,307.841z"/></g></g><g><g><path d="M251.724,273.637h-59.858c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h59.858c4.427,0,8.017-3.589,8.017-8.017S256.152,273.637,251.724,273.637z"/></g></g><g><g><path d="M328.685,119.716H191.866c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017h136.818c4.427,0,8.017-3.589,8.017-8.017S333.112,119.716,328.685,119.716z"/></g></g><g><g><path d="M294.48,85.511H191.866c-4.427,0-8.017,3.589-8.017,8.017s3.589,8.017,8.017,8.017H294.48c4.427,0,8.017-3.589,8.017-8.017S298.908,85.511,294.48,85.511z"/></g></g><g><g><path d="M157.662,290.739c-4.427,0-8.017,3.589-8.017,8.017c0,9.725-7.912,17.637-17.637,17.637s-17.637-7.912-17.637-17.637s7.912-17.637,17.637-17.637c4.427,0,8.017-3.589,8.017-8.017s-3.589-8.017-8.017-8.017c-18.566,0-33.67,15.105-33.67,33.67s15.105,33.67,33.67,33.67s33.67-15.105,33.67-33.67C165.679,294.328,162.089,290.739,157.662,290.739z"/></g></g><g><g><path d="M362.889,0H72.15C58.3,0,47.031,11.268,47.031,25.119v359.148c0,13.851,11.268,25.119,25.119,25.119h145.37c4.427,0,8.017-3.589,8.017-8.017c0-4.427-3.589-8.017-8.017-8.017H72.15c-5.01,0-9.086-4.076-9.086-9.086V25.119c0-5.01,4.076-9.086,9.086-9.086h290.739c5.01,0,9.086,4.076,9.086,9.086v265.087c0,4.427,3.589,8.017,8.017,8.017c4.427,0,8.017-3.589,8.017-8.017V25.119C388.008,11.268,376.74,0,362.889,0z"/></g></g><g><g><path d="M438.578,325.094c-7.451-0.743-14.898,1.369-20.792,5.844c-4.695-7.878-12.701-13.467-21.964-14.395c-7.453-0.742-14.899,1.37-20.792,5.844c-4.695-7.878-12.701-13.467-21.964-14.395c-5.69-0.568-11.372,0.528-16.365,3.069V208.969c0-8.289-3.526-16.235-9.677-21.8c-6.145-5.56-14.426-8.274-22.721-7.444c-14.799,1.482-26.391,14.863-26.391,30.464v102.35l-23.566,23.566c-12.523,12.523-17.578,30.291-13.521,47.531l17.891,76.037c7.249,30.811,34.418,52.329,66.07,52.329h72.307c37.426,0,67.875-30.448,67.875-67.875v-88.567C464.969,339.957,453.377,326.576,438.578,325.094z M448.935,444.125c0,28.585-23.256,51.841-51.841,51.841h-72.307c-24.175,0-44.927-16.435-50.464-39.968l-17.891-76.037c-2.776-11.795,0.683-23.953,9.251-32.521l12.229-12.229v27.678c0,4.427,3.589,8.017,8.017,8.017s8.017-3.589,8.017-8.017V210.188c0-7.465,5.251-13.839,11.956-14.509c3.851-0.387,7.534,0.815,10.366,3.379c2.797,2.531,4.401,6.144,4.401,9.912v141.094c0,4.427,3.589,8.017,8.017,8.017s8.017-3.589,8.017-8.017v-12.827c0-3.768,1.603-7.381,4.401-9.912c2.834-2.564,6.515-3.767,10.366-3.379c6.704,0.671,11.956,7.045,11.956,14.51v20.157c0,4.427,3.589,8.017,8.017,8.017c4.427,0,8.017-3.589,8.017-8.017v-12.827c0-3.768,1.603-7.381,4.401-9.912c2.834-2.564,6.516-3.766,10.366-3.379c6.704,0.671,11.956,7.045,11.956,14.51v20.158c0,4.427,3.589,8.017,8.017,8.017c4.427,0,8.017-3.589,8.017-8.017v-12.827c0-3.768,1.603-7.381,4.401-9.912c2.834-2.563,6.513-3.767,10.366-3.378c6.704,0.67,11.956,7.044,11.956,14.509V444.125z"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`;
        } else if (routeName === 'bill') {
          iconName = `<?xml version="1.0" encoding="iso-8859-1"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 491.695 491.695" style="enable-background:new 0 0 491.695 491.695;" xml:space="preserve"><g><path d="M436.714,0H149.471c-16.438,0-29.812,13.374-29.812,29.812v66.714c-54.49,15.594-94.489,65.857-94.489,125.288c0,59.431,39.998,109.694,94.489,125.288v114.783c0,16.438,13.374,29.812,29.812,29.812h234.733c2.785,0,5.455-1.106,7.425-3.075l71.821-71.822c1.969-1.969,3.075-4.64,3.075-7.425V29.812C466.525,13.374,453.152,0,436.714,0z M149.471,21h287.243c4.858,0,8.811,3.953,8.811,8.812v31.689H140.659V29.812C140.659,24.953,144.612,21,149.471,21z M46.17,221.813c0-60.263,49.027-109.29,109.29-109.29c60.263,0,109.29,49.027,109.29,109.29s-49.027,109.291-109.29,109.291C95.197,331.104,46.17,282.076,46.17,221.813z M140.659,461.884V351.258c4.86,0.552,9.797,0.846,14.802,0.846c39.135,0,74.292-17.347,98.195-44.752h64.336c5.799,0,10.5-4.701,10.5-10.5s-4.701-10.5-10.5-10.5h-49.381c9.133-15.95,14.984-34.005,16.644-53.242h32.736c5.799,0,10.5-4.701,10.5-10.5c0-5.799-4.701-10.5-10.5-10.5h-32.603c-1.42-19.194-7.02-37.242-15.886-53.241h48.488c5.799,0,10.5-4.701,10.5-10.5c0-5.799-4.701-10.5-10.5-10.5h-62.974c-23.918-28.323-59.67-46.347-99.558-46.347c-5.005,0-9.942,0.294-14.802,0.846v-9.867h304.866v316.372h-42.009c-16.439,0-29.811,13.374-29.811,29.811v42.011H149.471C144.612,470.695,140.659,466.743,140.659,461.884z M394.705,455.845v-27.16c0-4.859,3.953-8.811,8.811-8.811h27.16L394.705,455.845z"/><path d="M359.246,158.869h34.87c5.799,0,10.5-4.701,10.5-10.5c0-5.799-4.701-10.5-10.5-10.5h-34.87c-5.799,0-10.5,4.701-10.5,10.5C348.746,154.168,353.447,158.869,359.246,158.869z"/><path d="M359.246,233.11h34.87c5.799,0,10.5-4.701,10.5-10.5c0-5.799-4.701-10.5-10.5-10.5h-34.87c-5.799,0-10.5,4.701-10.5,10.5C348.746,228.409,353.447,233.11,359.246,233.11z"/><path d="M359.246,307.352h34.87c5.799,0,10.5-4.701,10.5-10.5s-4.701-10.5-10.5-10.5h-34.87c-5.799,0-10.5,4.701-10.5,10.5S353.447,307.352,359.246,307.352z"/><path d="M394.116,381.593c5.799,0,10.5-4.701,10.5-10.5s-4.701-10.5-10.5-10.5h-98.225c-5.799,0-10.5,4.701-10.5,10.5s4.701,10.5,10.5,10.5H394.116z"/><path d="M236.982,168.845l-12.81-12.81c-3.45-3.449-8.036-5.349-12.915-5.349s-9.465,1.9-12.915,5.349l-67.19,67.19l-18.573-18.573c-3.449-3.448-8.036-5.348-12.914-5.348c-4.878,0-9.465,1.9-12.914,5.349l-12.813,12.812c-7.12,7.121-7.12,18.708,0.001,25.829l44.297,44.296c3.45,3.451,8.037,5.351,12.916,5.351c0,0,0.001,0,0.001,0c4.878,0,9.465-1.9,12.913-5.349l92.917-92.917C244.103,187.554,244.103,175.966,236.982,168.845z M131.151,270.807l-40.429-40.428l8.942-8.942l24.062,24.062c4.101,4.101,10.749,4.101,14.85,0l72.681-72.681l8.942,8.942L131.151,270.807z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>`;
        }
        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return (
          // <View style={{backgroundColor: 'red',flex:1}}>
            <SvgUri
              style={{ justifyContent: 'center', alignSelf: 'center' }}
              width="25"
              height="25"
              svgXmlData={iconName}
          />
          // </View>
        );
      },
    }),
    tabBarOptions: {
      activeTintColor: '#fff',
      activeBackgroundColor:'red',
      inactiveTintColor: 'gray',
    },
  }
)

class LabHomeScreen extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
    };
  }


  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }


  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }
  handleBackPress = () => {
    this.props.navigation.navigate('DashboardScreen');
    return true;
  }


  render() {
    return (
      <Container>
      {/* <ProgressDialog
              visible={this.props.orderLoading||this.props.searchLoading||this.props.billLoading||this.props.dashLoading}
              title=""
              message="در حال بارگزاری ..."
            /> */}
        <Content contentContainerStyle={{ flex: 1 }}>
          
          <Tab screenProps={this.props.navigation.getParam('index')}/>
        </Content>
        <Fab
          style={{ backgroundColor: '#e7be00', position: 'absolute', bottom: 40, width: 40, height: 40, right: 3 }}
          position="bottomRight"
          onPress={() => this.props.navigation.navigate('DashboardLab')}>
          <Icon name="ios-home-outline" />
        </Fab>
      </Container>
    
    );
  }
}

export default LabHomeScreen
