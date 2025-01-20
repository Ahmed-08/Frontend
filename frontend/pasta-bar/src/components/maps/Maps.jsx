import React from 'react'
import { YMaps, Map } from '@pbe/react-yandex-maps';

export default function Maps() {
  return (
    <YMaps>
      <Map width='100%' height='100%' defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
  </YMaps>
  )
}
