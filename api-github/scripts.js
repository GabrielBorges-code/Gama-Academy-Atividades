const ul = document.querySelector('ul');
const input = document.querySelector('input')

function getApiGitHub() {
    fetch('https://api.github.com/users/GabrielBorges-code/repos').then(async resp => {
        if(!resp.ok) {
            throw new Error(res.status)

        }

        let data = await resp.json();

        data.map(item => {
            let li = document.createElement('li');
            li.innerHTML =`
                <strong>${item.name.toUpperCase()}</strong>
                <span>${item.html_url}</span>
                <p>${item.language?item.language:'outro (a)'}</p>
                <hr>
            `

            ul.appendChild(li);

        })

        

    }).catch(err => console.log(err))
}

getApiGitHub();

input.addEventListener('focusout', (e) => {
    e.defaultPrevented();
    
})