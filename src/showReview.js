import App from "./main.js"

export function showReview(image,side) {
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
  }
