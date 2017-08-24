import PropTypes from 'prop-types';

class Time extends React.Component {
  publishDate() {
    const date = this.props.date;
    const hash = {};
    ['getDate', 'getMonth', 'getFullYear'].map(fun => {
      hash[fun] = date[fun]();
    });
    return hash;
  }

  render() {
    const date = this.publishDate();
    return (
      <div>
        { date.getDate }/{ date.getMonth + 1 }/{ date.getFullYear }
      </div>
    );
  }
}

Time.propTypes = {
  date: PropTypes.instanceOf(Date),
};

export default Scrivito.React.connect(Time);
