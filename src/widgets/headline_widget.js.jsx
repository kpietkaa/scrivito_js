const BaseHeadlineWidget = Scrivito.createWidgetClass({
  name: 'HeadlineWidget',
  attributes: {
    headline: 'string',
    style: ['enum', { validValues: ['h1', 'h3', 'h6'] }],
    centered: ['enum', { validValues: ['yes', 'no'] }],
  },
});

class HeadlineWidget extends BaseHeadlineWidget {
  textExtract() {
    return this.get('headline');
  }
}

Scrivito.registerClass('HeadlineWidget', HeadlineWidget);

Scrivito.provideUiConfig(HeadlineWidget, {
  title: 'headline',
  titleForContent: widget => widget.get('headline'),
  description: 'A widget with a headline',
  attributes: {
    style: {
      title: 'Style',
      description: 'The style of the headline (how big it should be)',
    },
    centered: {
      title: 'Centered',
      description: 'Should this headline be centered?',
    },
  },
});

Scrivito.provideComponent(HeadlineWidget, widget => {
  const style = widget.get('style') || 'h1';
  const classNames = [style];

  if (widget.get('centered') === 'yes') {
    classNames.push('text-center');
  }

  return (
    <Scrivito.React.Content
    tag={ style }
    content={ widget }
    attribute='headline'
    className={ classNames.join(' ') } />
  );
});

export default HeadlineWidget;
