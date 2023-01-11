window.onload = function() {
  let form = document.querySelector("form");
  form.onsubmit = function(event) {
    const person1Input = document.getElementById("person1Input").value;
    
    document.querySelector("span#person1a").innerText = "person1";

    document.querySelector("div#story").removeAttribute("class");
    
    event.preventDefault();
  };
};