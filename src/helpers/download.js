import domtoimage from 'dom-to-image'

export const downloadImage = DOMNode => {
  domtoimage
    .toPng(DOMNode)
    .then(function(dataUrl) {
      const img = new Image()
      img.src = dataUrl
      document.body.appendChild(img)
    })
    .catch(function(error) {
      console.error('oops, something went wrong!', error)
    })
}
