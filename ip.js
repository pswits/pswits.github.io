url = 'https://api.ipify.org/?format=json';
var ip = document.getElementById('ipv');
function find(){
    fetch(url).then(res => res.json().then(result => {
        ip.innerText = result.ip;
    }))
}