// traversing the dom
// const questionObject = {
//   btns: document.querySelectorAll(".question-btn"),
//   btnsClick() {
//     this.btns.forEach(function(btn) {
//       btn.addEventListener("click", function(e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//       })
//     })
//   }
// }

// questionObject.btnsClick()

const questionObject = {
  questions: document.querySelectorAll(".question"), 
  showBtn() {
    this.questions.forEach(function(question) {
      const btn = question.querySelector(".question-btn");
      btn.addEventListener("click", function(){
        question.classList.toggle("show-text")
      })
    })
  }
};

questionObject.showBtn();