import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Platform,
    PixelRatio,
    TouchableOpacity,
    Image,
    TouchableHighlight

} from 'react-native';
import { startLoginScreen } from '../screens';
import { Flex, WhiteSpace,Icon,Grid,Button,List, WingBlank, Modal} from 'antd-mobile';
import { inject, observer } from 'mobx-react/native';
import { Navigation } from 'react-native-navigation';
import I18n from '../i18n/i18n';
import { getLanguages } from 'react-native-i18n'

const Item = List.Item;
const Brief = Item.Brief;
const operation = Modal.operation;

const Separator = () => (
    <Flex
        style={styles.separator}
    />
);

@inject('User')
@observer
export default class Index extends Component {
    render() {
        getLanguages().then(languages => {
            console.log(languages) // ['en-US', 'en']
        })
        return (
            <View>
                <Separator/>
                <View style={styles.personInfo}>
                    <View style={styles.imageWrap}>
                        <TouchableOpacity onPress={() => {
                            operation();
                            console.log(operation)
                        }}>
                            <Image style={styles.image} source={{url: 'https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png'}}/>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.infoContent}>
                        <List>
                            <Item
                                multipleLine
                                extra={<Brief>个人资料</Brief>}
                                arrow="horizontal"
                                onClick={() => this.props.navigator.push({
                                    screen: 'SelfInfo',
                                    title: '个人信息'
                                })}
                            >
                                <Text style={styles.personName}>程玲</Text>
                                <Brief style={styles.smallFont}>Manager</Brief>
                                <Brief style={styles.personNum}>工号: ES0001</Brief>
                            </Item>
                        </List>
                    </View>
                </View>
                <Separator/>
                <List>
                    <Item
                        thumb={<Icon type={'\ue686'} />}
                        arrow="horizontal"
                        onClick={() => this.props.navigator.push({
                            screen: 'SelfInfo',
                            animated: false,
                            title: '图表'
                        })}
                    ><Text style={styles.textLeft}>地址</Text></Item>
                    <Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png" arrow="horizontal">紧急联系人</Item>
                    <Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png" arrow="horizontal">银行账号</Item>

                </List>
                <Separator/>
                <List>
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        arrow="horizontal"
                        onClick={() => {}}
                    >工资单</Item>
                    <Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png" arrow="horizontal">IR56B</Item>
                </List>
                <Separator/>
                <List>
                    <Item
                        thumb="https://zos.alipayobjects.com/rmsportal/dNuvNrtqUztHCwM.png"
                        arrow="horizontal"
                        onClick={() => {}}
                    >修改密码</Item>
                    <Item thumb="https://zos.alipayobjects.com/rmsportal/UmbJMbWOejVOpxe.png" arrow="horizontal">更新基数数据</Item>
                </List>
                <WhiteSpace/>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    personInfo: {
        display: 'flex',
        flexDirection: 'row',
    },
    imageWrap: {
        width: 70,
        paddingLeft: 10,
        paddingTop: 10,
        borderTopWidth: 1/PixelRatio.get(),
        borderBottomWidth: .5,
        borderStyle: 'solid',
        borderColor: '#dddddd',
    },
    infoContent: {
        flex: 1,
    },
    personName: {
        paddingTop: 5,
        fontSize: 18,
    },
    separator: {
        height: 10,
        backgroundColor: '#f2f2f2'
    },
    smallFont: {
        fontSize: 12,
    },
    personNum: {
        paddingBottom: 5,
        fontSize: 12,
    },
    image: {
        width: 55,
        height: 55,
        paddingRight: 15,
    },
    iconColor: {
        color: 'red',
        fontSize: 50
    },
    textLeft: {
        fontSize: 18,
        paddingLeft: 10,
        color: '#333333',
    }
});