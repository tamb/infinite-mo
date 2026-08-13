let audioElement = null;

const initAudio = element => {
  audioElement = element;
};

const playAudio = () => {
  if (audioElement) {
    const playPromise = audioElement.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {});
    }
  }
};

export { initAudio, playAudio };
