import { assert } from 'chai';
import {getFullYear} from './utils.js';
import {getFooterCopy} from './utils.js';
import {getLatestNotification} from './utils.js';

describe('Util functions', () => {
    describe('getFullYear', () => {
      it('returns the correct year without creating time bomb', function(){
        assert.equal(getFullYear(), 2023);
      });
    });
    describe('getFooterCopy', () => {
        it('returns the correct string when the argument is true or false', function(){
          assert.equal(getFooterCopy(true), 'Holberton School');
          assert.equal(getFooterCopy(true), 'Holberton School main dashboard');

        });
      });

      describe('getLatestNotification', () => {
        it('returns the correct string', function(){
          assert.equal(getLatestNotification(), '<strong>Urgent requirement</strong> - complete by EOD');
        });
      });




  });