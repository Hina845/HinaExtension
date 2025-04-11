// const server = 'http://localhost:7777'
// chrome.runtime.onMessage.addListener(async (request, sender, sendResponse) => {
//     console.log(request)
//     if (request.action === "fetchData") {
//         let response = await fetch(`${server}/login`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ username: request.username, password: request.password })
//         })
//         response = await response.json()
//         console.log(response)
//         if (response.success) {
//             await chrome.storage.local.set({'apiScript': data.script})
//             sendResponse({ success: true });
//         } else {
//             sendResponse({ success: false, error: "Failed to fetch API data" });
//         };
//         return true;
//     }
// });