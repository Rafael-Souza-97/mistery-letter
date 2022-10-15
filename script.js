const inputText = document.getElementById('carta-texto');
const button = document.getElementById('criar-carta');
const paragraph = document.getElementById('carta-gerada');
const counter = document.getElementById('carta-contador');

const style = ['newspaper', 'magazine1', 'magazine2'];
const size = ['medium', 'big', 'reallybig'];
const rotation = ['rotateleft', 'rotateright'];
const inclination = ['skewleft', 'skewright'];

function randomClass(array) {
  return Math.floor(Math.random() * array.length);
}

function returnClassName() {
  const styleClassName = style[randomClass(style)];
  const sizeClassName = size[randomClass(size)];
  const rotationClassName = rotation[randomClass(rotation)];
  const inclinationClassName = inclination[randomClass(inclination)];

  return `${styleClassName} ${sizeClassName} ${rotationClassName} ${inclinationClassName}`;
}

function createLetterSpan() {
  const wordArray = inputText.value.trim();
  if (!wordArray) {
    paragraph.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    const splitWord = wordArray.split(' ');
    counter.innerText = splitWord.length;
    paragraph.innerHTML = '';
    for (let index = 0; index < splitWord.length; index += 1) {
      const spanText = document.createElement('span');
      spanText.className = returnClassName();
      spanText.innerHTML = splitWord[index];
      paragraph.appendChild(spanText);
    }
  }
}

button.addEventListener('click', createLetterSpan);

function addClassNameToSpan(event) {
  const span = event.target;
  if (span.tagName === 'span');
  span.className = returnClassName();
}

paragraph.addEventListener('click', addClassNameToSpan);
