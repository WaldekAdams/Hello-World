// http://websamuraj.pl/examples/js/projekt11/

// let seconds = time.getSeconds()
const result = document.querySelector('.time div');
// result.textContent = seconds
let btn = document.querySelector('.main')
// setInterval(() => {
//     const time = new Date();
//     let seconds = time.getSeconds();
//     result.textContent = time.getTime()
//     // console.log(time.getTime())
// }, 10)

let flag = true



btn.addEventListener('click', () => {


    const time = new Date();
    const first = time.getTime()

    const stoper = setInterval(() => {
        let second = new Date();
        let secondTime = second.getTime()
        let donne = (secondTime - first) / 1000
        result.textContent = donne.toFixed(2)
    }, 10)
    btn.textContent = 'Pauza';
    flag = !flag
    if (flag === true) {
        result.textContent = 'huj'
    }

})