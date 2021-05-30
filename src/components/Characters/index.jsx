import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import * as styles from './characters.scss';
import Pagination from '../Pagination';

const propTypes = {
  getCharacters: PropTypes.func,
  charactersData: PropTypes.object
};

const defaultProps = {
  charactersData: {},
  getCharacters: () => {}
};

export default class Characters extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }

  componentDidMount() {
    this.props.getCharacters(this.state.currentPage);
  }

  render() {
    const { charactersData } = this.props;
    const { results = [] } = charactersData;
    return (
      <section className={`${styles.characterWrapper} flex wrap`}>
        {results.length > 0 &&
          results.map((item) => (
            <Card
              key={item.id}
              dataObj={{
                STATUS: item && item.status,
                SPECIES: item && item.species,
                GENDER: item && item.gender,
                ORIGIN: item && item.origin && item.origin.name,
                LOCATION: item && item.location && item.location.name
              }}
              imgSrc={item && item.image}
              heading={item && item.name}
            />
          ))}
        <Pagination
          contentLength={(results && results.length) || 0}
          currentPage={this.state.currentPage}
          limit={20}
          onChange={(currentPage) => {
            this.props.getCharacters(currentPage);
            this.setState({
              currentPage
            });
          }}
        />
      </section>
    );
  }
}

Characters.propTypes = propTypes;
Characters.defaultProps = defaultProps;
