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
  question: document.querySelectorAll(".question"),
  
  
};

questionObject.question.forEach(function(question) {
  console.log(question)
 
})