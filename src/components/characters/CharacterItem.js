import React from 'react'

const CharacterItem = ({ item, quotes }) => {
  return (
    <div className='card'>
      <div className='card-inner'>
        <div className='card-front'>
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Occupation:</strong> {item.occupation}
            </li>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
          </ul>
        </div>
        <div className='card-back'>
          <img src={item.img} alt='' />
          <h1>{item.name}</h1>
          <ul>
            <li>
              <strong>Birthday:</strong> {item.birthday}
            </li>
            <li>
              <strong>Occupation:</strong> {item.occupation}
            </li>
            <li>
              <strong>Status:</strong> {item.status}
            </li>
            <li>
              <strong>Nickname:</strong> {item.nickname}
            </li>
            <li>
              <strong>Actor Name:</strong> {item.portrayed}
            </li>
            <li>
              <strong>Seasons:</strong> {item.appearance}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default CharacterItem
