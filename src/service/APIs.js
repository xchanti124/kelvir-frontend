export const URL = {
  base: "http://localhost:3000/api",
  all: function () {
    return `${this.base}/locations`;
  },
  byID: function (id) {
    return `${this.base}/search?_id=${id}`;
  },
  byInput: function (input) {
    return `${this.base}/search?description=${input}`;
  },
  byCategory: function (category) {
    return `${this.base}/search?category=${category}`;
  },
  byHashTag: function (hashtag) {
    return `${this.base}/search?hashtag=${hashtag}`;
  },
};
