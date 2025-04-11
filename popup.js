const server = 'https://hina-trading-tools-production.up.railway.app'

class HinaServer {
    constructor() {
        this.server = server;
        this.token = null;
    }
    async GET(url, query = {}) {
        url = query ? `${url}?${new URLSearchParams(query)}` : url;
        return fetch(`${this.server}${url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
    }
    async POST(url, body = {}, query = {}) {
        url = query ? `${url}?${new URLSearchParams(query)}` : url;
        return fetch(`${this.server}${url}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }).then(response => response.json())
    }
}

document.getElementById('login-btn').addEventListener('click', async function() {
    let tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    let tab = tabs[0];
    const username = document.getElementById('user-uid').value;
    const password = document.getElementById('user-pwd').value;
    const hina_server = new HinaServer();
    let response  = await hina_server.POST('/login', {username, password})
    hina_server.token = response.token;
    if (!response.success) {
        const login_btn = document.getElementById('login-btn');
        login_btn.querySelector('span').innerText = 'Login failed, please try again.';
        login_btn.classList.add('login-faied');
        setTimeout(() => {
            login_btn.querySelector('span').innerText = 'Log in';
            login_btn.classList.remove('login-faied');
        }, 3000);
        return;
    }
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (response, server) => {
            async function fetch_GET(url, query = {}) {
                url = query ? `${url}?${new URLSearchParams(query)}` : url;
                return fetch(`${server}${url}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                })
            }
            if (!response.success) {
                const login_btn = document.getElementById('login-btn');
                login_btn.querySelector('span').innerText = 'Login failed, please try again.';
                login_btn.classList.add('login-faied');
                setTimeout(() => {
                    login_btn.querySelector('span').innerText = 'Log in';
                    login_btn.classList.remove('login-faied');
                }, 3000);
                return;
            }
            if (document.getElementById('hina-ext-container')) document.getElementById('hina-ext-container').remove();
            if (document.getElementById('hina-ext-script')) document.getElementById('hina-ext-script').remove();
            const ext_container = document.createElement('div');
            const script = document.createElement("script");
            const interact = document.createElement("script");
            interact.src = "https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js";
            document.body.appendChild(interact);
            ext_container.id = 'hina-ext-container';
            script.id = 'hina-ext-script';

            fetch_GET(`/public/hina-extension.html`, { token: response.token })
            .then(response => response.text())
            .then(html => {
                ext_container.innerHTML = html;
                document.body.appendChild(ext_container);
            }).then(() => {
            if (document.getElementById('hina-ext-script')) return;
            fetch_GET(`/public/extension-script.js`, { token: response.token })
            .then(response => response.text())
            .then(js => {
                script.src = URL.createObjectURL(new Blob([js], { type: 'application/javascript' }));
                document.body.appendChild(script);
            })
            });
        },
        args: [response, server],
        world: 'MAIN',
    })
});