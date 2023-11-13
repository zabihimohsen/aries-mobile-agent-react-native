import { act, render } from '@testing-library/react-native'
import React from 'react'

import LoadingView from '../../App/components/views/LoadingView'
import { testIdWithKey } from '../../App/utils/testable'

describe('displays loading screen', () => {
  beforeAll(() => {
    jest.useFakeTimers()
  })
  afterAll(() => {
    jest.useRealTimers()
  })
  test('renders correctly', () => {
    const tree = render(<LoadingView />)

    expect(tree).toMatchSnapshot()
  })

  test('contains testIDs', async () => {
    let tree: ReturnType<typeof render>

    tree = render(<LoadingView />)
    await act(() => {
      jest.runAllTimers()
    })
    await act(async () => {
      const loadingActivityIndicatorID = await tree.findByTestId(testIdWithKey('LoadingActivityIndicator'))
      expect(loadingActivityIndicatorID).not.toBeNull()
    })
  })
})
