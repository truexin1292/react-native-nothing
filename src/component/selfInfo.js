import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet,
    PixelRatio,
    ScrollView,
    TextInput,
    Navigator,
    StatusBar
} from 'react-native';
import { Flex, Radio, Checkbox, WingBlank, Icon,Grid,Button,List,NavBar,InputItem,Picker,TextareaItem, DatePicker } from 'antd-mobile';
import { inject, observer } from 'mobx-react/native';
import { Navigation } from 'react-native-navigation';

const Item = List.Item;
const Brief = Item.Brief;
const CheckboxItem = Checkbox.CheckboxItem;

const InfoList = ({title, rightContent}) => (
    <Flex style={styles.infoList}>
        <View style={styles.listName}>
            <Text style={styles.listTitle}>{title}</Text>
        </View>
        <Flex.Item>
            {
                rightContent
            }
        </Flex.Item>
    </Flex>
)

@inject('User')
@observer
export default class Index extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({
        title: "调休假列表",
        headerRight: <Text style={styles.navigationRightText} onPress={() => navigation.navigate('LeaveAward')}>申请</Text>,
    });
    constructor(props) {
        super(props);
        this.state = {
            pickerValue: [],
        }
    }
    componentWillMount() {
        this.props.navigator.toggleTabs({
            animated: false,
            to: 'hidden', // required, 'hidden' = hide tab bar, 'shown' = show tab bar
        });
        //请求个人的详细信息
        this.props.User.getPersonDetail();
    }
    componentWillUnmount() {
        this.props.navigator.toggleTabs({
            animated: false,
            to: 'shown', // required, 'hidden' = hide tab bar, 'shown' = show tab bar
        });
    }
    render() {
        const userDetail = this.props.User.userDetail;
        let prc_former_name, sex, dob, prc_np_province_desc, prc_np_city_desc, mobile_no, office_no, prc_qq, home_no, comp_email, pers_email;

        if(userDetail){
            prc_former_name = userDetail.prc_former_name;
            sex = userDetail.sex;
            dob = userDetail.dob?userDetail.dob.splice('T')[0]: '';
            prc_np_province_desc = userDetail.prc_np_province_desc;
            prc_np_city_desc = userDetail.prc_np_city_desc;
            mobile_no = userDetail.mobile_no;
            office_no = userDetail.office_no;
            prc_qq = userDetail.prc_qq;
            home_no = userDetail.home_no;
            comp_email = userDetail.comp_email;
            pers_email = userDetail.pers_email;
        }
        let district = ''; //籍贯
        if(prc_np_province_desc && prc_np_city_desc){
            district = prc_np_province_desc + prc_np_city_desc
        }
        return (
            <ScrollView>
                <List>
                    <InputItem value={prc_former_name? prc_former_name: ''} editable={false}><Text style={styles.listName}>昵称：</Text></InputItem>
                    <InputItem value={sex? sex == 'M'? '男': '女': ''} editable={false}><Text style={styles.listName}>性别：</Text></InputItem>
                    <InputItem value={dob? dob:''} editable={false}><Text style={styles.listName}>出生日期：</Text></InputItem>
                    <InputItem value={district} editable={false}><Text style={styles.listName}>籍贯：</Text></InputItem>
                    <InputItem value={mobile_no?mobile_no:''} editable={false}><Text style={styles.listName}>手机：</Text></InputItem>
                    <InputItem value={home_no?home_no:''} editable={false}><Text style={styles.listName}>家庭电话：</Text></InputItem>
                    <InputItem value={office_no?office_no:''} editable={false}><Text style={styles.listName}>工作电话：</Text></InputItem>
                    <InputItem value={prc_qq?prc_qq:""} editable={false}><Text style={styles.listName}>QQ：</Text></InputItem>
                    <InputItem value={comp_email?comp_email:""} editable={false}><Text style={styles.listName}>工作邮箱：</Text></InputItem>
                    <InputItem value={pers_email?pers_email:""} editable={false}><Text style={styles.listName}>私人邮箱：</Text></InputItem>
                </List>
                <WingBlank>
                    <Button style={styles.button} type="primary" onPressIn={
                        () => {
                            this.props.navigator.push({
                                screen: 'EditSelfInfo',
                                title: '编辑个人信息'
                            })
                        }
                    }>
                        编辑
                    </Button>
                </WingBlank>
            </ScrollView>

        )
    }
}

const styles = StyleSheet.create({
    infoList: {
    },
    listName: {
        marginRight: 100,
        width: 150,
    },
    listTitle: {
        fontSize: 18
    },
    button: {
        height: 50,
        borderRadius: 3,
        marginTop: 45,
        marginBottom: 20,
        backgroundColor: '#3ba662',
        borderColor: 'transparent'
    },
    list: {
        height:15
    },
    radio: {
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderStyle: 'solid',
        marginRight: 10,
        borderRadius: 10,
        fontSize: 10,
    },
});