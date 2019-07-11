export default function(name, className = null, content = '') {
  if(!name) return;
  let element = document.createElement(name);
  if(className) element.classList.add(className);
  element.textContent = content;
  return element;
}