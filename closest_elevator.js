function elevator(left, right, call) {
    return Math.abs(left - call) < Math.abs(right - call) ? 'left' : 'right';
}
const answer = elevator(0, 1, 0); // => "left"

console.log(answer);