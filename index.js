console.log("Chrome extension loaded");

function tryToAddShortCut() {
  console.log("Trying to add shortcut.");
  const videoEl = document.querySelector("video");
  if (videoEl) {
    console.log("Found video element!");
    // Add keyboard shortcut
    document.addEventListener("keydown", (event) => {
      console.log(event.key, event.code);
      if (event.code === "KeyQ") {
        videoEl.currentTime -= 3;
      }
      if (event.code === "KeyW") {
        console.log("videoEl.currentTime", videoEl.currentTime);
      }
      if (event.code === "KeyE") {
        videoEl.currentTime += 3;
      }
    });
  } else {
    console.log("Didn't find video element!");
  }
}

setTimeout(tryToAddShortCut, 3000);
window.addEventListener("DOMContentLoaded", (event) => {
  tryToAddShortCut();
});
