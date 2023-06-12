const main = document.getElementById("main")

const APIURL = "https://api.github.com/users/"
const getUser = async(username) => {
    const response = await fetch(APIURL + username)
    const data = await response.json()

    const card = `
    <div class="card">
        <div class="avatar">
            <img src="${data.avatar_url}" alt="">

        </div>
        <div class="user_info">
            <h2>${data.name}</h2>
            <p><i class="fa-solid fa-location-dot"></i> ${data.location}</p>
            <p><i class="fa-solid fa-building"></i> <strong>Company</strong>: ${data.company}</p>
            <p>${data.bio}</p>

            <ul class="info">
                <li>${data.followers} <strong>Followers</strong> </li>
                <li>${data.following} <strong>Following</strong> </li>
                <li>${data.public_repos} <strong>Repos</strong> </li>
            </ul>
            <div id="repos">
               
            </div>
        </div>
    </div>
    `
    main.innerHTML = card
    getRepos(username) 
}

const input = document.getElementById("search")
input.addEventListener("change", () => {
      getUser(input.value)
})

const getRepos = async(username) => {
    const response = await fetch(APIURL + username + "/repos");
    const repoData = await response.json()
    for(let i = 0; i < repoData.length; i++) {
        let a = document.createElement("a")
        a.setAttribute("href", `${repoData[i].svn_url}`)
        a.setAttribute("target", "_blank")
        a.innerText = `${repoData[i].name}`
        repos.appendChild(a);
    }   

}