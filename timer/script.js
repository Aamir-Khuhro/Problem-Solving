const timer = document.getElementById('timer');
const btn = document.getElementById('btn');
btn.addEventListener('click', handler);

function handler(){
    let count = 60;
    let id = setInterval(() => {
        count--;
        timer.innerHTML = count;
        if(count === 0){
            clearInterval(id);
        }
     }, 1000);

}