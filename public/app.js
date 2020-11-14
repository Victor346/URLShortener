function shortenURL(){
    let original_url = document.getElementById('original_url').value;

    let body = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url: original_url })
    }

    fetch('/url', body)
    .then(response => {
        if (response.ok) {
        return response.json();
        } else {
        throw "Error en la llamada Ajax";
        }
    })
    .then(result => {
        document.getElementById('result').innerHTML = result.short_url
    })
    .catch(error => {
        console.log('Error: ', error);
    })

}
