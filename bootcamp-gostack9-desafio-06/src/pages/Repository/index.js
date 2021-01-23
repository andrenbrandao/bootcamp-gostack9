import React, { Component } from 'react';
import { WebView } from 'react-native-webview';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';

export default class Repository extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('repository').name,
  });

  state = {
    repository: {},
  };

  static propTypes = {
    navigation: PropTypes.shape({
      getParam: PropTypes.func,
    }).isRequired,
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const repository = navigation.getParam('repository');

    this.setState({ repository, loading: false });
  }

  renderLoadingSpinner = () => {
    return (
      <ActivityIndicator
        color="#333"
        style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}
      />
    );
  };

  render() {
    const { repository } = this.state;

    return (
      <WebView
        startInLoadingState
        renderLoading={this.renderLoadingSpinner}
        source={{ uri: repository.html_url }}
        style={{ flex: 1 }}
      />
    );
  }
}
