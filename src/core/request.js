var adress = 'https://synacta.agile-is.de/_api/base';
var key = "Token FHProjekt2016";
var xhr = new XMLHttpRequest();
window.onload = function() {
     getBase('/root', null, null);
     // getBase('\{type}\{id}\Children', "Plan", "3df202ad-91b2-413a-9847-d12d536ed813");
    }

function getBase(func, type, id) {

    //Eventuell noch Fehlerabfrage

    xhr.open('GET', adress + func, true);
    xhr.setRequestHeader("Authorization", key);
    if (type != null) {
        xhr.setRequestHeader("type", type);
    }
    if (id != null) {
        xhr.setRequestHeader("id", id);
    }
    xhr.send(null);

    xhr.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200) {
    
            var answer = JSON.parse(xhr.response);
            console.log(answer.value[0].ID);
            alert(answer.value[0].ID);
        }
    }
}
