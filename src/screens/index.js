import { Navigation } from 'react-native-navigation';

import Home from '../component/home';
import Task from '../component/task';
import Daily from '../component/daily';
import Me from '../component/me';
import SelfInfo from '../component/selfInfo';
import Result from '../component/result';
import Login from '../component/login';
// register all screens of the app (including internal ones)
export function registerScreens(store: {}, Provider: {}) {
    Navigation.registerComponent('Home', () => Home,store, Provider);
    Navigation.registerComponent('Task', () => Task,store, Provider);
    Navigation.registerComponent('Daily', () => Daily,store, Provider);
    Navigation.registerComponent('Me', () => Me,store, Provider);
    Navigation.registerComponent('SelfInfo', () => SelfInfo,store, Provider);
    Navigation.registerComponent('Result', () => Result,store, Provider);
    Navigation.registerComponent('Login', () => Login,store, Provider);
}

export function startLoginScreen(){
    Navigation.startSingleScreenApp({
        screen: {
            screen: 'Login', // unique ID registered with Navigation.registerScreen
        }
    });
}

export function startTabsScreen(){
    Navigation.startTabBasedApp({
        tabs: [
            {
                label: '消息中心',
                screen: 'Home', // this is a registered name for a screen
                //icon:  (<Icon type="check" size="lg" color="red" />),
                // selectedIcon: require('./src/resource/ic_back_dark.png'), // iOS only
                title: '消息中心'
            },
            {
                label: '任务',
                screen: 'Task', // this is a registered name for a screen
                //icon:   (<Icon type="check" size="lg" color="red" />),
                // selectedIcon: require('./src/resource/ic_back_dark.png'), // iOS only
                title: '任务'
            },
            {
                label: '日常管理',
                screen: 'Daily', // this is a registered name for a screen
                // icon:  require('./src/resource/ic_back_dark.png'),
                // selectedIcon: require('./src/resource/ic_back_dark.png'), // iOS only
                title: '日常管理'
            },
            {
                label: '个人中心',
                screen: 'Me',
                // icon: require('./src/resource/ic_back_dark.png'),
                // selectedIcon: require('./src/resource/ic_back_dark.png'), // iOS only
                title: '个人中心'
            }
        ]
    })
}