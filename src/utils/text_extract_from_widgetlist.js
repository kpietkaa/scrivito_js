function textExtractFromWidgetlist(widgetlist) {
  return widgetlist.map(widget => {
    if (widget.textExtract) { return widget.textExtract(); }
    return '';
  }).join(' ');
}

export default textExtractFromWidgetlist;
