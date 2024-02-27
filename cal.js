const result = document.getElementById("result");
const button = document.getElementById("list");
const li = button.querySelectorAll("li");

for (let i = 0; i < li.length; i++) {
  li[i].addEventListener("click", function () {
    if (this.innerHTML == "=") {
      result.innerHTML = eval(result.innerHTML);
    } else {
      if (this.innerHTML == "÷") {
        result.innerHTML += "/";
      } else if (this.innerHTML == "x") {
        result.innerHTML += "*";
      } else if (this.innerHTML == "c") {
        result.innerHTML = "";
      } else result.innerHTML += this.innerHTML;
    }
  });
}
