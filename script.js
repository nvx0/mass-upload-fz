// ==UserScript==
// @name         MassModUploaderFZ
// @namespace    https://factorio.zone/
// @version      1.0
// @description  An client-side modification to simplify uploading mods.
// @author       cloudzik76
// @match        https://factorio.zone/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=factorio.zone
// @grant        none
// ==/UserScript==

(function() {
    let arr = []
    alert('massmodupload by cloudzik76 has been loaded')
    var tag = document.createElement("p");
    var text = document.createTextNode("waiting for files..");
    tag.appendChild(text);
    var x = document.createElement("INPUT");
    var secret = document.createElement("INPUT");
    x.setAttribute("type", "file");
    secret.setAttribute("type", "text");
    secret.setAttribute("id", "secret");
    secret.setAttribute("placeholder", "visitSecret");
    x.setAttribute("multiple", "true");
    x.setAttribute("id", "files")
    tag.setAttribute("id", "txt")
    document.body.append(x)
    document.body.append(secret)
    document.body.append(tag)
    document.getElementById('files').onchange = function() {
        for (let i = 0; i < document.getElementById('files').files.length; i++) {
            arr.push(document.getElementById('files').files.item(i).name)
            let file = document.getElementById('files').files.item(i);
            var data = new FormData()
            data.append('file', document.getElementById('files').files[i])
            data.append('size', document.getElementById('files').files[i].size)
            data.append('visitSecret', document.getElementById('secret').value)

            fetch('https://factorio.zone/api/mod/upload', {
                method: 'POST',
                body: data
            })

            document.getElementById('txt').innerHTML = arr
        }
    };
})();
