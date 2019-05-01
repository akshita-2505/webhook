import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

import Slack1 from 'react-native-slack-webhook';

const webhookURL = 'https://hooks.slack.com/services/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';
export default class Slack extends Component {
    render() {
//donw??
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to react-native-slack-webhook!
                </Text>
                <TouchableOpacity onPress={()=> new Slack1(webhookURL).post('Hello', '#demo-project')}>
                    <Text style={styles.instructions}>
                        Press it to send message
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

