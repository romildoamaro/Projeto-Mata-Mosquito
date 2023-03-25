//iniciar o jogo
function iniciarJogo() {
    let nivel = document.getElementById('nivel').value;
    
    if(nivel === '') {
        alert('Selecione uma dificuldade para começar');
        return false;
    }

    window.location.href = "app.html?" + nivel;
}