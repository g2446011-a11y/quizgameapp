document.addEventListener('DOMContentLoaded', () => {
  // クイズの質問と選択肢を表示するコード
  const quizData = [
    { question: "バッハの代表作は、どれですか", choices: ["新世界より", "運命交響曲", "ブランデンブルク協奏曲", "フィガロの結婚"], correct: "ブランデンブルク協奏曲" },
    { question: "バッハの生まれた子供の数は、いくつですか", choices: ["5人", "10人", "15人", "20人"], correct: "20人" },
    { question: "映画「アマデウス」の主人公は、誰ですか", choices: ["モーツァルト", "ベートーベン", "バッハ", "ハイドン"], correct: "モーツァルト" },
    { question: "モーツァルトの生まれた都市は、どこですか", choices: ["ウィーン", "ザルツブルク", "ミュンヘン", "プラハ"], correct: "ザルツブルク" },
    { question: "ベートーベンは、何派ですか", choices: ["バロック派", "古典派", "ロマン派", "近代・現代音楽派"], correct: "古典派" },
    { question: "オペラが生まれた国は、どこですか", choices: ["イタリア", "ドイツ", "フランス", "スペイン"], correct: "イタリア" },
    { question: "シューマンの代表作は、どれですか", choices: ["魔笛", "マタイ受難曲", "トロイメライ", "魔王"], correct: "トロイメライ" },
    { question: "一般的なグランドピアノの鍵盤の数はいくつ？", choices: ["66", "77", "88", "99"], correct: "88" },
    { question: "フランス生まれの作曲家は、誰ですか", choices: ["ホルスト", "オッフェンバック", "ラヴェル", "ヴェルディ"], correct: "ラヴェル" },
    { question: "舞台上の奏者が何も演奏しないアメリカの作曲家ジョン・ケージの曲名は？", choices: ["2分11秒", "3分22秒", "4分33秒", "5分44秒"], correct: "4分33秒" }
  ];

  let currentQuestionIndex = 0;
  let score = 0;

  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const nextButton = document.getElementById("next-btn");
  const headerElement = document.querySelector("h1"); // 質問番号を表示するための要素

  // 現在の質問を表示
  function showQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];

    // 質問番号を表示 (Q1, Q2, Q3...)
    headerElement.textContent = `Q${currentQuestionIndex + 1}`;

    questionElement.textContent = currentQuestion.question;

    // 選択肢をリセット
    choicesElement.innerHTML = '';

    // 選択肢をボタンとして追加
    currentQuestion.choices.forEach(choice => {
      const button = document.createElement("button");
      button.textContent = choice;
      button.addEventListener("click", () => selectAnswer(choice));
      choicesElement.appendChild(button);
    });
  }

  // 答えを選択
  function selectAnswer(choice) {
    const currentQuestion = quizData[currentQuestionIndex];

    if (choice === currentQuestion.correct) {
      alert("正解！");
      score++;
    } else {
      alert("不正解。正解は " + currentQuestion.correct + " です。");
    }

    // 次へボタンを表示
    nextButton.style.display = "block";
  }

  // 次の質問に進む
  function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizData.length) {
      showQuestion();
    } else {
      showResults();
    }

    nextButton.style.display = "none";
  }

  // クイズの結果を表示
  function showResults() {
    questionElement.textContent = `クイズ終了！あなたのスコアは ${score} / ${quizData.length} です。`;
    choicesElement.innerHTML = '';
    headerElement.textContent = "結果"; // 最後に質問番号の代わりに "結果" を表示
    nextButton.style.display = "none";
  }

  // 次の質問に進むボタンのイベントリスナー
  nextButton.addEventListener("click", nextQuestion);

  // 初回の質問を表示
  showQuestion();
});
