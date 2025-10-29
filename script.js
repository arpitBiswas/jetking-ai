// Simple chat simulation
const chatContainer = document.getElementById('chatContainer');
const chatForm = document.getElementById('chatForm');
const userInput = document.getElementById('userInput');

function appendMessage(text, sender) {
  const div = document.createElement('div');
  div.className = 'message ' + sender;
  div.textContent = text;
  chatContainer.appendChild(div);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// Dummy AI response
function aiResponse(userText) {
  // Simple response logic, replace with actual AI API integration if needed
  if (/hello|hi/i.test(userText)) {
    return "Hello! How can I assist you today?";
  } else if (/your name/i.test(userText)) {
    return "I'm JETKING AI, your chat assistant.";
  } else if (/help/i.test(userText)) {
    return "Sure! Ask me anything about tech, education, or general topics.";
  } else {
    return "I'm here to help! Please ask your question.";
  }
}

chatForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const text = userInput.value.trim();
  if (text) {
    appendMessage(text, 'user');
    setTimeout(() => {
      const reply = aiResponse(text);
      appendMessage(reply, 'bot');
    }, 700); // Simulate response delay
    userInput.value = '';
  }
});