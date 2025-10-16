class Video {
    constructor(title, uploader, time) {
      this.title = title;
      this.uploader = uploader;
      this.time = time;
    }
  
    watch() {
      console.log(`${this.uploader} watched all ${this.time} seconds of "${this.title}"!`);
    }
  }
  
  const video1 = new Video('Learn JavaScript in 10 Minutes', 'Michael', 600);
  const video2 = new Video('Cooking with Eden', 'Eden', 1200);
  
  video1.watch();
  video2.watch();
  
  const videosData = [
    { title: 'harry potter', uploader: 'charles', time: 300 },
    { title: 'star wars', uploader: 'marlene', time: 420 },
    { title: 'the hobbit', uploader: 'martin', time: 900 },
    { title: 'narnia', uploader: 'boubakar', time: 750 },
    { title: 'iron man', uploader: 'michel', time: 600 }
  ];
  
  videosData.forEach(data => {
    const video = new Video(data.title, data.uploader, data.time);
    video.watch();
  });