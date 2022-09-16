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
        "question-title": "Can I stream movies on my watch-list",
        "question-text": "No, you can't but it is a feature that will be implemented in later versions"
      },
      {
        "question-title": "Can I share my watch-list",
        "question-text": "Yes, you can share watch list on different platforms for others to see."
      },
      {
        "question-title": "Are there any ads?",
        "question-text": "No, the app is ad free, so you can enjoy a wonderful experience without any interruption."
      }
    ]
  },
  renderPage() {
    this.showBanner();
    this.showReview("blank.png", "right");
    this.showReview("jiraiya.png", "left");
    this.showQuestions()
  }
};

App.renderPage();

