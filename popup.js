// const server = 'https://hina-trading-tools-production.up.railway.app'
const server = 'http://localhost:7777';

async function POST(url, body = {}, query = {}) {
    url = query ? `${url}?${new URLSearchParams(query)}` : url;
    return fetch(`${server}${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(response => response.json())
}

function LoadExtension(response, server) {
    if (document.getElementById('hina-ext-container')) return;
    async function fetch_GET(url, query = {}) {
        url = query ? `${url}?${new URLSearchParams(query)}` : url;
        return fetch(`${server}${url}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
    const ext_container = document.createElement('div');
    const script = document.createElement("script");
    const interact = document.createElement("script");
    
    interact.src = "https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js";
    document.body.appendChild(interact);
    ext_container.id = 'hina-ext-container';
    script.id = 'hina-ext-script';

    const crypto = document.createElement("script");
    crypto.src = "https://cdn.jsdelivr.net/npm/crypto-js@4.1.1/build/crypto-js.min.js";
    document.body.appendChild(crypto);

    async function loadEngine() {
        await fetch_GET(`/public/hina-ex2.css`, { token: response.token })
        .then(response => response.text())
        .then(css => {
            const style = document.createElement('style');
            style.innerHTML = css;
            document.body.appendChild(style);
        })
        await fetch_GET(`/public/hn-ex3.html`, { token: response.token })
        .then(response => response.text())
        .then(html => {
            ext_container.innerHTML = html;
            document.body.appendChild(ext_container);
        })
        .then(async () => {
            async function loadHinaComponent() {
                [{id: 'hina-extension-toolbar', html: 'toolbar.html'},
                {id: 'hina-extension-signal-notifier', html: 'signal_notifier.html'},
                {id: 'hina-extension-chart-container', html: 'chart-container.html'},
                {id: 'filter_popup', html: 'filter-popup.html'},
                {id: 'indicator-popup', html: 'indicator-popup.html'},
                {id: 'setting-popup', html: 'setting-popup.html'},
                {id: 'calc-popup', html: 'calc-popup.html'},
                {id: 'menu-popup', html: 'menu-popup.html'}]
                .forEach(async (component) => {
                    await fetch_GET(`/public/components/${component.html}`, { token: response.token })
                    .then(response => response.text())
                    .then(data => {
                        document.getElementById(component.id).innerHTML = data;
                    })
                })
                await fetch_GET('/public/public.pem', {token: response.token})
                    .then(response => response.text())
                    .then(pem => {
                        pem = pem.replace(/-----BEGIN PUBLIC KEY-----/, '')
                        .replace(/-----END PUBLIC KEY-----/, '')
                        .replace(/\s/g, '');
                        localStorage.setItem('hina-public-key', pem);                           
                    })
            }
            await loadHinaComponent();
            localStorage.setItem('hina-token', response.token);
        })
        if (!document.getElementById('hina-ext-script')) await fetch_GET(`/public/extension-script.js`, { token: response.token })
        .then(response => response.text())
        .then(js => {
            script.src = URL.createObjectURL(new Blob([js], { type: 'application/javascript' }));
            document.body.appendChild(script);
        })

    }

    loadEngine()
}

async function ping(token) {
    fetch(`${server}/ping?token=${token}`)
    .then(response => response.json())
    .then(async data => {
        if (data.success) {
            let tabs = await chrome.tabs.query({ active: true, currentWindow: true });
            let tab = tabs[0];
            if (data.is_valid_token)  {
                data.token = token;
                chrome.scripting.executeScript({
                    target: { tabId: tab.id },
                    func: LoadExtension,
                    args: [data, server],
                    world: 'MAIN',
                })
                document.getElementById('login-screen').style.display = 'none';
                document.getElementById('logged-screen').style.display = 'flex';
                document.getElementById('username').innerText = data.username;
            }
            document.getElementById('version').innerText = data.version;
        }
        document.getElementById('preloader').style.display = 'none';
    })
}


const token = localStorage.getItem('hina-token');
ping(token);


document.getElementById('login-btn').addEventListener('click', async function() {
    let tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    let tab = tabs[0];
    const username = document.getElementById('user-uid').value;
    const password = document.getElementById('user-pwd').value;
    let response  = await POST('/login', {username, password})
    if (!response.success) {
        document.querySelector('#error-message').innerText = 'Login failed, please try again.';
        document.querySelector('#error-message').style.display = 'block';
        return;
    }
    localStorage.setItem('hina-token', response.token);
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: LoadExtension,
        args: [response, server],
        world: 'MAIN',
    })
    document.getElementById('login-screen').style.display = 'none';
    document.getElementById('logged-screen').style.display = 'flex';
    document.getElementById('username').innerText = username;
});

document.getElementById('logout-btn').addEventListener('click', async function() {
    let tabs = await chrome.tabs.query({ active: true, currentWindow: true });
    let tab = tabs[0];
    localStorage.removeItem('hina-token');
    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
            window.location.reload();
        },
        world: 'MAIN',
    })
})