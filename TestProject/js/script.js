
const res = document.getElementById('idField');

function addNumber(value)  {
    if(res.value.length <=3){
        res.value += value;
    }
};

function clearData()  {
    res.value = "";
};

function cancelNumber()  {
    res.value = res.value.slice(0,-1);

};

function showEnter()  {
    alert(res.value);
};

function showPassword(){
    if(res.getAttribute('type') === 'text'){
        res.setAttribute('type','password')
    }else{
        res.setAttribute('type','text')
    }
}
