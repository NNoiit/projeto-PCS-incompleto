let msg = "Carregando...";

loading(msg);

//função para uma interface de carregamento
function loading(text) {
    var loading = $('#loading');
    if (text) {
        loading.text(text);
    }
    loading.show();
}