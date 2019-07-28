import React, {useEffect, useState} from 'react'

import SearchBar from '../SearchBar'
import {BackgroundCard} from './styled'
import Card from '../Card'
import Button from '../Button'

const getImage = (keywords, i) =>
  fetch(`https://source.unsplash.com/featured/?${keywords}&sig=${i}`)
    .then(data => data.url)
    .catch(err => console.error('Fetching surveyUuid failed', err))

export default ({onSelection, onRemoveClick}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [imgData, setImgData] = useState(Array(4).fill(undefined))
  const [keywords, setKeywords] = useState('')

  useEffect(() => {
    const fetchImagesUrl = async () => {
      setIsLoading(true)
      let imgsData = []
      for (let i = 0; i < imgData.length; i++) {
        const url = await getImage(keywords, i)
        imgsData = [...imgsData, url]
      }
      setImgData(imgsData)
      setIsLoading(false)
    }

    fetchImagesUrl()
  }, [keywords])

  return (
    <Card gridArea={'background'} headerText="Select Background">
      {imgData.map((data, idx) => (
        <BackgroundCard
          isLoading={isLoading}
          key={idx} // TODO should not be like that
          onClick={() => onSelection(data)}
          src={data}
        />
      ))}
      <SearchBar onClick={setKeywords} />
      <Button
        buttonText="Remove background"
        block={true}
        type="danger"
        onClick={onRemoveClick}
      />
    </Card>
  )
}
