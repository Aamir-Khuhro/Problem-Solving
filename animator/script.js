let element = document.getElementById('container');

let marginTop = 0,
    marginLeft = 0;

let turnTop = true;

let id = setInterval(move, 200);

function move(){
    if(marginTop == 500){
        clearInterval(id);
    }

    if(turnTop){
        marginTop += 20;
        // element.style.marginTop = marginTop + 'px';

        // Add new element
        const newDiv = document.createElement('div');
        newDiv.className = 'new-div';
        newDiv.style.marginTop = marginTop + 'px';
        newDiv.style.marginLeft = marginLeft + 'px';
        document.body.appendChild(newDiv);

        if(marginTop % 50 == 0){
            turnTop = false;
        }
    }else{
        marginLeft += 20;
        // element.style.marginLeft = marginLeft + 'px';

        // Add new element
        const newDiv = document.createElement('div');
        newDiv.className = 'new-div';
        newDiv.style.marginTop = marginTop + 'px';
        newDiv.style.marginLeft = marginLeft + 'px';
        document.body.appendChild(newDiv);
        
        if(marginLeft % 50 == 0){
            turnTop = true;
        }
    }
}
