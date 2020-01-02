import React from 'react';
import ReactDOM from 'react-dom';
import Posts from './posts';

window.scrollTo = jest.fn();

test("post window", () => {
    const noop = () => {};
    Object.defineProperty(window, 'scrollTo', { value: noop, writable: true });
})