window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    document.querySelector("span#person1a").innerText = "person1";

    event.preventDefault();
  };
};