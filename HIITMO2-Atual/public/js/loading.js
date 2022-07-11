let msg = "Carregando...";

loading(msg);
function loading(text) {
    var loading = $('#loading');
    if (text) {
        loading.text(text);
    }
    loading.show();
}