import { assert, expect } from 'chai';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { shallow } from 'enzyme';

describe('Tests app', () => {
    describe('App renders without crashing', () => {
      it('App renders without crashing', function(){
        const wrapper = shallow(<App />);
        assert.equal(wrapper.length, 1);
    });
    });

    describe('App renders a div with the class App-header', () => {
        it('App renders a div with the class App-header', function(){
            const wrapper = shallow(<App />);
            const header = wrapper.find('Header').render();
            assert.equal(header.length, 1);
        });
      });

      describe('App renders a div with the class App-body', () => {
        it(' App renders a div with the class App-body', function(){
            const wrapper = shallow(<App />);
            const login  = wrapper.find('Login').render();
            assert.equal(login.length, 1);
        });
      });

      describe('App renders a div with the class App-footer', () => {
        it(' App renders a div with the class App-body', function(){
            const wrapper = shallow(<App />);
            const footer = wrapper.find('Footer').render();
            assert.equal(footer.length, 1);
        });
      });

      describe('App renders a div with the class App-Notifications', () => {
        it(' App renders a div with the class App-Notifications', function(){
            const wrapper = shallow(<App />);
            const notifications = wrapper.find('Notifications').render();
            assert.equal(notifications.length, 1);
        });
      });

      describe('check that CourseList is not displayed', () => {
        it(' check that CourseList is not displayed', function(){
            const wrapper = shallow(<App />);
            const CourseList  = wrapper.find('CourseList');
            assert.equal(CourseList.length, 0);
        });
      });
      describe('verify that Login component is not included & that CourseList component is included', () => {
        it(' check that CourseList is not displayed', function(){
            const wrapper = shallow(<App isLoggedIn={true} />);
            const CourseList  = wrapper.find('CourseList');
            const Login  = wrapper.find('Login');

            assert.equal(Login.length, 0);
            assert.equal(CourseList.length, 1);

        });
      });

      describe('verify that when the keys control and h are pressed the logOut function is called and the alert function is called with the string Logging you out', () => {
        it('verify that when the keys control and h are pressed the logOut function is called and the alert function is called with the string Logging you out', function(){
          window.dispatchEvent(new KeyboardEvent("keydown", {ctrlKey: true, key: 'h'}))
          expect(alert).toHaveBeenCalledWith('Logging you out')

        });
      });




  });