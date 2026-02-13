const questions = [
  {
    q: "ถ้ามีเวลาว่าง 1 วัน อยากทำอะไรด้วยกัน",
    c: ["กินเนื้อย่าง", "เล่นเกมส์", "อ็อด ๆ กัน"],
  },
  {
    q: "รักหนูมากแค่ไหน",
    c: ["มาก", "มาก ๆ", "มากที่สุด"],
  }
];

let index = 0;
let answers = [];

const questionText = document.getElementById("questionText");
const choicesBox = document.getElementById("choices");
const answerHint = document.getElementById("answerHint");
const gameCard = document.getElementById("gameCard");

function renderQuestion() {
  const q = questions[index];
  questionText.textContent = `${index + 1}. ${q.q}`;
  answerHint.textContent = "";
  choicesBox.innerHTML = "";

  q.c.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(choice);
    choicesBox.appendChild(btn);
  });
}

function selectAnswer(choice) {
  answers.push({
    question: questions[index].q,
    answer: choice,
  });

  answerHint.textContent = "เลือกคำตอบแล้วนะ ";
  index++;

  setTimeout(() => {
    if (index < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 900);
}

function showResult() {
  let resultHTML = `<h2>คำตอบของเธอ </h2>`;

  answers.forEach((item, i) => {
    resultHTML += `
      <p class="subtle">
        ${i + 1}. ${item.question}<br>
        <strong>${item.answer}</strong>
      </p>
    `;
  });
  gameCard.innerHTML = resultHTML;
}

renderQuestion();