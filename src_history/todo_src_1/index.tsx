import * as React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

import store from './store';
import Home from './routes/home';

const Root = () => (
    <div>
        <div>Root</div>
        <Provider store={store}>
            <Home/>
        </Provider>
    </div>
);

render(<Root/>, document.getElementById('root'));