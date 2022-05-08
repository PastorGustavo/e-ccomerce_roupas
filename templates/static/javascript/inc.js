function mn() {

    let classe = document.getElementById('list').className

    if (classe.indexOf('peq') != -1) {

        document.getElementById('list').className = 'peq2'
    }
    if (classe.indexOf('peq2') != -1) {

        document.getElementById('list').className = 'peq'
    }

}

function Name() {
    let url = window.location.href
    url = url.split('/')

    if (url[4]) {

        switch (url[4]) {
            case 'SP':
                document.getElementById('Catego').textContent = 'Paulistas'
                document.getElementById('categospan').textContent = 'Times Paulistas'
                break

            case 'RJ':
                document.getElementById('Catego').textContent = 'Cariocas'
                document.getElementById('categospan').textContent = 'Times Cariocas'
                break

            case 'SC':
                document.getElementById('Catego').textContent = 'Catarinenses'
                document.getElementById('categospan').textContent = 'Times Catarinenses'
                break

            case 'RS':
                document.getElementById('Catego').textContent = 'Gaúchos'
                document.getElementById('categospan').textContent = 'Times Gaúchos'

                break
        }

        return
    }

    if (url[3]) {
        switch (url[3]) {

            case 'BR':
                document.getElementById('Catego').textContent = 'Brasileiros'
                document.getElementById('categospan').textContent = 'Times do Brasil'
                break

            case 'IT':
                document.getElementById('Catego').textContent = 'Internacionais'
                document.getElementById('categospan').textContent = 'Times Gringos'

                break

        }
        return
    }

}

Name()