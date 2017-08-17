import textExtractFromHtml from 'utils/text_extract_from_html';

const BaseTextWidget = Scrivito.createWidgetClass({
  name: 'TextWidget',
  attributes: {
    text: 'html',
    centered: ['enum', { validValues: ['yes', 'no'] }],
  },
});

class TextWidget extends BaseTextWidget {
  textExtract() {
    return textExtractFromHtml(this.get('text'));
  }
}

Scrivito.registerClass('TextWidget', TextWidget);

Scrivito.provideUiConfig(TextWidget, {
  title: 'Text',
  description: 'A widget with html text.',
  attributes: {
    centered: {
      title: 'Centered',
      description: 'Should this text be centered?',
    },
    text: {
      title: 'Text',
      description: 'The actual source code of this text',
    },
  },
});

Scrivito.provideComponent(TextWidget, widget =>
  <Scrivito.React.Content
    tag='div'
    className={ widget.get('centered') === 'yes' && 'text-center' }
    content={ widget }
    attribute='text' />
);

export default TextWidget;
