const ColumnWidget = Scrivito.createWidgetClass({
  name: 'ColumnWidget',
  attributes: {
    nrOfColumns: ['enum', { validValues: ['1', '2', '3', '4'] }],
    column1: 'widgetlist',
    column2: 'widgetlist',
    column3: 'widgetlist',
    column4: 'widgetlist',
  },
});

Scrivito.registerClass('ColumnWidget', ColumnWidget);

Scrivito.provideUiConfig(ColumnWidget, {
  title: 'Column',
  description: 'A widget with up to 4 columns',
  attributes: {
    nrOfColumns: {
      title: 'Number of columns',
      description: 'The number of columns between 1 and 4',
    },
  },
});

Scrivito.provideComponent(ColumnWidget, widget => {
  let nrOfColumns = parseInt(widget.get('nrOfColumns'), 10);
  if (![1, 2, 3, 4].includes(nrOfColumns)) {
    // fallback value, if missing or invalid
    nrOfColumns = 2;
  }
  const colSize = 12 / nrOfColumns;
  const cols = [];
  [...Array(nrOfColumns).keys()].forEach(index => {
    const colNr = index + 1;

    cols.push(
      <Scrivito.React.Content
        tag='div'
        className={ `col-md-${colSize}` }
        content={ widget }
        attribute={ `column${colNr}` }
        key={ colNr } />
    );
  });

  return (
    <div className='row'>
      { cols }
    </div>
  );
});

export default ColumnWidget;
