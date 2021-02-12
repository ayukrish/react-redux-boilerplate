import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import Pagination from '../Pagination';
import * as styles from './locations.scss';

const propTypes = {
  getLocations: PropTypes.func,
  locationData: PropTypes.object
};

const defaultProps = {
  locationData: {},
  getLocations: () => {}
};

export default class Locations extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }

  componentDidMount() {
    this.props.getLocations(this.state.currentPage);
  }

  render() {
    const { locationData } = this.props;
    const { results = {} } = locationData;
    return (
      <section className={`${styles.locationWrapper} flex wrap`}>
        {results.length > 0 &&
          results.map((item) => (
            <Card
              key={item.id}
              dataObj={{
                TYPE: item && item.type,
                DIMENSION: item && item.dimension
              }}
              heading={item && item.name}
            />
          ))}
        <Pagination
          contentLength={(results && results.length) || 0}
          currentPage={this.state.currentPage}
          limit={20}
          onChange={(currentPage) => {
            this.props.getLocations(currentPage);
            this.setState({
              currentPage
            });
          }}
        />
      </section>
    );
  }
}

Locations.propTypes = propTypes;
Locations.defaultProps = defaultProps;
