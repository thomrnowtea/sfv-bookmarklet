var url = prompt("[CustomQ v1.0 |  by SFV_Cinema]\nInserta tu lugar de fila:");
var uuidMatch = url.match(/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}/i);
if (!uuidMatch) {
    alert("[CustomQ v1.0 |  by SFV_Cinema]\nTu link no tiene un lugar de fila asociado!");
    return;
}
var extractedUUID = uuidMatch[0];
var clienteMatch = url.match(/c=([^&]+)/);
var filaMatch = url.match(/e=([^&]+)/);
if (!clienteMatch || !filaMatch) {
    alert("[CustomQ v1.0 |  by SFV_Cinema]\nEl cliente y fila no estan especificados en tu link!");
    return;
}
var cliente = clienteMatch[1];
var fila = filaMatch[1];
var cookies = document.cookie.split(";");
for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i].trim();
    if (cookie.indexOf("Queue-it-" + cliente) === 0 && cookie.indexOf(fila) !== -1) {
        var newCookieValue = cookie.replace(/Qid=([a-f0-9-]+)/, "Qid=" + extractedUUID);
        document.cookie = newCookieValue;
        alert("[CustomQ |  by SFV_Cinema]\nHas cargado tu nuevo lugar de fila correctamente!");
        location.reload();
        return;
    }
}
alert("[CustomQ v1.0 |  by SFV_Cinema]\nLa cookie para cambiar tu lugar de fila no ha sido encontrada!");
