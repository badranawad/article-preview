var button = document.getElementById('shareButton');
var shareView = document.getElementById('shareWindow');

function shareWindow() {

    if(shareView.style.visibility === 'hidden') {
        shareView.style.visibility = 'visible';
        let darkButton = getComputedStyle(button).getPropertyValue('--gravish-blue');
        button.style.background = darkButton;
    }
    else {
        shareView.style.visibility = 'hidden';
        let lightButton = getComputedStyle(button).getPropertyValue('--light-gravish-blue');
        button.style.background = lightButton;
    }
}

var listener = button.addEventListener('click', () => shareWindow());

window.onload = shareWindow();