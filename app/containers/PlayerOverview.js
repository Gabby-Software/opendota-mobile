import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    ListView
} from 'react-native';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import * as playerOverviewActions from '../actions/player_overview_act';
import { Actions } from 'react-native-router-flux';

import Spinner from 'react-native-spinkit';
import _ from 'lodash';

import ProfileCard from '../components/ProfileCard';
import HeroesCard from '../components/HeroesCard';
import MatchesCard from '../components/MatchesCard';

import Colors from '../themes/Colors';
import base from '../themes/BaseStyles';
import Fonts from '../themes/Fonts';

export const mapStateToProps = state => ({
    overview: state.playerOverviewState.overview,
    isLoadingOverview: state.playerOverviewState.isLoadingOverview,
    isEmptyOverview: state.playerOverviewState.isEmptyOverview,
    contextId: state.navigationState.contextId
});

export const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(playerOverviewActions, dispatch)
});

class PlayerOverview extends Component {

    constructor(props) {
        super(props);
        this.matchesDS = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    }

    componentWillMount() {
        this.props.actions.fetchOverview(this.props.contextId);
    }

    render() {
        var content;
        if(this.props.isLoadingOverview) {
            content = (
                <View style = {styles.contentContainer}>
                    <Spinner isVisible = {true} size = {100} type = 'Pulse' color = {Colors.skyDolchLegendHex} />
                </View>
            )
        } else if(this.props.isEmptyOverview) {
            content = (
                <View style = {styles.contentContainer}>
                    <Text style = {styles.noDataText}>No data found</Text>
                </View>
            )
        } else {
            content = (
                <ScrollView>
                    <ProfileCard info = {this.props.overview} />
                    <HeroesCard heroes = {this.props.overview.heroes_list} />
                    <MatchesCard matches = {this.props.overview.matches} />
                </ScrollView>
            )
        }
        return(
            <View style = {styles.container}>
                {content}
            </View>
        )
    }

}

const baseStyles = _.extend(base.general, {

});
const styles = StyleSheet.create(baseStyles);

export default connect(mapStateToProps, mapDispatchToProps)(PlayerOverview);
