
// var fibonacci = function(n){
//     if(n === 0 || n === 1){
//         return n;
//     }
//     return fibonacci(n-1)+fibonacci(n-2);
// }
// if(require.main === module){
//     var n = Number(process.argv[2]);
//     console.log(process.argv[0]);
//     console.log(process.argv[1]);
//     console.log('fibonacci('+ n +')is',fibonacci(n));
// }

var sum = 0;
for(var i=2; i<process.argv.length; i++) {
    sum += Number(process.argv[i]);
}
console.log(sum);