var assert = require('assert');
var dateFormat = require('./index');


describe('Should recieve a Date', function(){

  //Lição de casa
  // it('Should be a invalid date', function(){
  //   assert.throw(dateFormat('lero'));
  // });

  console.log('test', dateFormat('02/09/2015'))

  it('Should recieve a formated String', function(){
      assert.equal('02/09/2015', dateFormat('02/09/2015'));
      assert.equal('21/08/1986', dateFormat('08/21/1986'));
  })


});
