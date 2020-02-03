const mongoose = require('mongoose');

const { Schema } = mongoose;

const Artist = require('./Artist');
const ArtistCountry = require('./ArtistCountry');
const Feature = require('./Feature');
const Release = require('./Release');
const Track = require('./Track');

const chartSchema = new Schema({
  user: {
    id: String,
    image: String,
  },
  hasClickedCreate: Boolean,
  timeRangeName: String,
  artistCount: Number,
  trackCount: Number,
  genreCount: Number,
  statsOptions: [String],
  displayProfile: Boolean,
  displayMap: Boolean,
  optimizeTracks: Boolean,
  artists: {
    isFetching: Boolean,
    items: [Artist],
  },
  artistsByTimeRangeName: {
    SHORT: {
      isFetching: Boolean,
      items: [Artist],
    },
    MEDIUM: {
      isFetching: Boolean,
      items: [Artist],
    },
    LONG: {
      isFetching: Boolean,
      items: [Artist],
    },
  },
  tracks: {
    isFetching: Boolean,
    items: [Track],
  },
  tracksByTimeRangeName: {
    SHORT: {
      isFetching: Boolean,
      items: [Track],
    },
    MEDIUM: {
      isFetching: Boolean,
      items: [Track],
    },
    LONG: {
      isFetching: Boolean,
      items: [Track],
    },
  },
  features: {
    isFetching: Boolean,
    items: [Feature],
  },
  featuresByTimeRangeName: {
    SHORT: {
      isFetching: Boolean,
      items: [Feature],
    },
    MEDIUM: {
      isFetching: Boolean,
      items: [Feature],
    },
    LONG: {
      isFetching: Boolean,
      items: [Feature],
    },
  },
  artistCountries: {
    isFetching: Boolean,
    items: [ArtistCountry],
  },
  artistCountriesByTimeRangeName: {
    SHORT: {
      isFetching: Boolean,
      items: [ArtistCountry],
    },
    MEDIUM: {
      isFetching: Boolean,
      items: [ArtistCountry],
    },
    LONG: {
      isFetching: Boolean,
      items: [ArtistCountry],
    },
  },
  artistReleases: {
    isFetching: Boolean,
    items: [Release],
  },
  artistReleasesByTimeRangeName: {
    SHORT: {
      isFetching: Boolean,
      items: [Release],
    },
    MEDIUM: {
      isFetching: Boolean,
      items: [Release],
    },
    LONG: {
      isFetching: Boolean,
      items: [Release],
    },
  },
});

export default chartSchema;
