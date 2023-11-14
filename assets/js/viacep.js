function consultaEndereco() {
    let cep = document.getElementById('cep').value;

    if (cep.length > 8 || cep === '') {
        bootbox.alert({
            message: 'CEP <b>inválido</b>!',
            size: 'small',
            buttons: {
                ok: {
                    className: 'btn btn-success'
                }
            }
        });
        return;
    }

    let url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => mostrarEndereco(data))
        .catch(error => {
            bootbox.alert({
                message: 'Não foi possível <b>localizar</b> o endereço!',
                size: 'small',
                buttons: {
                    ok: {
                        className: 'btn btn-success'
                    }
                }
            });
        });
}

function mostrarEndereco(dados) {
    let logradouro = document.getElementById('logradouro');
    let bairro = document.getElementById('bairro');

    if (dados.erro) {
        bootbox.alert({
            message: 'Não foi possível <b>localizar</b> o endereço!',
            size: 'small',
            buttons: {
                ok: {
                    className: 'btn btn-success'
                }
            }
        });
        return;
    }

    logradouro.value = `${dados.logradouro || ''}`;
    bairro.value = `${dados.bairro || ''}`;
}