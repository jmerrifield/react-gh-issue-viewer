import React from 'react/addons'

let {TestUtils} = React.addons

jest.dontMock('../TruncatedText.js')
jest.dontMock('ellipsize')

describe('TruncatedText', function () {
  it('truncates text', function () {
    let TruncatedText = require('../TruncatedText.js')

    let subject = TestUtils.renderIntoDocument(
      <TruncatedText text='this is kind of a long string' length={14} />
    )

    let span = TestUtils.findRenderedDOMComponentWithTag(subject, 'span')
    expect(span.getDOMNode().textContent).toEqual('this is kind…')
  })
})
