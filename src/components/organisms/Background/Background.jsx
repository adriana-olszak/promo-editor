import React, {useEffect, useState} from 'react'

import SearchBar from '../../SearchBar'
import {StyledBackground, Img} from './styled'
import Card from '../../Card'

const getImage = keywords =>
  fetch(`https://source.unsplash.com/featured/?${keywords}`, {cache: 'reload'})
    .then(data => data.url)
    .catch(err => console.error('Fetching surveyUuid failed', err))

export default ({onSelection, onRemoveClick}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [imgData, setImgData] = useState(Array(4).fill(undefined))
  const [keywords, setKeywords] = useState('')

  useEffect(() => {
    const fetchImagesUrl = async () => {
      setIsLoading(true)
      const img1 = await getImage(keywords)
      const img2 = await getImage(keywords)
      const img3 = await getImage(keywords)
      const img4 = await getImage(keywords)
      setImgData([img1, img2, img3, img4])
      setIsLoading(false)
    }

    fetchImagesUrl()
  }, [keywords])

  return (
    <Card gridArea={'background'} headerText="Select Background">
      {imgData.map(data => (
        <Img
          isLoading={isLoading}
          onClick={() => onSelection(data)}
          src={data}
        />
      ))}
      <SearchBar onClick={setKeywords} />
      <button onClick={onRemoveClick}>Remove background </button>
    </Card>
  )
}
