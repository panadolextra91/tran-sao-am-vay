class ResourceManager {
  constructor() {
    this.imageCache = new Map();
    this.audioCache = new Map();
    this.loadingPromises = new Map();
  }

  async preloadImage(url) {
    if (this.imageCache.has(url)) {
      return this.imageCache.get(url);
    }

    if (this.loadingPromises.has(url)) {
      return this.loadingPromises.get(url);
    }

    const loadPromise = new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        this.imageCache.set(url, img);
        this.loadingPromises.delete(url);
        resolve(img);
      };
      img.onerror = (error) => {
        this.loadingPromises.delete(url);
        reject(error);
      };
      img.src = url;
    });

    this.loadingPromises.set(url, loadPromise);
    return loadPromise;
  }

  async preloadAudio(url) {
    if (this.audioCache.has(url)) {
      return this.audioCache.get(url);
    }

    if (this.loadingPromises.has(url)) {
      return this.loadingPromises.get(url);
    }

    const loadPromise = new Promise((resolve, reject) => {
      const audio = new Audio();
      audio.oncanplaythrough = () => {
        this.audioCache.set(url, audio);
        this.loadingPromises.delete(url);
        resolve(audio);
      };
      audio.onerror = (error) => {
        this.loadingPromises.delete(url);
        reject(error);
      };
      audio.src = url;
      audio.load();
    });

    this.loadingPromises.set(url, loadPromise);
    return loadPromise;
  }

  getImage(url) {
    return this.imageCache.get(url);
  }

  getAudio(url) {
    return this.audioCache.get(url);
  }

  clearCache() {
    this.imageCache.clear();
    this.audioCache.clear();
    this.loadingPromises.clear();
  }
}

export const resourceManager = new ResourceManager(); 