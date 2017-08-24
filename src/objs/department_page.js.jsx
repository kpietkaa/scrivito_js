const DepartmentPage = Scrivito.createObjClass({
  name: 'DepartmentPage',
  attributes: {
    body: ['widgetlist', { only: 'ColumnWidget' }],
    title: 'string',
    childOrder: 'referencelist',
  },
});

Scrivito.registerClass('DepartmentPage', DepartmentPage);

Scrivito.provideUiConfig(DepartmentPage, {
  title: 'DepartmentPage',
  description: 'A page for the department',
  titleForContent: obj => obj.get('title'),
  descriptionForContent: obj => `path: ${obj.path}`,
});


Scrivito.provideComponent(DepartmentPage, obj =>
  <Scrivito.React.Content content={ obj } attribute='body' />
);

export default DepartmentPage;
