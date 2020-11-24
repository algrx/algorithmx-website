import React from 'react';
import { Store } from 'redux';
import { Provider } from 'react-redux';

import { createStore } from '../state/root';

export const wrapRootElement = ({ element }: { readonly element: React.ReactNode }) => {
    const store = createStore();
    return React.createElement(Provider, { store }, element);
};
