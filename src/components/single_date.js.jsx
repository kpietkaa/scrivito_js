import PropTypes from 'prop-types';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

class SingleDate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
    };
  }

  startDate(date) {
    return (date == null) ? null : moment(date);
  }

  render() {
    const obj = this.props.obj;
    return (
      <SingleDatePicker
        date={ this.startDate(obj.get('publishedAt')) }
        onDateChange={ date => obj.update({ publishedAt: date.toDate() }) }
        focused={ this.state.focused }
        onFocusChange={ ({ focused }) => this.setState({ focused }) }
      />
    );
  }
}

SingleDate.PropTypes = {
  obj: PropTypes.object,
};

export default Scrivito.React.connect(SingleDate);
