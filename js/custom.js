const text = "Hello, \n my name is \nAjide Shamsideen";
const myRole = "Frontend Developer";
const role = document.getElementById("role");
const textWrite = document.getElementById("nameWriter");
const rotateNav = document.getElementById("rotate");

console.log(text.length);

i=0;

function writeText(){

    if(i <= text.length){
        textWrite.innerText = text.slice(0,i);
        return i++;
    }

    if (i > text.length){
        function roleWriter(){
            if(z <= myRole.length){
                role.innerText = myRole.slice(0,z);
                z++;
            }
        }
        setInterval(roleWriter, 500);
    }


    
}
setInterval(writeText,50);
z = 0;


rotateNav.addEventListener('click', rotate);

function rotate(){
    rotateNav.classList.toggle("clicked");
}

