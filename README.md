# ReactNative探索验证问题
## 开发环境  
 * ReactNative: ~0.55.4 最新版
 * react：16.3.1  
 * Node.js：8.11.x
 * IDE: Visual Studio Code  
 * 真机运行工具： Expo  
 [https://expo.io/tools](https://expo.io/tools)
 * 调试：Visual Studio Code + Chrome + React Developer Tools  
 * UI：ReactNative + Ant Design Mobile 
 * 依赖包管理工具： yarn + npm
 * 工程创建工具： create-react-native-app
 
## UI组件支持情况  
ReactNative 和 Ant Design Mobile同时有组件时，推荐使用Ant Design Mobile

| 功能 | 支持情况 | ReactNative对应组件 | Ant Design Mobile对应组件 | 第三方组件 |备注|
| ---- | ---- | ---- |---- |---- |---- |
| 布局 | 支持 | FlexBox(style） | Flex(组件) |||
| 文本展示 | 支持 | Text | |||
| 图片展示 | 支持 | Image| |[react-native-img-cache](https://github.com/wcandillon/react-native-img-cache)||
| 输入 | 支持 | TextInput | 如配合List使用，可使用InputItem、TextareaItem 多行输入 |||
| 活动指示器(loading) | 支持 | ActivityIndicator <br>(如需弹HUD遮挡操作效果ProgressBarAndroid<br>ProgressViewIOS) | ActivityIndicator |||
| 进度条 | 支持 |ProgressBarAndroid<br>ProgressViewIOS |Progress |||  
| 列表 | 支持 | FlatList<br>SectionList(带分组列表) |List<br>有常用Item样式，使用简便<br>(如需分组需滚动视图组合List使用)<br>Accordion 可收缩展开 ||如果Item是重复的，推荐使用FlatList，有专门的renderItem去构建行|
| 宫格视图 | 支持 | |Grid |||
| 卡片视图 | 支持 | |Card |||  
| 选中 | 支持 |  |CheckBox<br>Radio |||  
| 动作列表 | 支持 | ActionSheetIOS<br>只支持iOS |ActionSheet |||  
| 气泡下拉菜单 | 支持 | |Popover |||  
| 横向弹出菜单 | 不支持 | | ||需找找第三方|  
| 分段选择器 | 支持 | SegmentedControlIOS <br>只支持iOS |SegmentedControl |||  
| 滑动开关 | 支持 | Switch | Switch |||  
| 提示 | 支持 |ToastAndroid<br>只支持Android | Toast |||  
| 对话框 | 支持 | Modal | Modal |[react-native-modal](https://github.com/react-native-community/react-native-modal)||  
| 轮播 | 支持 |ViewPagerAndroid<br>只支持Android，需二次开发 | Carousel |||  
| 搜索 | 支持 | | SearchBar |||  
| 角标 | 支持 | | Badge |||  
| 刷新、加载更多 | 支持 | RefreshControl<br>只支持下拉刷新 | PullToRefresh |||  
| 滑动操作 | 支持 | | SwipeAction |||  
| 导航栏 | 支持 |NavigatorIOS<br>只支持iOS |NavBar |[react-native-navbar](https://github.com/react-native-community/react-native-navbar)||  
| 标签栏<br>(底部，用于切换模块) | 支持 |TabBarIOS<br>只支持iOS | TabBar |||  
| 标签页<br>(可滑动，一般用于切换栏目) | 支持 | | Tabs |||  
| 选择器 | 支持 | Picker<br>PickerIOS| Picker<br>PickerView |||  
| 时间选择 | 支持 |DatePickerIOS<br>只支持iOS | DatePickerView<br>DatePicker |||  
| 图片选择 | 支持 | ImagePickerIOS<br>只支持iOS| ImagePicker | [react-native-camera](https://github.com/react-native-community/react-native-camera)||  
| 图片编辑 | 支持 | ImageEditor| |||  
| 拍照 | 支持 | |  | [react-native-camera](https://github.com/react-native-community/react-native-camera)||  
| 扫码 | 支持 | |  | [react-native-camera](https://github.com/react-native-community/react-native-camera)|| 
| 视频 | 支持 | | |[react-native-video](https://github.com/react-native-community/react-native-video)||  
| 音频播放 | 支持 | |  | [react-native-sound](https://github.com/zmxv/react-native-sound)||  
| 音频录制 | 支持 | |  | [react-native-audio](https://github.com/jsierles/react-native-audio)|这个star有点少，可以再找找|  

优秀组件库汇总   
[https://blog.csdn.net/web_longboss/article/details/75306244](https://blog.csdn.net/web_longboss/article/details/75306244)   
[https://github.com/jondot/awesome-react-native](https://github.com/jondot/awesome-react-native)   

## Android原生与ReactNative工程代码结合
待添加

## iOS原生与ReactNative工程代码结合
待添加

## ReactNative内部跳转指定页面
是否支持：支持

* [ReactNative内部跳转指定页面技术文档](ReactNative内部跳转指定页面技术文档)  

## Android原生跳转ReactNative指定页面
是否支持：

* [Android原生跳转ReactNative指定页面](Android原生跳转ReactNative指定页面)  

## iOS原生跳转ReactNative指定页面
是否支持：

* [iOS原生跳转ReactNative指定页面](iOS原生跳转ReactNative指定页面)

## ReactNative跳转Android原生指定页面
是否支持：

* [ReactNative跳转Android原生指定页面](ReactNative跳转Android原生指定页面)

## ReactNative跳转iOS原生指定页面
是否支持：

* [ReactNative跳转iOS原生指定页面](ReactNative跳转iOS原生指定页面)

## Cookie公用
[React Native Cookie使用指南](https://www.jianshu.com/p/9b72f94c432e)  
待实践验证

## 数据存储 
- AsyncStorage 
- realm
- SQLite   

SQLite库  
https://github.com/andpor/react-native-sqlite-storage

react native 实战系列教程之数据存储
https://blog.csdn.net/it_talk/article/details/53020068

AsyncStorage为Key-Value键值对存储，类似于原生的SharePreference(Android)和NSUserDefault(iOS)，适用于存储些系统设置、全局变量等简单的key-value数据   
庞大的数据，数据结构复杂的数据，需要使用SQLite/Realm  

待实践验证，及验证原生与ReactNative如何共用   

结论：
待添加

## 自定义组件开发
待梳理添加

## 远程热更新
机制？  
引入一个新的RN第三方库，APP是否需要更新版本？ 
服务器如何部署？  
APP如何配置？