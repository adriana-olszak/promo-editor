import domtoimage from 'dom-to-image'
import {saveAs} from 'file-saver'

export const downloadImage = DOMNode => {
  domtoimage
    .toBlob(DOMNode)
    .then(function(blob) {
      saveAs(blob, `${Date.now()}.png`)
    })
    .catch(function(error) {
      console.error('oops, something went wrong!', error)
    })
}
