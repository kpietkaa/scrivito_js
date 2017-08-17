import textExtractFromWidgetlist from 'utils/text_extract_from_widgetlist';

const BaseDepartmentPage = Scrivito.createObjClass({
  name: 'DepartmentPage',
  attributes: {
    body: ['widgetlist', { only: 'ColumnWidget' }],
    title: 'string',
    navigationSection: 'widgetlist',
    childOrder: 'referencelist',
  },
});

class DepartmentPage extends BaseDepartmentPage {
  navigationOptions() {
    return {
      heigthClassName: 'full-height',
    };
  }

  textExtract() {
    return [
      'navigationSection',
      'body',
    ].map(
      attributeName => textExtractFromWidgetlist(this.get(attributeName))
    ).join(' ');
  }
}

Scrivito.registerClass('DepartmentPage', DepartmentPage);

Scrivito.provideUiConfig(DepartmentPage, {
  title: 'DepartmentPage',
  description: 'A page for department',
  attributes: {
    title: {
      title: 'Title',
      description: 'Tile of department page',
    },
  },
  titleForContent: obj => obj.get('title'),
  descriptionForContent: obj => `path: ${obj.path}`,
});


Scrivito.provideComponent(DepartmentPage, obj =>
  <Scrivito.React.Content tag='div' content={ obj } attribute='body' />
);

export default DepartmentPage;
