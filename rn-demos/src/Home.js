import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Platform,
  TouchableOpacity,
  Alert,
  Linking,
  ActivityIndicator,
  StatusBar
} from 'react-native';
import {List, SearchBar} from 'antd-mobile';
import {Font} from 'expo';
import demoList from './demoList';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      demoList: demoList,
      fontLoaded: false
    };

    this.search = this
      .search
      .bind(this);
  }

  componentWillMount() {
    StatusBar.setBarStyle('light-content');
  }

  onPressRow(rowData) {
    const {navigate} = this.props.navigation;
    if (rowData.title) {
      navigate(rowData.title);
    } else {
      console.error('demoList.js 中配置的组件必须要有 title');
    }
  }

  async componentDidMount() {
    await Font.loadAsync({'anticon': require('../assets/fonts/iconfont.ttf')});
    this.search(this.state.searchText);
    this.setState({fontLoaded: true});
  }

  search(text) {
    const regex = new RegExp(String(text), 'i');
    const filter = component => regex.test(component.title);

    this.setState({
      demoList: demoList.filter(filter),
      searchText: text
    });
  }

  render() {
    const {navigate} = this.props.navigation;
    const {demoList} = this.state;
    return (this.state.fontLoaded
      ? <View style={styles.container}>
          <Text style={styles.logoText}>react-native demos</Text>
          <SearchBar onChange={(text) => {
            this.search(text);
          }}/>
          <ScrollView>
            <List style={styles.list}>
              {demoList.map(el => (
                <List.Item
                  thumb={el.icon}
                  onClick={() => {
                  this.onPressRow(el);
                }}
                  arrow="horizontal"
                  key={el.title}>{`${el.title} ${el.description}`}</List.Item>
              ))}
            </List>
          </ScrollView>
        </View>
      : null);
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },
  logo: {
    width: 108,
    height: 108,
    alignSelf: 'center',
    marginTop: 45
  },
  logoText: {
    alignSelf: 'center',
    fontSize: 24,
    marginTop: 24,
    color: '#28B5F5'
  },
  logoTextSub: {
    alignSelf: 'center',
    fontSize: 20,
    marginTop: 12,
    color: '#626262'
  },
  list: {
    marginTop: 32,
    marginBottom: 0
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0
  },
  version: {
    textAlign: 'center',
    color: '#888',
    fontSize: 12
  },
  iconStyle: {
    fontFamily: 'anticon'
  }
});
export default Home;
