
const preencherForm = (endereco) => {

    document.getElementById('Endereco').value = endereco.logradouro
    document.getElementById('bairro').value = endereco.bairro
    document.getElementById('cidade').value = endereco.localidade

    let estd = undefined
    switch (endereco.uf) {

        case 'SP':
            estd = 1
            break
        case 'MG':
            estd = 2
            break
    }

    document.getElementById('estd').value = estd


}

const eNumero = (numero) => /^[0-9]+$/.test(numero);

const cepValido = (cep) => cep.length == 8 && eNumero(cep);

const PesquisarCep = async () => {
    const cep = document.getElementById('cep').value
    const url = `http://viacep.com.br/ws/${cep}/json/`


    if (cepValido(cep)) {

        const dados = await fetch(url)
        const endereco = await dados.json()

        if (endereco.hasOwnProperty('erro')) {

            document.getElementById('cep').value = 'CEP não encontrado!';
        } else {

            preencherForm(endereco);
        }

    } else {
        document.getElementById('cep').value = 'CEP incorreto!';
    }
}

document.getElementById('cep').addEventListener('focusout', PesquisarCep)





