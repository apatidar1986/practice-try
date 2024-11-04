// create array print it unorder list in html
console.log("hello");

const input = [1, 34, 3, 4, 67, 7];

const e = document.getElementById("root");
console.log(e);

e.addEventListener("click", () => {
  document.getElementById("root").innerText = "";
  console.log("clicked List");
  input.reverse();
  console.log(input);
  list(input);
});

function list(input) {
  input.forEach((i) => {
    const unorderList = document.createElement("li");
    unorderList.innerText = i;
    e.appendChild(unorderList);
  });
}

list(input);

function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

const b = document.getElementById("btn");

b.addEventListener("click", () => {
  //   alert("hello");
  const u = document.getElementById("user").value;
  const p = document.getElementById("password").value;

  if (!validateEmail(u)) {
    alert("Please not email");
    return;
  }

  if (u.length < 5) {
    alert("Please give enough length user name");
    return;
  }

  if (p.length < 5) {
    alert("Please give enough length password");
    return;
  }

  alert("Login done");
});
