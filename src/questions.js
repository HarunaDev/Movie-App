const question = {
  btns: document.querySelectorAll(".question-btn"),
  btnsClick() {
    this.btns.forEach(function(btn) {
      btn.addEventListener("click", function(e) {
        console.log(e.currentTarget.parentElement);
      })
    })
  }
}

question.btnsClick()
