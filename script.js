const resumeData = {
    experience: [
        "IT Assistant (Temporary) at S.A.N.A.C.O - Pretoria (2022 - 2022)",
        "Website Manager and Content Creator at The Matrix Network News - Remote (2023 - 2024)",
        "Video Editor & Graphic Designer - Freelance (2022 - Present)",
        "Digital Marketing Intern at JD Group - Sandton (2024 - Present)"
    ],
    education: [
        "Associates Degree / Diploma in Information Technology from The Independent Institute Of Education's Richfield Graduate Institute Of Technology & Business (2020 - 2022)",
        "Matric Education - NSC Grade 12 (Bachelor) from Mahonisi Christian Learning Centre"
    ],
    skills: [
        "Management Skills",
        "Creativity",
        "Digital Marketing",
        "Negotiation Skills",
        "Critical Thinking",
        "Leadership",
        "Video Editing",
        "Java Programming",
        "Graphic Design",
        "Website Management",
        "Fast Typing",
        "Copywriting & SEO Optimization",
        "C#, Python & C++ Language",
        "Database Management"
    ],
    projects: [
        "Dating App Project For Finding Partners On Tailored Preferences",
        "Confessional Website For Sharing Confessions With People With Solutions",
        "Barber Shop & Saloon Showcase Website To Advertise Hair Businesses"
    ],
    portfolio: "https://tallysithsportfolio.wordpress.com",
    websites: [
        "https://incredibleconnection-m23-stg.vaimo-sa-cloud.co.za/homepage-demo-tally?160"
    ]
};

function sendMessage() {
    const input = document.getElementById('question-input');
    const question = input.value.trim();
    if (!question) return;

    // Add user's question to chat
    addMessage(question, 'user');

    // Generate bot's response
    const answer = getAnswer(question);
    setTimeout(() => {
        addMessage(answer, 'bot');
    }, 500);

    // Clear input
    input.value = '';
}

function addMessage(text, sender) {
    const chatMessages = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);
    messageDiv.innerHTML = `<p>${text}</p>`;
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to bottom
}

function getAnswer(question) {
    let answer = "";

    if (question.includes("experience")) {
        answer = resumeData.experience.join("<br>");
    } else if (question.includes("education")) {
        answer = resumeData.education.join("<br>");
    } else if (question.includes("programming") || question.includes("languages")) {
        answer = resumeData.skills.filter(skill => skill.includes("Programming") || skill.includes("Language")).join("<br>");
    } else if (question.includes("projects")) {
        answer = resumeData.projects.join("<br>");
    } else if (question.includes("portfolio") || question.includes("websites")) {
        answer = `You can view my portfolio here: <a href="${resumeData.portfolio}" target="_blank">${resumeData.portfolio}</a><br>`;
        answer += `Here are some websites I've built: <a href="${resumeData.websites[0]}" target="_blank">${resumeData.websites[0]}</a>`;
    } else {
        answer = "I'm sorry, I don't have information on that. Please ask another question!";
    }

    return answer;
}

// Add click event to suggested questions
document.querySelectorAll('.suggested-questions li').forEach(item => {
    item.addEventListener('click', () => {
        const question = item.innerText;
        document.getElementById('question-input').value = question;
        sendMessage();
    });
});