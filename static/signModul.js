const ag01 = document.querySelector("#agree01");
const ag = document.querySelectorAll(".agreeBox");
console.log(ag01);
console.log(ag);


ag01.addEventListener('change',function(){
    if (ag01.checked) {
        console.log("체크");
        ag.forEach(item => {
            item.checked = true; 
        });
    } else {
        ag.forEach(item => {
            item.checked = false; 
        });
    }
});