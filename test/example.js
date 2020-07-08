import './helper'
import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'
import App from '../src/App'

React.Suspense = ({ children }) => children

describe('<App />', () => {
  it('call', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.contains(<main>Home page</main>)).to.be.equal(true)
  })
})
