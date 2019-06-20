// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"

class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    this.expandButton = domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    this.expandButton.textContent = 'expand';
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    this.expandButton.addEventListener('click', () => this.expandArticle());

    this.closeButton = domElement.querySelector('.closeButton');
    this.closeButton.addEventListener('click', () => this.closeArticle());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.toggle('open');
    if(this.domElement.classList.length > 1) {
      TweenMax.to(this.domElement, 1, {height: '400px'});
      TweenMax.to(this.expandButton, 1, {color: '#508ced'});
      this.expandButton.textContent = 'collapse';
    }
    else {
      TweenMax.to(this.domElement, 1, {height: '50px'});
      TweenMax.to(this.expandButton, 1, {color: '#808080'});
      this.expandButton.textContent = 'expand';
    }
  }

  closeArticle() {
    container.removeChild(this.domElement);
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/

let container = document.querySelector('.articles');
let articles = document.querySelectorAll('.article');
articles.forEach(article => new Article(article));
let addButton = document.querySelector('.addArticle');
addButton.addEventListener('click', () => buildArticle({
  h2: "It worked!",
  date: 'Nov 1st, 2017',
  p1: 'Lucas ipsum dolor sit amet ben twi\'lek padmé darth darth darth moff hutt organa twi\'lek. Ben amidala secura skywalker lando\n' +
      '        moff wicket tatooine luke. Solo wampa wampa calrissian yoda moff.',
  p2: 'Grievous fett calamari anakin skywalker hutt. Alderaan darth kenobi darth r2-d2\n' +
      '        windu mothma. Sidious darth calamari moff.',
  p3: 'Dagobah hutt jawa leia calamari ventress skywalker yoda. Binks wicket hutt coruscant sidious\n' +
      '        naboo ackbar tatooine.'
}));

function buildArticle(template) {
  let article = document.createElement('div');
  article.classList.add('article');
  let h2 = document.createElement('h2');
  h2.textContent = template.h2;
  let date = document.createElement('p');
  date.classList.add('date');
  date.textContent = template.date;
  let p1 = document.createElement('p');
  p1.textContent = template.p1;
  let p2 = document.createElement('p');
  p2.textContent = template.p2;
  let p3 = document.createElement('p');
  p3.textContent = template.p3;
  let expBtn = document.createElement('span');
  expBtn.classList.add('expandButton');
  expBtn.textContent = 'expand';
  let clsBtn = document.createElement('span');
  clsBtn.classList.add('closeButton');
  clsBtn.textContent = 'Close Article';

  container.appendChild(article);
  article.appendChild(h2);
  article.appendChild(date);
  article.appendChild(p1);
  article.appendChild(p2);
  article.appendChild(p3);
  article.appendChild(expBtn);
  article.appendChild(clsBtn);

  let final = new Article(article);
  return final;
}