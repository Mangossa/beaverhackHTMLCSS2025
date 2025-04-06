function toggleSettings() {
  const panel = document.getElementById('settingsPanel');
  panel.classList.toggle('open');
}


const settingsButton = document.querySelector('.setting-button');
const settingsPanel = document.getElementById('settingsPanel');
const closeButton = document.querySelector('.close-button');
const body = document.body;
const topBar = document.querySelector('.top-bar');
const inputArea = document.querySelector('.inputArea');
const textareaElement = document.querySelector('.textareaElement');
const userMsgContainers = document.querySelectorAll('.user-msg-container');
const canvasMsgContainers = document.querySelectorAll('.canvas-msg-container');
const darkModeToggle = document.getElementById('dark-mode-toggle');
const slider = document.querySelector('.slider');

function toggleSettings() {
    settingsPanel.classList.toggle('open');
}

settingsButton.addEventListener('click', toggleSettings);
closeButton.addEventListener('click', toggleSettings);

darkModeToggle.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    topBar.classList.toggle('dark-mode');
    inputArea.classList.toggle('dark-mode');
    textareaElement.classList.toggle('dark-mode');
    userMsgContainers.forEach(container => container.classList.toggle('dark-mode'));
    canvasMsgContainers.forEach(container => container.classList.toggle('dark-mode'));
    slider.classList.toggle('dark-mode');

    // Save to localStorage
    if (darkModeToggle.checked) {
        localStorage.setItem('darkMode', 'enabled');
    } else {
        localStorage.setItem('darkMode', 'disabled');
    }
});

// Check localStorage on load
if (localStorage.getItem('darkMode') === 'enabled') {
    darkModeToggle.checked = true;
    body.classList.add('dark-mode');
    topBar.classList.add('dark-mode');
    inputArea.classList.add('dark-mode');
    textareaElement.classList.add('dark-mode');
    userMsgContainers.forEach(container => container.classList.add('dark-mode'));
    canvasMsgContainers.forEach(container => container.classList.add('dark-mode'));
    slider.classList.add('dark-mode');
}
