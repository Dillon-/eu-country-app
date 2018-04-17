import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import { CountryList, ErrorMessage } from 'components';
import { getRegionalBloc } from 'services/RESTCountries';

export default class CountryListContainer extends Component {
  state = { loading: true, countries: [] };

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    try {
      const { regionalBloc } = this.props;
      const countries = await getRegionalBloc(regionalBloc, ['name', 'subregion', 'capital', 'languages']);
      this.setState({ countries, loading: false, error: undefined });
    } catch (e) {
      this.setState({ loading: false, error: `Uh oh! ${e.message}` })
    }
  }

  onRefresh = async () => {
    await this.setState({ loading: true, error: undefined });
    this.loadData();
  }

  render() {
    if (this.state.loading) {
      return <ActivityIndicator size="large" color="#ffffff" />;
    } else if (this.state.error) {
      return <ErrorMessage onRetry={this.onRefresh} message={this.state.error} />;
    }

    return <CountryList sections={[{ title: 'Europe', data: this.state.countries }]} />;
  }
}

CountryListContainer.propTypes = {
  regionalBloc: PropTypes.string.isRequired,
};
