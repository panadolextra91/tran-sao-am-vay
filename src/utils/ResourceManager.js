class ResourceManager {
  constructor() {
    this.loadedImages = new Set();
    this.loadedAudio = new Set();
    this.loadingPromises = new Map();
  }

  preloadImage(src) {
    if (!this.loadedImages.has(src)) {
      const promise = new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
          this.loadedImages.add(src);
          resolve(img);
        };
        img.onerror = reject;
        img.src = src;
      });
      this.loadingPromises.set(src, promise);
    }
    return this.loadingPromises.get(src);
  }

  preloadAudio(src) {
    if (!this.loadedAudio.has(src)) {
      const promise = new Promise((resolve, reject) => {
        const audio = new Audio();
        audio.oncanplaythrough = () => {
          this.loadedAudio.add(src);
          resolve(audio);
        };
        audio.onerror = reject;
        audio.src = src;
      });
      this.loadingPromises.set(src, promise);
    }
    return this.loadingPromises.get(src);
  }

  isImageLoaded(src) {
    return this.loadedImages.has(src);
  }

  isAudioLoaded(src) {
    return this.loadedAudio.has(src);
  }
}

export const resourceManager = new ResourceManager(); 