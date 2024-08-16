const screen = {
    userProfile: document.querySelector('.profile-data'),
    renderUser(user) {
        this.userProfile.innerHTML = `<div class="info">
                                        <img src="${user.avatarUrl}" alt="Foto do perfil do usuário" />
                                        <div class="data">
                                            <h1>${user.name ?? 'Não possui nome cadastrado 😥'}</h1>
                                            <p>${user.bio ?? 'Não possui bio cadastrada 😥'}</p>
                                            <p>👥Followers: ${user.followers}</p>
                                            <p>👥Following: ${user.following}</p>
                                      </div>
                                      </div>`

        let repositoriesItens = ''
        user.repositories.forEach(repo => repositoriesItens += 
            `<li>
            <a href="${repo.html_url}" target="_blank"><span>${repo.name}</span> 
            <div class="repo-infos"> 
            <div class="infos">🍴${repo.forks}</div> 
            <div class="infos">⭐${repo.stargazers_count}</div> 
            <div class="infos">👀${repo.watchers}</div> 
            <div class="infos">👨‍💻${repo.language}</div>
            </div>
            </a>
            </li`)

        if (user.repositories.length > 0) {
            this.userProfile.innerHTML += `<div class="repositories section">
                                            <h2>Repositórios</h2>
                                            <ul>${repositoriesItens}</ul>
                                           </div>`
        }

        let eventItens = ''
        user.events.forEach(event => {
            if (event.type == "PushEvent") {
                eventItens += `<li><span>${event.repo.name}</span> -${event.payload.commits[0].message}</li>`
            } else {
                eventItens += `<li><span>${event.repo.name}</span> -Sem mensagem de commit</li>`
            }

        })
        if (user.events.length > 0) {
            this.userProfile.innerHTML += `<div class="events section">
                                            <h2>Eventos</h2>
                                            <ul>${eventItens}</ul>
                                           </div>`
        }
    },
    renderNotFound() {
        this.userProfile.innerHTML = "<h3>Usuário não encontrado</h3>"
    }
}

export { screen }