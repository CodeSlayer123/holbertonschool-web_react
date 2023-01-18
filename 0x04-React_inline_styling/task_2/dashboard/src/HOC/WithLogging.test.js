import { assert, expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom/client';
import WithLogging   from './WithLogging  ';
import { shallow } from 'enzyme';

describe('Tests WithLogging ', () => {
      it('console.log was called on mount and on unmount with Component when the wrapped element is pure html', function(){
        const html = <div className='test'>this is a test</div>
        const wrapper = mount(< WithLogging Wrapped={html} />);
        const spy = jest.spyOn(console, 'log');
        expect(spy).toHaveBeenCalled()
        wrapper.unmount()
        expect(spy).toHaveBeenCalled()

    });
    it('console.log was called on mount and on unmount with the name of the component when the wrapped element is the Login component', function(){
        const wrapper = mount(< WithLogging Wrapped={<Login />} />);
        const spy = jest.spyOn(console, 'log');
        expect(spy).toHaveBeenCalledWith("Component Login is mounted")
        wrapper.unmount()
        expect(spy).toHaveBeenCalledWith("Component Login is going to unmount")



    });
    });