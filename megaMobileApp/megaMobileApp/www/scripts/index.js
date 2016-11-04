// Eine Einführung zur leeren Vorlage finden Sie in der folgenden Dokumentation:
// http://go.microsoft.com/fwlink/?LinkID=397704
// So debuggen Sie Code beim Seitenladen in Ripple oder auf Android-Geräten/-Emulatoren: Starten Sie die App, legen Sie Haltepunkte fest, 
// und führen Sie dann "window.location.reload()" in der JavaScript-Konsole aus.
(function () {
    "use strict";

    document.addEventListener( 'deviceready', onDeviceReady.bind( this ), false );

    function onDeviceReady() {
        // Verarbeiten der Cordova-Pause- und -Fortsetzenereignisse
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        
        // TODO: Cordova wurde geladen. Führen Sie hier eine Initialisierung aus, die Cordova erfordert.
        var parentElement = document.getElementById('deviceready');
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');
        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');
    };

    function onPause() {
        // TODO: Diese Anwendung wurde ausgesetzt. Speichern Sie hier den Anwendungszustand.
    };

    function onResume() {
        // TODO: Diese Anwendung wurde erneut aktiviert. Stellen Sie hier den Anwendungszustand wieder her.
    };
})();
var xmlhttpObject = new XMLHttpRequest();
function handleStateChange() {
    //alert("xmlhttpObject.readyState = " + xmlhttpObject.readyState +
    //    (xmlhttpObject.readyState >= 3 ? "HTTP-Status= " + xmlhttpObject.status : ''));

    var obj = JSON.parse(xmlhttpObject.response);
    alert(obj.value[0].ID);
}
window.onload = function () {
    xmlhttpObject.open('GET', 'https://synacta.agile-is.de/_api/base/Root', true);
    xmlhttpObject.setRequestHeader("Authorization", "Token FHProjekt2016");
    xmlhttpObject.onreadystatechange = handleStateChange;
    xmlhttpObject.send(null);


    //zweiter Versuch für eine andere Anfrage

    xmlhttpObject.open('GET', 'https://synacta.agile-is.de/_api/base/{type}/{id}/Children', true);
    xmlhttpObject.setRequestHeader("type", "Plan");
    xmlhttpObject.setRequestHeader("id", "3df202ad-91b2-413a-9847-d12d536ed813");
    xmlhttpObject.setRequestHeader("Authorization", "Token FHProjekt2016");
    xmlhttpObject.onreadystatechange = handleStateChange;
    xmlhttpObject.send(null);
}