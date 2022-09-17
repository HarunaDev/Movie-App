const App = {
  mainBody: document.getElementById("movie-container"),
  // methods
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
  showReview(image,side) {
  if(side === 'right'){
    // this.innerHTML = ""
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
      // this.innerHTML = "";
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
  showQuestions() {
    // this.mainBody.innerHTML = ""
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
    ]

    const section = document.createElement('section')
    section.setAttribute('id', 'FAQ')
    section.innerHTML = ''
    this.mainBody.appendChild(section)

    // the code below will contain a lot of repeat, but for now the purpose is to get it to work properly, then refactor the code later for readability purpose

    const questions = document.createElement('div')
    questions.setAttribute('class', 'questions')
    questions.innerHTML = `
    <h1 class="faq-header">Frequently Asked Questions</h1>
    `;
    section.appendChild(questions)

    const question_section = document.createElement('div')
    question_section.setAttribute('class', 'question-section')
    question_section.innerHTML = ''
    questions.appendChild(question_section)

  },
  renderPage() {
    this.showBanner();
    this.showReview("blank.png", "right");
    this.showReview("jiraiya.png", "left");
    this.showQuestions()
  }
};

App.renderPage();

