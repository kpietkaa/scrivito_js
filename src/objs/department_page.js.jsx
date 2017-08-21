const DepartmentPage = Scrivito.createObjClass({
  name: 'DepartmentPage',
  attributes: {
    body: ['widgetlist', { only: 'ColumnWidget' }],
    title: 'string',
    navigationSection: 'widgetlist',
    childOrder: 'referencelist',
  },
});

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
