import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

import SearchBar from '../SearchBar'
import Card from '../Card'
import Button from '../Button'

import {BackgroundCard} from './styled'

const getImage = (keywords, i) =>
  fetch(`https://source.unsplash.com/featured/?${keywords}&sig=${i}`)
    .then(data => data.url)
    .catch(err => console.error('Fetching surveyUuid failed', err))

const Background = ({onSelection, onRemoveClick}) => {
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
        block={true}
        buttonText="Remove background"
        onClick={onRemoveClick}
        type="danger"
      />
    </Card>
  )
}

Background.propTypes = {
  onSelection: PropTypes.func.isRequired,
  onRemoveClick: PropTypes.func.isRequired,
}

export default Background
