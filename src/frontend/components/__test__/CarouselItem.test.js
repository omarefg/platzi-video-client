import React from 'react'
import { create } from 'react-test-renderer'
import ProviderMock from '../../__mocks__/ProviderMock'
import { CarouselItem } from '..'

describe('Carousel Item component', () => {
    test('Match Snapshot', () => {
        const carouselItem = create(
            <ProviderMock>
                <CarouselItem/>
            </ProviderMock>,
        )
        expect(carouselItem.toJSON()).toMatchSnapshot()
    })
})
