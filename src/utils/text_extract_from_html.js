import { decode } from 'ent';
import striptags from 'striptags';

function textExtractFromHtml(html) {
  return decode(striptags(html));
}

export default textExtractFromHtml;
