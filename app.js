const input = document.querySelector(`input`);

const button = document.querySelector(`button`);

const ul = document.querySelector(`ul`);


button.onclick = () => {
  li();
};

function li() {
  let newli = document.createElement(`li`);

  let inputvalue = document.querySelector(`#myinput`).value;

  let textnode = document.createTextNode(inputvalue);
  newli.appendChild(textnode);

  document.querySelector(`ul`).appendChild(newli);

  let span = document.createElement(`span`);

  let content = document.createTextNode(`\u00D7`);

  span.appendChild(content);

  newli.appendChild(span);

  span.onclick = function (event) {
    event.target.parentElement.remove();
  }
}
