import React, { Component, PropTypes } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Platform
} from 'react-native';

import { connect } from 'react-redux';

import Colors from '../themes/Colors';
import base from '../themes/BaseStyles';
import Fonts from '../themes/Fonts';

import * as navigationActions from '../actions/navigation_act';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { bindActionCreators } from 'redux';
import { Actions } from 'react-native-router-flux';

import _ from 'lodash';

export const mapStateToProps = state => ({
    alpha: state.settingsState.alpha,
    mod: state.settingsState.mod,
    legend: state.settingsState.legend,
    secondLegend: state.settingsState.secondLegend
});

export const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(navigationActions, dispatch)
});

class NavDrawer extends Component {

    static contextTypes = {
        drawer: PropTypes.object.isRequired
    }

    constructor(props) {
        super(props);
        this.goto = this.goto.bind(this);
    }

    goto(route) {
        this.context.drawer.close();
        this.props.actions.changeParent(route);
        if(route == 'Home') {

        } else if(route == 'Favourites') {
            Actions.favouriteTab();
        } else if(route == 'Search') {
            Actions.searchTab();
        } else if(route == 'Settings') {
            Actions.settingsTab();
        } else {
            console.log('UNDEFINED');
        }
    }

    render() {
        var paddingView;
        if(Platform.OS === 'ios') {
            paddingView = <View style = {{marginTop: 15}} />
        } else {
            paddingView = <View />
        }
        return (
            <View style = {[styles.drawerContainer, {backgroundColor: this.props.mod}]}>
                {paddingView}
                <ScrollView style = {styles.navScroll}>
                    <TouchableOpacity onPress = {() => {this.goto('Home')}}>
                        <View style = {[styles.navItem, {backgroundColor: this.props.mod}]}>
                            <View style = {styles.navIconContainer}>
                                <FontAwesome name = "home" size = {26} allowFontScaling = {false} color = {this.props.legend}/>
                            </View>
                            <View style = {styles.navTextContainer}>
                                <Text style = {[styles.navText, {color: this.props.secondLegend}]}>Home</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style = {[styles.separator, {backgroundColor: this.props.legend}]} />

                    <TouchableOpacity onPress = {() => {this.goto('Favourites')}}>
                        <View style = {[styles.navItem, {backgroundColor: this.props.mod}]}>
                            <View style = {styles.navIconContainer}>
                                <FontAwesome name = "star" size = {26} allowFontScaling = {false} color = {this.props.legend}/>
                            </View>
                            <View style = {styles.navTextContainer}>
                                <Text style = {[styles.navText, {color: this.props.secondLegend}]}>Favourites</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style = {[styles.separator, {backgroundColor: this.props.legend}]} />

                    <TouchableOpacity onPress = {() => {this.goto('Search')}}>
                        <View style = {[styles.navItem, {backgroundColor: this.props.mod}]}>
                            <View style = {styles.navIconContainer}>
                                <FontAwesome name = "search" size = {26} allowFontScaling = {false} color = {this.props.legend}/>
                            </View>
                            <View style = {styles.navTextContainer}>
                                <Text style = {[styles.navText, {color: this.props.secondLegend}]}>Search</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style = {[styles.separator, {backgroundColor: this.props.legend}]} />

                    <TouchableOpacity onPress = {() => {this.goto('Settings')}}>
                        <View style = {[styles.navItem, {backgroundColor: this.props.mod}]}>
                            <View style = {styles.navIconContainer}>
                                <FontAwesome name = "cog" size = {26} allowFontScaling = {false} color = {this.props.legend}/>
                            </View>
                            <View style = {styles.navTextContainer}>
                                <Text style = {[styles.navText, {color: this.props.secondLegend}]}>Settings</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <View style = {[styles.separator, {backgroundColor: this.props.legend}]} />

                </ScrollView>
            </View>
        )
    }

}

const baseStyles = _.extend(base.general, {
    navScroll: {
        flex: 1
    },
    navItem: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20
    },
    navIconContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    navTextContainer: {
        justifyContent: 'center',
        marginRight: 10,
        flex: 3
    },
    navText: {
        fontFamily: Fonts.base,
        fontSize: 16,
    },
    separator: {
        height: 2,
    },
    drawerContainer: {
        alignSelf: 'stretch',
        alignItems: 'stretch',
        flex: 1,
    }
});

const styles = StyleSheet.create(baseStyles);

export default connect(mapStateToProps)(NavDrawer);
