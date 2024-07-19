function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    const clone = element.cloneNode(true);

    const button = clone.querySelector('button');
    if (button) {
        clone.removeChild(button);
    }

    const text = clone.innerText || clone.textContent;
    
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Copied to clipboard');
}