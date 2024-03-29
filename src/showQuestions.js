import App from "./main.js"

export function showQuestions() {
    const questionArr = [
      {
        question_title: "Can I stream movies on my watch-list",
        question_text: "No, you can't but it is a feature that will be implemented in later versions"
      },
      {
        question_title: "Can I share my watch-list",
        question_text: "Yes, you can share watch list on different platforms for others to see."
      },
      {
        question_title: "Are there any ads?",
        question_text: "No, the app is ad free, so you can enjoy a wonderful experience without any interruption."
      }
    ];

    // create & append FAQ section
    const section = document.createElement('section')
    section.setAttribute('id', 'FAQ')
    section.innerHTML = '';
    this.faq.appendChild(section);

    // the code below will contain a lot of repeat, but for now the purpose is to get it to work properly, then refactor the code later for readability purpose

    // create container div with header and append it to section
    const questions = document.createElement('div')
    questions.setAttribute('class', 'questions')
    questions.innerHTML = `
    <h1 class="faq-header">Frequently Asked Questions</h1>
    `;
    section.appendChild(questions);

    // create question section wrapper and append it to container div
    const question_section = document.createElement('div')
    question_section.setAttribute('class', 'question-section')
    question_section.innerHTML = '';
    questions.appendChild(question_section);

    // loop through question array and render article element according to number of objects in array
    questionArr.forEach(faQuestion => {
      // create article element and append it to q-section wrapper
      const article = document.createElement('article')
      article.setAttribute('class', 'question');
      question_section.appendChild(article);

      // create title div with p element holding value of title from array & append to article element
      const questionTitle = document.createElement('div')
      questionTitle.setAttribute('class', 'question-title')
      questionTitle.innerHTML = `<p>${faQuestion.question_title}</p>`;
      article.appendChild(questionTitle);

      // create button element holding span elements that hold p tags each & append to title div
      const button = document.createElement('button')
      button.setAttribute('class', 'question-btn')
      button.setAttribute('type', 'button')
      button.innerHTML = `
        <span class="plus-icon">
          <p>+</p>
        </span>
        <span class="minus-icon">
          <p>-</p>
        </span>
      `;
      questionTitle.appendChild(button);

      // create questionText div holding p element with the value of question-text from question array & append to article
      const questionText = document.createElement('div')
      questionText.setAttribute('class', 'question-text')
      questionText.innerHTML = `<p>${faQuestion.question_text}</p>`;
      article.appendChild(questionText);


    });

    // question toggle 
    const question_article = document.querySelectorAll(".question");

    question_article.forEach(function (fold) {
      const btn = fold.querySelector(".question-btn");

      btn.addEventListener("click", function () {
        // console.log(question);

        question_article.forEach(function (item) {
          if (item !== fold) {
            item.classList.remove("show-text");
          };
        });

        fold.classList.toggle("show-text");
      });
    });

  }
