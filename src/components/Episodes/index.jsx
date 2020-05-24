import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card';
import Pagination from '../Pagination';
import * as styles from './episodes.scss';


const propTypes = {
  getEpisodes: PropTypes.func,
  episodeData: PropTypes.object
};

const defaultProps = {
  episodeData: {},
  getEpisodes: () => { }
};

export default class Episodes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1
    };
  }

  componentDidMount() {
    this.props.getEpisodes(this.state.currentPage);
  }

  render() {
    const { episodeData } = this.props;
    const { results = {} } = episodeData;
    return (
      <section className={`${styles.episodeWrapper} flex wrap`}>
        {results.length > 0 && results.map(item => (
          <Card
            key={item.id}
            dataObj={{
              EPISODE: item && item.episode,
              'AIR DATE': item && item.air_date
            }}
            heading={item && item.name}
          />
        ))}
        <Pagination
          contentLength={(results && results.length) || 0}
          currentPage={this.state.currentPage}
          limit={20}
          onChange={currentPage => {
            this.props.getEpisodes(currentPage);
            this.setState({
              currentPage
            });
          }}
        />
      </section>
    );
  }
}

Episodes.propTypes = propTypes;
Episodes.defaultProps = defaultProps;
