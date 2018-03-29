//        //============================//
//           // 1 String Transformation
//        //===========================//

const prog = require('caporal');
prog
  .version('1.0.0')
  .command('Lowercase', 'String Transformation')
  .argument('[stringL]', '', null, 'I aM CrAzY TeXT')
  .action((args, options, logger) => {
   console.log(args.stringL.toLowerCase());
  })

  .command('upercase', 'String Transformation')
  .argument('[stringL]', '', null, 'I aM CrAzY TeXT')
  .action((args, options, logger) => {
   console.log(args.stringL.toUpperCase());
  })

  .command('capitalis', 'String Transformation')
  .argument('[stringL]', '', null, 'I aM CrAzY TeXT')
  .action((args, options, logger) => {
    String.prototype.toCapital = function () {
      return this.toLowerCase().split(' ').map(function (i) {
          if (i.length > 1) {
              return i.charAt(0).toUpperCase() + i.substr(1);
          } else {
              return i.charAt(0).toUpperCase();
          }
      }).join(' ');
  }
  console.log(args.stringL.toCapital());
  })
          //============================//
                  // 2.Arithmatic
          //===========================//
  
  .command('add', 'Arithmetic')
  .argument('<string...>', 'input to add',null)
  .action((args, options, logger) => {
    let result = 0;
    args.string.  
    forEach(element => {
        result += parseInt(element)
    });
   logger.info('this result :' + result);
  })

  .command('substrack', 'Aritmatik')
  .argument('<string...>', 'sum to susbstrack',null)
  .action((args,options,logger) => {
        let result = parseInt(args.string);
        args.string.slice(1).
        forEach(element => {
          result += parseInt(element)
      });
     logger.info('this result :' + result);
  })

  .command('multiply', 'Aritmatik')
  .argument('<string...>', 'sum to multiply',null)
  .action((args,options,logger) => {
    let result = 1;
    args.string.  
    forEach(element => {
        result += parseInt(element)
    });
     logger.info('this result :' + result);
  })


//        //============================//
//              // 3.Palindrome
//        //===========================//

  .command('Palindromee', 'Palindromee')
  .argument('<string>', '', null,)
  .action((args, options, logger) => {
        if (args.string.toLowerCase().split("").reverse().join("")==args.string.toLowerCase()){
          return console.log("Yes!!")
        } else {
          return console.log("No!!")
        }


  })
    
  //       //============================//
//              // 5.Random String
// //        //===========================//
command('random', 'Random String')
.argument('<string>', '', null)
.action((args, options, logger) => {

})

prog.parse(process.argv);