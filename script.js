// let input=document.getElementsByTagName('input')[0]
// console.log(input)

// let submit=document.getElementById('save-btn')
// console.log(submit)

// let update=()=>{
//     let message=input.value;
//     localStorage.setItem('work',[message]);
//     input.innerHTML=`<p>${message}</p>`


// }
// submit.addEventListener('click',update)
setInterval(() => {
    let a = new Date()
    let h = a.getHours()
    let m = a.getMinutes()
    let s = a.getSeconds()
    let d = a.getDate()
    let mnth = a.getMonth();
    let year = a.getFullYear();

    let date = document.getElementById('date')
    date.innerHTML = `${d}    /    ${mnth + 1}  / ${year}`
    let time = document.getElementById('time')
    time.innerHTML = `${h}  : ${m}  : ${s}`
    // location.reload();
}, 1000);

let day = document.getElementById('today')
let today = new Date().getDay()
// today=today+1;
console.log(today)
let message;
switch (today) {
    case 0:
        message = "SUNDAY :-Sunday Hai Benchod Pel Kar Aaram karo"
        break;

    case 1:
        message = 'MONDAY :-ARAMS , BACK '
        break;
    case 2:
        message = 'TUESDAY :-CHEST , SHOULDER'
        break;
    case 3:
        message = 'WEDNESDAY :- LEGS - Chak de fatt '
        break;
    case 4:
        message = ' THRUSDAY :- ARAMS , BACK '
        break;
    case 5:
        message = 'FRIDAY :-CHEST , SHOULDER'
        break;
    case 6:
        message = 'SATURDAY :-LEGS - Chak de fatt '
        break;
    default:
        break;
}
day.textContent = message
let main = document.getElementsByClassName('main')[0]
let div = document.createElement('div')
div.className = "date-mobile"
let div1 = document.createElement('div')
div1.className = "time-mobile"
main.prepend(div1);
main.prepend(div);
function myfuncttion() {
    let x = new Date()
    let h = x.getHours()
    let m = x.getMinutes()
    let s = x.getSeconds()
    let d = x.getDate()
    let mnth = x.getMonth();
    let year = x.getFullYear();
    if (window.innerWidth <= 600) {
        div.innerHTML = `${d}    /    ${mnth + 1}  / ${year}`
        div1.innerHTML = `${h}  :   ${m}  : ${s}`
    }
    console.log(main)
}
setInterval((myfuncttion),1000)



