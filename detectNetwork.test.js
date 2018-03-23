/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  // it('Throws an error so it fails', function() {
  //   throw new Error('Delete me!');
  // });

  // it('Doesn\'t throw an error, so it doesn\'t fail', function() {
  //   // This test doesn't really test anything at all! It will pass no matter what.
  //   var even = function(num){
  //     return num/2 === 0;
  //   }
  //   return even(10) === true;
  // });

  // // In tests, we want to compare the expected behavior to the actual behavior.
  // // A test should only fail if the expected behavior doesn't match the actual.
  // it('Throws an error when expected behavior does not match actual behavior', function() {
  //   var even = function(num){
  //     return num%2 === 0;
  //   }

  //   if(even(10) !== true) {
  //     throw new Error('10 should be even!');
  //   }    
  // });


});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  // it('has a prefix of 38 and a length of 14', function() {
  //   //throw new Error('Delete me!');
 
  //   if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
  //     throw new Error('Test failed');
  //   }
  // });

  // it('has a prefix of 39 and a length of 14', function() {
  //   if (detectNetwork('39345678901230') !== 'Diner\'s Club') {
  //     throw new Error('Test failed');
  //   }
 
  // });

  var should = chai.should();
  it('has a prefix of 39 and a length of 14', function() {
    detectNetwork('39345678901230').should.equal('Diner\'s Club');
  })

  it('has a prefix of 38 and a length of 14', function() {
    detectNetwork('38345678901234').should.equal('Diner\'s Club');
  })  

});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  // var assert = function(isTrue) {
  //   if(isTrue !== true) {
  //     throw new Error('Test failed');
  //   }
 
  // };

  // it('has a prefix of 34 and a length of 15', function() {
  //   assert(detectNetwork('343456789012345') === 'American Express');
  // });

  // it('has a prefix of 37 and a length of 15', function() {
  //   assert(detectNetwork('373456789012345') === 'American Express');
  // });

  var should = chai.should();
  it('has a prefix of 34 and a length of 15', function() {
    detectNetwork('343456789012345').should.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    detectNetwork('373456789012345').should.equal('American Express');
  });  
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/

  var should = chai.should();
  it('has a prefix of 4 and a length of 13', function() {
    detectNetwork('4123456789012').should.equal('Visa');
  })

  it('has a prefix of 4 and a length of 16', function() {
    detectNetwork('4123456789012345').should.equal('Visa');
  })  

  it('has a prefix of 4 and a length of 19', function() {
    detectNetwork('4123456789012345678').should.equal('Visa');
  })  

      
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();

  it('has a prefix between 51 and 55 and a length of 16', function() {
    detectNetwork('5112345678901234').should.equal('MasterCard');
  });

  it('has a prefix between 51 and 55 and a length of 16', function() {
    detectNetwork('5212345678901234').should.equal('MasterCard');
  });  
  
  it('has a prefix of 53 and a length of 16', function() {
    detectNetwork('5312345678901234').should.equal("MasterCard");
  });

  it('has a prefix of 54 and a length of 16', function() {
    detectNetwork('5412345678901234').should.equal("MasterCard");
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    detectNetwork('5512345678901234').should.equal("MasterCard");
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var should = chai.should();

  it('has a prefix of 6011 and a length of 16', function(){
    detectNetwork('6011123456712345').should.equal("Discover");
  });
  it('has a prefix of 6011 and a length of 19', function(){
    detectNetwork('6011324245964249876').should.equal("Discover");
  });

  it('has a prefix of 65 and a length of 16', function(){
    detectNetwork('6523123456712345').should.equal("Discover");
  });
  it('has a prefix of 65 and a length of 19', function(){
    detectNetwork('6522324245964249876').should.equal("Discover");
  });  

  for(var prefix = 644; prefix <= 649; prefix++){
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function(){
        detectNetwork(prefix+'4421987123456').should.equal("Discover");
      });

      it('has a prefix of ' + prefix + ' and a length of 19', function(){
        detectNetwork(prefix+'4421987123456555').should.equal("Discover");
      });

    })(prefix)
  };

});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card

  var should = chai.should();
  var afterPrefixes = ['25987323','259873233','2598732335','25987323356','259873233569','2598732335695','25987323356945','259873233569451']

  for(var i = 0; i < afterPrefixes.length; i++){
    (function(after_prefix) {

      it('has a prefix of ' + "5018" + ' and a length of '+("5018" +after_prefix).length, function(){
        detectNetwork("5018" +after_prefix).should.equal("Maestro");
      });

      it('has a prefix of ' + "5020" + ' and a length of '+("5020" +after_prefix).length, function(){
        detectNetwork("5020" +after_prefix).should.equal("Maestro");
      });

      it('has a prefix of ' + "5038"  + ' and a length of '+("5038" +after_prefix).length, function(){
        detectNetwork("5038" +after_prefix).should.equal("Maestro");
      });

      it('has a prefix of ' + "6304" + ' and a length of '+("6304" +after_prefix).length, function(){
        detectNetwork("6304" +after_prefix).should.equal("Maestro");
      });                  

    })(afterPrefixes[i])
  };    

});

describe('China UnionPay', function(){
  var should = chai.should();
  for(var i = 622126; i <= 622925; i++){
    (function(prefix){
      it('has a prefix of ' + prefix +"9234561234" + ' and a length of '+(prefix +"9234561234").length, function(){
        detectNetwork(prefix +"9234561234").should.equal("China UnionPay");
      }); 

      it('has a prefix of ' + prefix +"92345612345" + ' and a length of '+(prefix +"92345612345").length, function(){
        detectNetwork(prefix +"92345612345").should.equal("China UnionPay");
      }); 

      it('has a prefix of ' + prefix +"923456123452" + ' and a length of '+(prefix +"923456123452").length, function(){
        detectNetwork(prefix +"923456123452").should.equal("China UnionPay");
      });   

      it('has a prefix of ' + prefix +"9234561234522" + ' and a length of '+(prefix +"9234561234522").length, function(){
        detectNetwork(prefix +"9234561234522").should.equal("China UnionPay");
      });                       
      
    })(i)
  }

  for(var j = 624; j <= 626; j++){
    (function(prefix){
      it('has a prefix of ' + prefix +"9234561234444" + ' and a length of '+(prefix +"9234561234444").length, function(){
        detectNetwork(prefix +"9234561234444").should.equal("China UnionPay");
      }); 

      it('has a prefix of ' + prefix +"92345612345444" + ' and a length of '+(prefix +"92345612345444").length, function(){
        detectNetwork(prefix +"92345612345444").should.equal("China UnionPay");
      }); 

      it('has a prefix of ' + prefix +"923456123452777" + ' and a length of '+(prefix +"923456123452777").length, function(){
        detectNetwork(prefix +"923456123452777").should.equal("China UnionPay");
      });   

      it('has a prefix of ' + prefix +"9234561234522999" + ' and a length of '+(prefix +"9234561234522999").length, function(){
        detectNetwork(prefix +"9234561234522999").should.equal("China UnionPay");
      });                       
      
    })(j)
  } 

  for(var k = 6282; k <= 6288; k++){
    (function(prefix){
      it('has a prefix of ' + prefix +"923456123444" + ' and a length of '+(prefix +"923456123444").length, function(){
        detectNetwork(prefix +"923456123444").should.equal("China UnionPay");
      }); 

      it('has a prefix of ' + prefix +"9234561234544" + ' and a length of '+(prefix +"9234561234544").length, function(){
        detectNetwork(prefix +"9234561234544").should.equal("China UnionPay");
      }); 

      it('has a prefix of ' + prefix +"92345612345277" + ' and a length of '+(prefix +"92345612345277").length, function(){
        detectNetwork(prefix +"92345612345277").should.equal("China UnionPay");
      });   

      it('has a prefix of ' + prefix +"923456123452299" + ' and a length of '+(prefix +"923456123452299").length, function(){
        detectNetwork(prefix +"923456123452299").should.equal("China UnionPay");
      });                       
      
    })(k)
  }

})

describe('Switch', function(){
  var should = chai.should();
  var prefixes_a = [ 4903, 4905, 4911, 4936, 6333, 6759 ];
  var prefixes_b = [564182, 633110];

  for(var i = 0; i < prefixes_a.length; i++){
    (function(prefix){
      // 16
      it('has a prefix of ' + prefix +"123456789876" + ' and a length of '+(prefix +"123456789876").length, function(){
        detectNetwork(prefix +"123456789876").should.equal("Switch");
      }); 

      it('has a prefix of ' + prefix +"12345678987336" + ' and a length of '+(prefix +"12345678987336").length, function(){
        detectNetwork(prefix +"12345678987336").should.equal("Switch");
      });     

      it('has a prefix of ' + prefix +"123456789873346" + ' and a length of '+(prefix +"123456789873346").length, function(){
        detectNetwork(prefix +"123456789873346").should.equal("Switch");
      });             

    })(prefixes_a[i])
  }

  for(var i = 0; i < prefixes_b.length; i++){
    (function(prefix){
      // 16
      it('has a prefix of ' + prefix +"1234567898" + ' and a length of '+(prefix +"1234567898").length, function(){
        detectNetwork(prefix +"1234567898").should.equal("Switch");
      }); 

      it('has a prefix of ' + prefix +"123456789873" + ' and a length of '+(prefix +"123456789873").length, function(){
        detectNetwork(prefix +"123456789873").should.equal("Switch");
      });     

      it('has a prefix of ' + prefix +"1234567898733" + ' and a length of '+(prefix +"1234567898733").length, function(){
        detectNetwork(prefix +"1234567898733").should.equal("Switch");
      });             

    })(prefixes_b[i])
  }  

})
