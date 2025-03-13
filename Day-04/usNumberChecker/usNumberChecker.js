
function usNumberChecker(number){
       let regexExpression = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-])?\d{3}([\s\-])?\d{4}$/
       console.log(regexExpression.test(number));
}
 module.exports={usNumberChecker};

  