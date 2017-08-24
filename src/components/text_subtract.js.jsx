import PropTypes from 'prop-types';

class TextSubtract extends React.Component {

  subtract() {
    const body = this.props.body;
    return (body.length <= 250) ? body : body.substr(0, 250) + '...';
  }

  render() {
    return (
      <div>
        { this.subtract() }
      </div>
    );
  }
}

TextSubtract.propTypes = {
  body: PropTypes.string.isRequired,
};

export default Scrivito.React.connect(TextSubtract);
