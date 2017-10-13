/**
 * Created by azlar on 26/09/2017.
 */


export const request = async (api, params, needTk = true) => {
    // todo: check window.fetch

    let data = new FormData();

    for(let i of Object.keys(params)) {
        data.append(i, typeof params[i] === 'object' ? JSON.stringify(params[i]) : params[i]);
    }

    let webResponse, webRes;
    try {
        webResponse = await window.fetch(api, {
            method: 'POST',
            body: data,
            // mode: 'no-cors'
        });

        // return webResponse.json();
        webRes = await webResponse.json();

    }catch (e) {
        console.log(e);

        throw e;
    }


    //done
    if(webRes.code == 0) {

        return webRes.results;
    }else {
        throw "err msg";
    }
};


export const requestJsonP = function () {
};

/**
 * copy to clipboard
 * from: https://stackoverflow.com/questions/22581345/click-button-copy-to-clipboard-using-jquery
 * @param elem: dom-element
 */
export const copyToClipboard = (elem) => {
    // create hidden text element, if it doesn't already exist
    var targetId = "_hiddenCopyText_";
    var isInput = elem.tagName === "INPUT" || elem.tagName === "TEXTAREA";
    var origSelectionStart, origSelectionEnd;
    if (isInput) {
        // can just use the original source element for the selection and copy
        target = elem;
        origSelectionStart = elem.selectionStart;
        origSelectionEnd = elem.selectionEnd;
    } else {
        // must use a temporary form element for the selection and copy
        target = document.getElementById(targetId);
        if (!target) {
            var target = document.createElement("textarea");
            target.style.position = "absolute";
            target.style.left = "-9999px";
            target.style.top = "0";
            target.id = targetId;
            document.body.appendChild(target);
        }
        target.textContent = elem.textContent;
    }
    // select the content
    var currentFocus = document.activeElement;
    target.focus();
    target.setSelectionRange(0, target.value.length);

    // copy the selection
    var succeed;
    try {
        succeed = document.execCommand("copy");
    } catch(e) {
        succeed = false;
    }
    // restore original focus
    if (currentFocus && typeof currentFocus.focus === "function") {
        currentFocus.focus();
    }

    if (isInput) {
        // restore prior selection
        elem.setSelectionRange(origSelectionStart, origSelectionEnd);
    } else {
        // clear temporary content
        target.textContent = "";
    }
    return succeed;
};


export function formatDate(date) {
    if(!date) {
        return date;
    }
    if(date instanceof Date) {
        return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    }else {
        return new Date(date);
    }
}