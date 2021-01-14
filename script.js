document.querySelector("#img").addEventListener("change", function() {
  const reader = new FileReader();

  reader.addEventListener("load", () => {
    localStorage.setItem("saved_img", reader.result);
  });
    
  reader.readAsDataURL(this.files[0]);
});

document.getElementById("submit").addEventListener("click", function() {
  window.open("index(2).html")
})