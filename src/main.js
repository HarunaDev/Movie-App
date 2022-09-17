const App = {
  mainBody: document.getElementById("movie-container"),
  // methods
  // show  banner method
  showBanner() {
    this.mainBody.innerHTML = "";
    const section = document.createElement('section')
    section.setAttribute('id', 'Banner')
    section.innerHTML = `
    <h1>Lorem ipsum dolor sit amet.</h1>
  
    <h3>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, voluptates? Et possimus dolor numquam in.</h3>
  
    <button>Get started</button>
    `;
    this.mainBody.appendChild(section);
  },
  // show review method
  showReview(image,side) {
    // check if side is right then render the value in tempelate literals
  if(side === 'right'){
    const section = document.createElement('section')
    section.setAttribute('id',  'review')
    section.innerHTML = `
    <img src="img/${image}" alt="">

    <div class="${side}">
      <h1>Lorem ipsum dolor sit amet.</h1>
  
      <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, facere! Quaerat, et nostrum?</h3>
    </div>
    `;
    this.mainBody.appendChild(section);
  } else if(side === 'left'){
    // check if side is right then render the value in tempelate literals
      const section = document.createElement('section')
      section.setAttribute('id',  'review')
      section.innerHTML = `
      <div class="${side}">
        <h1>Lorem ipsum dolor sit amet.</h1>
        
        <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. In, facere! Quaerat, et nostrum?</h3>
      </div>
        
      <img src="img/${image}" alt="">
      `;
      this.mainBody.appendChild(section);
  }
   return; 
  },
  // show questions method
  showQuestions() {
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
    this.mainBody.appendChild(section);

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
  },
  // render page method
  renderPage() {
    this.showBanner();
    this.showReview("blank.png", "right");
    this.showReview("jiraiya.png", "left");
    this.showQuestions();
  }
};

App.renderPage();

