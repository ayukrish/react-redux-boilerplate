import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { tabItems } from './constants';
import styles from './tabs.scss';

const propTypes = {
  history: PropTypes.object.isRequired
};

const defaultProps = {};

class Tabs extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: tabItems[0].id
    };
  }

  componentDidMount() {
    this.setTab();
  }

  componentDidUpdate() {
    this.setTab();
  }

  setTab = () => {
    const { history } = this.props;
    const tabDetails = this.getActiveTab(history.location.pathname);
    if (tabDetails.id !== this.state.selectedTab) {
      this.setState({
        selectedTab: tabDetails.id
      });
    }
  }

  getActiveTab = route => {
    const index = tabItems.findIndex(item => item.routePath === route);
    return index === -1 ? tabItems[0] : tabItems[index];
  }

  getTabItems = () => {
    const { selectedTab } = this.state;
    return tabItems && tabItems.map(item => (
      <div
        key={item.id}
        className={`${styles.tab} ${selectedTab === item.id ? styles.active : ''}`}
      >
        <Link to={item.routePath}>{item.name}</Link>
      </div>
    ));
  }

  render() {
    return (
      <section className={styles.tabWrapper}>
        {this.getTabItems()}
      </section>
    );
  }
}

Tabs.propTypes = propTypes;
Tabs.defaultProps = defaultProps;
export default withRouter(Tabs);
