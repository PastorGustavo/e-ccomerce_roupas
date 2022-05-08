
var verific = function (qtd) {


    if (qtd == 0) {
        return false
    }

    return true
}


function adc(acao, ids) {

    var qtd = document.getElementById(ids).value



    if (verific(qtd) == false) {
        var qtd = document.getElementById(ids).value = 1

        return
    }

    switch (acao) {

        case '+':
            document.getElementById(ids).value = parseInt(qtd) + 1
            break

        case '-':
            document.getElementById(ids).value = parseInt(qtd) - 1

            break

    }




}