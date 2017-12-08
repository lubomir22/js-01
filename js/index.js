const a = Number(prompt('Enter A'));
const b = Number(prompt('Enter B'));
const c = Number(prompt('Enter C'));
let discr;

document.write(discrim(a, b, c));
document.write('<br>')

function solvQuadr(a, b, c) {
    const d = discr(a, b, c);

}

function discrim(a, b, c) {
    discr = Math.pow(b, 2) - 4 * a * c;
    return 'D = ' + discr;
}
if (discr < 0) {
    document.write('There is no solution')
}
else {
   document.write(solution(a, b, c, discr));
}

 function solution(a, b, c, discr) {
    let sqrDiscr =Math.sqrt(discr) ;
    let x;
    x = ((-b + sqrDiscr) / (2 * a));
    let y;
    y = ((-b - sqrDiscr) / (2 * a));
    return 'x1 = ' + x + 'x2 = ' + y;
}
