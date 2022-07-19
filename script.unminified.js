// ==UserScript==
// @name         FZUtility
// @namespace    https://factorio.zone/
// @version      2.0.0
// @description  An client-side modification for FZ.
// @author       cloudzik76
// @match        https://factorio.zone/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=factorio.zone
// @grant        none
// ==/UserScript==

(function() {
    this.VERSION = '2.0.0'
    this.SAVES_AMOUNT = 9
    console.clear()
    console.log('[i] hello! recieved heartbeat.')

    const socket = new WebSocket('wss://factorio.zone/ws');
    let secret2 = ''

    socket.addEventListener('open', function (event) {
    console.log('[custom websocket] connected')
    });

    socket.addEventListener('message', function (event) {
    console.log('[custom websocket] new message: ', event.data);
    let parse = JSON.parse(event.data)
    secret2 = parse.secret
    console.log('[custom websocket] secret token: '+secret2)
    localStorage.setItem('vs0', secret2);
    });

    let currentToken = localStorage.getItem('userToken')
    let vs0 = localStorage.getItem('vs0')
    const controlContainer = document.querySelector('section.info')
    controlContainer.insertAdjacentHTML('afterbegin', `
            <section class='cinfo'>
            <p>Your are using <strong id="version">${this.VERSION}</strong> version of FZUtility<br><strong>FZUtility</strong> is an client-side modification to simplify your life.</p>
            </section>
    `)

    const controlContainer2 = document.querySelector('section.cinfo')
    controlContainer2.insertAdjacentHTML('beforebegin', `
            <section class='cinfo'>
                <p>Your token is <strong id="token">${currentToken}</strong> <br> Your session secret is <strong id="vs0">${vs0}</strong></p>
            </section>
    `)



    let body = document.getElementsByTagName('body')[0];

    window.onload = function() {
        if (document.getElementById('input-area').disabled) {
       let usar = document.getElementById('input-area')
       usar.setAttribute('placeholder', 'Turn on the server first.')
    } else {
       let usar = document.getElementById('input-area')
       usar.setAttribute('placeholder', '')
    }
    }

    var ss = document.styleSheets[0];

    ss.insertRule('::-webkit-scrollbar {background: white; border-radius: 30px;}', 0);
    ss.insertRule('::placeholder { text-align:center; color: white; }', 0);
    ss.insertRule('::-webkit-scrollbar-track {background: #f1f1f1; border-radius: 30px;}', 0);
    ss.insertRule('::-webkit-scrollbar-thumb {background: #888; border-radius: 30px; width: 1px !important;}', 0);
    ss.insertRule('::-webkit-scrollbar-thumb:hover {background: #555; transition: .3s;}', 0);
    ss.insertRule('.btn-small { background-color: blueviolet; color: white; width: auto; height: 33px; border: transparent; margin-botton: 5px; position: relative; bottom: 10px }', 0);
    ss.insertRule('.fz-utlity-1 { text-align: center; align:center; display: block; margin:auto; width: 100%; }', 0);
    ss.insertRule('.fz-utlity-2 { height: 30px !important; }', 0);
    ss.insertRule('.output-log {} ', 0);
    ss.insertRule('.output-log { color: white } ', 0);

    document.body.style.backgroundColor = "#333";
    document.body.style.color = "white";
    const cc = document.querySelector('.control-container');
    cc.style.backgroundColor = "#222";
    const cc2 = document.querySelector('.output-area');
    cc2.style.backgroundColor = "white";
    cc2.style.color ="white";
    const cc4 = document.querySelector('.socket-info');
    cc4.style.backgroundColor = "#333";
    cc4.style.color = "white";

    const cc5 = document.getElementById('saves')
    const cc6 = document.getElementById('versions')
    const cc7 = document.getElementById('regions')

    cc5.style.backgroundColor = "#333";
    cc5.style.color = "white";

    cc6.style.backgroundColor = "#333";
    cc6.style.color = "white";

    cc7.style.backgroundColor = "#333";
    cc7.style.color = "white";

    const cc8 = document.querySelector('.input-area');
    cc8.style.backgroundColor = "#333";
    cc8.style.borderColor='white';
    cc8.style.borderStyle = "solid";
    cc8.style.borderRadius = "30px";
    cc8.style.color = "white";
    cc8.style.height = "30px";
    cc8.style.position = "relative";
    cc8.style.marginBottom = "30px";
    let usar = document.getElementById('input-area')

    usar.classList.add('fz-utility-1')
    usar.setAttribute('align', 'center')

    if (document.getElementById('input-area').disabled) {
       let usar = document.getElementById('input-area')
       usar.setAttribute('placeholder', 'Turn on the server first.')
    } else {
       let usar = document.getElementById('input-area')
       usar.setAttribute('placeholder', '')
    }

    document.getElementById('input-area').onclick = function() {
      if (document.getElementById('input-area').disabled) {
       let usar = document.getElementById('input-area')
       usar.setAttribute('placeholder', 'Turn on the server first.')
    } else {
       let usar = document.getElementById('input-area')
       usar.setAttribute('placeholder', '')
    }
    }

    if (document.getElementById('input-area').disabled) {
       let usar = document.getElementById('input-area')
       usar.setAttribute('placeholder', 'Turn on the server first.')
    } else {
       let usar = document.getElementById('input-area')
       usar.setAttribute('placeholder', '')
    }

    function h() {
       for (let i = 1; i > this.SAVES_AMOUNT; i++) {
           var data = new FormData()
           data.append('visitSecret', '${vs0}')
           data.append('save', 'slot'+i)
        fetch('https://factorio.zone/api/save/download', {
             method: 'POST',
             body: data
        })}
    }

    var tag = document.createElement("p");
    var saves = document.createElement("button");
    var text = document.createTextNode("Mods");
    var tag2 = document.createElement("p");
    var txt2 = document.createTextNode("Saves");
    tag.setAttribute('align', 'center')
    tag2.setAttribute('align', 'center')
    saves.innerText = 'Download all saves'
    saves.setAttribute('class', 'pure-button start-button fz-utlity-2')
    saves.setAttribute('onclick', h())
    var x = document.createElement("INPUT");
    var secret = document.createElement("INPUT");
    var pgr = document.createElement("progress");
    pgr.setAttribute("value", "0")
    pgr.setAttribute("id", "pg")
    pgr.setAttribute("max", "100")
    x.setAttribute("type", "file");
    x.setAttribute("multiple", "true");
    x.setAttribute("id", "files")
    tag.setAttribute("id", "txt")
    tag2.appendChild(txt2);
    tag.appendChild(text);
    document.body.append(tag)
    document.body.append(x)
    document.body.append(pgr)
    let array = []
    let files = []
    let mods_uploaded = 1
    document.getElementById('files').onchange = function() {
    for (let i = 0; i < document.getElementById('files').files.length; i++) {
        array.push(document.getElementById('files').files.item(i).name)
        let prgs = document.getElementById('pg')
        prgs.value = array.length
        let file = document.getElementById('files').files.item(i);

        let text = document.getElementById('txt')

        prgs.max = array.length

        text.innerHTML = `Mods detected: ${array}`

        var data = new FormData()
        data.append('file', document.getElementById('files').files[i])
        data.append('size', document.getElementById('files').files[i].size)
        data.append('visitSecret', secret2)
        fetch('https://factorio.zone/api/mod/upload', {
             method: 'POST',
             body: data
     }).then(s=>{mods_uploaded++; prgs.value = mods_uploaded})}
    }
})();
