function Album(title, artist, year) {
  this.title = title;
  this.artist = artist;
  this.year = year;
  this.play = () => {
    console.log(
      `Title=${this.title}\nArtist=${this.artist}\nYear=${this.year}`
    );
  };
}
let darkside = new Album("Dark side of the cheese", "Pink Mouse", 1971);
darkside.play();
