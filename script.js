document.getElementById('send-button').addEventListener('click', sendMessage);

function sendMessage() {
  const input = document.getElementById('user-input');
  const chat = document.getElementById('chat-container');

  const userText = input.innerText.trim();
  if (!userText) return;

  const userMessage = `
    <div class="user-msg-div">
      <div class="user-msg-container">
        <div class="user-msg-text">${userText}</div>
      </div>
    </div>
  `;

  chat.insertAdjacentHTML('beforeend', userMessage);

  const canvasMessage = `
    <div class="canvas-msg-div">
      <div class="canvas-msg-container">
        <div class="canvas-msg-text">This is a canvas response to: "${userText}"</div>
      </div>
    </div>
  `;

  chat.insertAdjacentHTML('beforeend', canvasMessage);

  input.innerText = '';
  input.focus(); // bring focus back to the editable div
}
