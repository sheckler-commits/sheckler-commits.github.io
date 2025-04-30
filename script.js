
document.addEventListener("DOMContentLoaded", () => {
    const sendBtn = document.getElementById("send-btn");
    const userInput = document.getElementById("user-input");
    const chatBox = document.getElementById("chat-box");

    if (sendBtn && userInput && chatBox) {
        sendBtn.addEventListener("click", () => {
            const userMessage = userInput.value.trim();
            if (userMessage !== "") {
                // Display user's message
                const userBubble = document.createElement("div");
                userBubble.className = "user-message";
                userBubble.textContent = "You: " + userMessage;
                chatBox.appendChild(userBubble);

                // Simulate AI response
                const aiBubble = document.createElement("div");
                aiBubble.className = "ai-message";
                aiBubble.textContent = "AI: I'm still learning, but I heard you say: "" + userMessage + """;
                chatBox.appendChild(aiBubble);

                // Clear input
                userInput.value = "";

                // Scroll to bottom
                chatBox.scrollTop = chatBox.scrollHeight;
            }
        });
    }
});
