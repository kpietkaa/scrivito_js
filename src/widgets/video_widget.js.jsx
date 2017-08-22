import ReactModal from 'react-modal';
import YouTube from 'react-youtube';

const VideoWidget = Scrivito.createWidgetClass({
  name: 'VideoWidget',
  attributes: {
    videoId: 'string',
  },
});

class VideoWidgetComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      },
    };
    const videoId = this.props.widget.get('videoId');
    return (
      <div>
        <button onClick={ this.handleOpenModal }>Trigger Modal</button>
        <ReactModal
          isOpen={ this.state.showModal }
          contentLabel="Inline Styles Modal Example"
          style={ {
            overlay: {
              backgroundColor: 'papayawhip',
            },
            content: {
              color: 'lightsteelblue',
            },
          } } >
          <YouTube
            videoId={ videoId }
            opts={ opts }
            onReady={ this._onReady }
          />
          <button onClick={ this.handleCloseModal }>Close Modal</button>
        </ReactModal>
      </div>
    );
  }
}

Scrivito.provideUiConfig(VideoWidget, {
  title: 'VideoWidget',
  description: 'A widget with an video',
  attributes: {
    videoId: {
      title: 'Title',
      description: 'Video in widget title',
    },
  },
});

Scrivito.provideComponent(VideoWidget, VideoWidgetComponent);

export default VideoWidget;
