'use strict';

var assert = require('chai').assert;
var dateFormat = require('./index');

describe('should return error', function(){
  it('Invalid Date', function(){
    assert.throws(function() {
      dateFormat('lero');
    }, 'Invalid Date');
    assert.throws(function() {
      dateFormat('lero');
    }, 'Invalid Date');
    assert.throws(function() {
      dateFormat('2015 081 02');
    }, 'Invalid Date');
    assert.throws(function() {
      dateFormat('2015 08 32');
    }, 'Invalid Date');
    assert.throws(function() {
      dateFormat('2015 08 -4');
    }, 'Invalid Date');
    assert.throws(function() {
      dateFormat(null);
    }, 'Invalid Date');
    assert.throws(function() {
      dateFormat(undefined);
    }, 'Invalid Date');
    assert.throws(function() {
      dateFormat(NaN);
    }, 'Invalid Date');
    // assert.throws(function() {
    //   dateFormat('20');
    // }, 'Invalid Date');
    // assert.throws(function() {
    //   dateFormat('201');
    // }, 'Invalid Date');
  });
});

describe('should return a formated string', function(){
  it('receiving string date', function(){
    assert.equal('02/09/2015', dateFormat('2015 09 02'));
    assert.equal('02/09/2015', dateFormat('2015 09 2'));
    assert.equal('02/09/2015', dateFormat('2015 9 2'));
  });

  it('receiving date object', function(){
    assert.equal('02/09/2015', dateFormat(new Date(2015, 8, 2)));
    assert.equal('02/09/1915', dateFormat(new Date(15, 8, 2)));
    assert.equal('02/09/1500', dateFormat(new Date(1500, 8, 2)));
    assert.equal(dateFormat(new Date()), dateFormat(Date()));
    // assert.equal('31/12/2014', dateFormat(new Date(2015)));
    // assert.equal('31/12/2014', dateFormat(new Date('2015')));
  });

  it('receiving timestamp', function(){
    assert.equal('02/09/2015', dateFormat(1441162800000));
    assert.equal('02/09/2015', dateFormat(new Date(2015, 8, 2).getTime()));
  });
});
