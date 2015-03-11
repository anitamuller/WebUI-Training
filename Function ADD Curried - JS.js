function add(a, b) {
    if (arguments.length < 1) {
        return add;
    } else if (arguments.length < 2) {
        return function(c) { return a + c }
    } else {
        return a + b;
    }
}

add(3)
//function (c) { return a + c }

add(5)
//function (c) { return a + c }

add(3)(5)
//8

add(4,3)
//7


//Generic function curried
function curry(func,args,space) {
    var n  = func.length - args.length; //arguments still to come
    var sa = Array.prototype.slice.apply(args); // saved accumulator array
    function accumulator(moreArgs,sa,n) {
        var saPrev = sa.slice(0); // to reset
        var nPrev  = n; // to reset
        for(var i=0;i<moreArgs.length;i++,n--) {
            sa[sa.length] = moreArgs[i];
        }
        if ((n-moreArgs.length)<=0) {
            var res = func.apply(space,sa);
            // reset vars, so curried function can be applied to new params.
            sa = saPrev;
            n  = nPrev;
            return res;
        } else {
            return function (){
                // arguments are params, so closure bussiness is avoided.
                return accumulator(arguments,sa.slice(0),n);
            }
        }
    }
    return accumulator([],sa,n);
}

function add (a,b,c){
      if (arguments.length < this.add.length) {
        return curry(this.add,arguments,this);
      }
      return a+b+c;
}

alert(add()(1,2,4));      // 7
alert(add(1)(2)(5));      // 8
alert(add(1)()(2)()(6));  // 9
alert(add(1,2,7,8));      // 10