function sendMessage() {
  const input = document.getElementById("message-input");
  const message = input.value.trim();

  if (message !== "") {
    const chatMessages = document.getElementById("chat-messages");
    const messageDiv = document.createElement("div");
    messageDiv.className = "message outgoing";
    messageDiv.textContent = message;

    chatMessages.appendChild(messageDiv);
    input.value = "";
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}
