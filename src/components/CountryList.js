import React from 'react';
import { SectionList } from 'react-native';
import PropTypes from 'prop-types';
import { CountryListCell, CountryListHeader } from 'components';

const CountryList = ({ sections }) => {
  return (
      <SectionList
        stickySectionHeadersEnabled={false}
        keyExtractor={item => item.name}
        renderItem={({ item }) => <CountryListCell country={item} /> }
        renderSectionHeader={({ section: { title } }) => <CountryListHeader title={title} /> }
        sections={sections}
      />
  )
};

CountryList.propTypes = {
  sections: PropTypes.array.isRequired,
};

export default CountryList;
