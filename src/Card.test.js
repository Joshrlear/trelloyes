import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

import renderer from 'react-test-renderer';

it('Smoke Test For Card Here', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
    ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
    const tree = renderer
        .create(<Card />)
        .toJSON();
    expect(tree).toMatchSnapshot();
})