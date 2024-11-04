document.getElementById("counter").innerHTML = 0;
const textAria = document.getElementById("text-input");
textAria?.addEventListener("input", (e) => {
  let data = textAria.value;

  const word = data.split(" ");

  document.getElementById("counter").innerHTML = word.length;
});
