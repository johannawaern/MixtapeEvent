document.getElementById("section1").onclick = toggle
document.getElementById("section2").onclick = toggle
document.getElementById("section3").onclick = toggle
document.getElementById("section4").onclick = toggle

function toggle() {
  this.classList.toggle("active")

  document.querySelectorAll(".question").forEach(question => {
    if (question != this) {
      question.classList.remove("active")
    }
  })
}


