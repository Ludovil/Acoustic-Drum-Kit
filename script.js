const drumBtn = document.querySelectorAll(".drum_btn");
const drumAudio = document.querySelectorAll(".drum_audio source");

drumBtn.forEach((button, index) => {
  button.addEventListener("click", () => {
    const audio = new Audio(drumAudio[index].src); // Create a new audio instance
    audio.play();

    const button = drumBtn[index];
    button.classList.add("active_btn");
    setTimeout(() => {
      button.classList.remove("active_btn"); // Remove the "active" class after a delay
    }, 100);
  });
});

document.addEventListener("keydown", (e) => {
  const key = e.key;
  if (key >= "1" && key <= "9") {
    const index = parseInt(key) - 1;
    const audio = new Audio(drumAudio[index].src); // Create a new audio instance
    audio.play();

    const button = drumBtn[index];
    button.classList.add("active_key");
    setTimeout(() => {
      button.classList.remove("active_key"); // Remove the "active" class after a delay
    }, 100);
  }
});
