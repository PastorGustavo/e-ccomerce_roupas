let stoq = undefined
let preco = undefined

const VerificStoq = function () {
    console.log('entrei')
    // Pegando quantos itens ele está comprando
    let itens = document.getElementById('qtd').value

    if (parseInt(stoq) < itens) {


        document.getElementById('qtd').value = parseInt(stoq)

        return true
    } else {
        document.getElementById('preco').textContent = `R$${preco}0`

    }

    return false
}

function FormCart(id, precon, promo, estoq) {
    //Verificando estoque
    stoq = estoq
    preco = precon
    console.log(preco)

    VerificStoq()
    //Mudando preco
    document.getElementById('preco').textContent = 'R$' + precon + 0

    //Mudando id


}



function First() {

    let date_temp = document.getElementById('stoq-temp').textContent

    date_temp = date_temp.split('-')

    //id
    const date_0 = date_temp[0]

    //stoq
    stoq = date_temp[1]


    const date_2 = date_temp[2]
    document.getElementById('preco').textContent = `R$${date_2}0`

    preco = date_2
    const date_3 = date_temp[3]

}
First()