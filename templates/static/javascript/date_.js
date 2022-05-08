function Cols() {
    var largura = window.screen.width;

    if (document.body.clientWidth < 767) {
        //executar o código aqui dentro

        document.getElementById('col1').className = 'col-1'
        document.getElementById('col2').className = 'col-11'

    } else {

        document.getElementById('col1').className = 'col-2'
        document.getElementById('col2').className = 'col-10'
    }
}

Cols()


function AbrirMenu() {
    let classname = document.getElementById('dash').className
    if (classname.indexOf('MenuDash2') != -1) {
        classname = classname.replace('MenuDash2', '')
        document.getElementById('dash').className = classname

    } else {
        document.getElementById('dash').className += ' MenuDash2'
    }

}