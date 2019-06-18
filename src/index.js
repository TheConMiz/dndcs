import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { MemoryRouter } from 'react-router-dom';

ReactDOM.render(
    <MemoryRouter initialEntries={["/char", "/"]} initialIndex={1}>
        <App/>
    </MemoryRouter>
    , document.getElementById('root')
);