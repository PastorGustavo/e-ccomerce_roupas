function SingUp() {

    setTimeout(() => {
        let logbox = document.getElementById('registerbox').className
        logbox = logbox.replace('registerNorm', 'registerAnima')
        document.getElementById('registerbox').className = logbox

        document.getElementById('logbox').className += ' registerTextNorm'

    }, 1400);

    //Formulario andar
    let formClass = document.getElementById('form').className
    formClass = formClass.replace('FormRight', 'FormLeft')
    document.getElementById('form').className = formClass

    //bg andar
    let bgClass = document.getElementById('bg').className
    bgClass = bgClass.replace('bg-yellow-left', 'bg-yellow-right ')
    document.getElementById('bg').className = bgClass


    //Mudar o texto do sing up
    let singUp = document.getElementById('WelcomeSingUP').className
    singUp = singUp.replace('RegisterWelcomeAparecer', 'RegisterWelcome-Sumir')
    document.getElementById('WelcomeSingUP').className = singUp

    setTimeout(() => {
        document.getElementById('WelcomeSingUP').style.zIndex = -1
    }, 1600);

    //Mudar o texto do login
    let login = document.getElementById('Login').className
    login = login.replace('LogWelcomeAparecer', 'LogWelcomeSumir')
    document.getElementById('Login').className = login
}

function Login() {

    setTimeout(() => {
        let logbox = document.getElementById('registerbox').className
        logbox = logbox.replace('registerAnima', 'registerNorm')
        document.getElementById('registerbox').className = logbox

        logbox = document.getElementById('logbox').className
        logbox = logbox.replace('registerTextNorm', '')
        document.getElementById('logbox').className = logbox

    }, 1400);

    document.getElementById('WelcomeSingUP').style.zIndex = 2

    //Formulario andar
    let formClass = document.getElementById('form').className
    formClass = formClass.replace('FormLeft', 'FormRight')
    document.getElementById('form').className = formClass

    //bg andar
    let bgClass = document.getElementById('bg').className
    bgClass = bgClass.replace('bg-yellow-right', 'bg-yellow-left')
    document.getElementById('bg').className = bgClass


    //Mudar o texto do sing up
    let singUp = document.getElementById('WelcomeSingUP').className
    singUp = singUp.replace('RegisterWelcome-Sumir', 'RegisterWelcomeAparecer')
    document.getElementById('WelcomeSingUP').className = singUp



    //Mudar o texto do login
    let login = document.getElementById('Login').className
    login = login.replace('LogWelcomeSumir', 'LogWelcomeAparecer')
    document.getElementById('Login').className = login
}




function Register() {

    let logbox = document.getElementById('registerbox').className


    if (logbox.indexOf('registerNorm') == -1) {


        aparecerLogar()


    } else {


        logbox = logbox.replace('registerNorm', 'registerAnima')
        document.getElementById('registerbox').className = logbox

        document.getElementById('logbox').className += ' registerTextNorm'
    }

}
function aparecerLogar() {


    let logbox = document.getElementById('registerbox').className
    logbox = logbox.replace('registerAnima', 'registerNorm')
    document.getElementById('registerbox').className = logbox

    logbox = document.getElementById('logbox').className
    logbox = logbox.replace('registerTextNorm', '')
    document.getElementById('logbox').className = logbox


}
