const results = [];
const div = document.getElementById("grid")
const count = 0

// Function to shuffle the order of math problems
const shuffleMathProblems = () => {
  for (let i = 0; i < 20; i++) {
    const j = Math.floor(Math.random() * 20);
    // Swap the math problems
    swapMathProblems(i, j);
  }
};

// Function to swap two math problems
const swapMathProblems = (index1, index2) => {
  const problem1 = document.getElementById(index1);
  const problem2 = document.getElementById(index2);

  // Swap the entire HTML elements
  const temp = document.createElement("div");
  problem1.parentNode.insertBefore(temp, problem1);
  problem2.parentNode.insertBefore(problem1, problem2);
  temp.parentNode.insertBefore(problem2, temp);
  temp.parentNode.removeChild(temp);
};

const createNumbers = () => {
  for (let i = 0; i < 5; i++) {
    createMultiplyExample(i);
  }
  for (let i = 5; i < 10; i++) {
    createDivision(i);
  }
  for (let i = 10; i < 15; i++) {
    createAdding(i);
  }
  for (let i = 15; i < 20; i++) {
    createSubstraction(i);
  }
  shuffleMathProblems();
};

const createMultiplyExample = (i) => {
  const p = document.createElement("p");
  const input = document.createElement("input");
  input.type = "number";
  input.style.width = "60px";
  input.id = i;
  p.id = i;
  
  p.classList = "m-2 pl-5";
  const randomNumber1 = Math.floor(Math.random() * 11);
  const randomNumber2 = Math.floor(Math.random() * 11);
  p.textContent = `${randomNumber1} * ${randomNumber2} = `;
  p.appendChild(input);
  div.appendChild(p);
  const resultOfMultiplication = randomNumber1 * randomNumber2;
  results.push(resultOfMultiplication);
};

const createDivision = (i) => {
  const p = document.createElement("p");
  const input = document.createElement("input");
  input.type = "number";
  input.style.width = "60px";
  input.id = i;
  p.id = i;
  p.classList = "m-2 pl-5";
  let randomNumber1, randomNumber2;
  do {
    randomNumber1 = Math.floor(Math.random() * 101);
    randomNumber2 = Math.floor(Math.random() * 11);
  } while (
    randomNumber1 % randomNumber2 !== 0 ||
    randomNumber1 === 0 ||
    randomNumber1 / randomNumber2 > 10
  );

  p.textContent = `${randomNumber1} / ${randomNumber2} = `;
  p.appendChild(input);
  div.appendChild(p);
  const resultOfDivision = randomNumber1 / randomNumber2;
  results.push(resultOfDivision);
};

const createAdding = (i) => {
  const p = document.createElement("p");
  const input = document.createElement("input");
  input.type = "number";
  input.style.width = "60px";
  input.id = i;
  p.id = i;
    p.classList = "m-2 pl-5";
  let randomNumber1, randomNumber2;
  do {
    randomNumber1 = Math.floor(Math.random() * 101);
    randomNumber2 = Math.floor(Math.random() * 101);
  } while (randomNumber1 + randomNumber2 > 100);

  p.textContent = `${randomNumber1} + ${randomNumber2} = `;
  p.appendChild(input);
  div.appendChild(p);
  const resultOfDivision = randomNumber1 + randomNumber2;
  results.push(resultOfDivision);
};

const createSubstraction = (i) => {
  const p = document.createElement("p");
  const input = document.createElement("input");
  input.type = "number";
  input.style.width = "60px";
  input.id = i;
  p.id = i;
    p.classList = "m-2 pl-5";
  let randomNumber1, randomNumber2;
  do {
    randomNumber1 = Math.floor(Math.random() * 101);
    randomNumber2 = Math.floor(Math.random() * 101);
  } while (randomNumber1 - randomNumber2 < 0);

  p.textContent = `${randomNumber1} - ${randomNumber2} = `;
  p.appendChild(input);
  div.appendChild(p);
  const resultOfDivision = randomNumber1 - randomNumber2;
  results.push(resultOfDivision);
};

const checkIfCorrect = () => {
  for (let i = 0; i < results.length; i++) {
    const inputElement = document.getElementById(i).querySelector("input");
    const checkedNumber = inputElement ? inputElement.value : null;
    console.log(
      ` ID:${i} number: ${checkedNumber} is being checked againts ${results[i]}`
    );
    if (checkedNumber == results[i]) {
      inputElement.classList.add("border-5", "border-success");
      inputElement.classList.remove("border-danger")
      inputElement.style.backgroundColor = "green";
    }else if (checkedNumber == "") {
        inputElement.classList.remove("border-5", "border-danger");
        inputElement.style.backgroundColor = "white";
      } 
    else if (checkedNumber !== results[i] ) {
      inputElement.classList.add("border-5", "border-danger");
      inputElement.style.backgroundColor = "red";
    } 
  }
};
