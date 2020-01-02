import Post from './post';
import { mount } from 'enzyme'
import React from 'react'
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';
import { createMemoryHistory } from 'history';

configure({ adapter: new Adapter() });
global.scrollTo = jest.fn();
jest.mock('axios');

describe('test window location\'s reload function', () => {
  const { reload } = window.location;

  beforeAll(() => {
    Object.defineProperty(window.location, 'reload', {
      configurable: true,
    });
    window.location.reload = jest.fn();
  });

  afterAll(() => {
    window.location.reload = reload;
  });

  test('mocks reload function', () => {
    expect(jest.isMockFunction(window.location.reload)).toBe(true);
  });

  test('calls reload function', () => {
    const reloadFn = () => {
      window.location.reload(true);
    }
    reloadFn();
    expect(window.location.reload).toHaveBeenCalled();
    expect(global.scrollTo).not.toHaveBeenCalled();

  });
});


describe('test api post', () => {

  test('should fetch post', async () => {

    const post = mount(<Post />);

    const data = { "id": 2, "title": "Environnements avec React.js", "content": "<p> On drevais toujours choisisser les nome de les constants sur l'arquive \".env \"qui on va creer  dans le path root de sa application React.js, on vas utiliser le nom QUELQUE_CHOSE, malgre ca commence comme <code>REACT_APP_QUELQUE_CHOSE=quelque_parameter </code> ailleurs le code... </p>", "creationDate": "2019-10-28T14:21:29.118245" };
    const resp = { status: 200, data: data, message: "succuces" };

    axios.get.mockImplementation(() => resp);

    expect(await Post.callApi()).toEqual(resp);

  });

  test('calls window.scrollTo when route changes', () => {
    const history = createMemoryHistory('/');
    expect(global.scrollTo).toHaveBeenCalledWith(0, 0);
    history.push('/post/2/');
    expect(global.scrollTo).toHaveBeenCalledWith(0, 0);
  });

});