import Axios from 'axios';

export default Axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.REACT_APP_THEMOVIEDB,
    language: 'en-US',
  },
});

export function findGenreId(genreName) {
  //prettier-ignore
  return Object
    .values(genreMap)
    .find((genre) => genre.name.toUpperCase() === String(genreName).toUpperCase())
    .id;
}

export function findGenreName(genreId) {
  //prettier-ignore
  return Object
    .values(genreMap)
    .find((genre) => genre.id === Number(genreId))
    .name;
}

export const genreMap = {
  '12': {
    id: 12,
    name: 'Adventure',
  },
  '14': {
    id: 14,
    name: 'Fantasy',
  },
  '16': {
    id: 16,
    name: 'Animation',
  },
  '18': {
    id: 18,
    name: 'Drama',
  },
  '27': {
    id: 27,
    name: 'Horror',
  },
  '28': {
    id: 28,
    name: 'Action',
  },
  '35': {
    id: 35,
    name: 'Comedy',
  },
  '36': {
    id: 36,
    name: 'History',
  },
  '37': {
    id: 37,
    name: 'Western',
  },
  '53': {
    id: 53,
    name: 'Thriller',
  },
  '80': {
    id: 80,
    name: 'Crime',
  },
  '99': {
    id: 99,
    name: 'Documentary',
  },
  '878': {
    id: 878,
    name: 'Science Fiction',
  },
  '9648': {
    id: 9648,
    name: 'Mystery',
  },
  '10402': {
    id: 10402,
    name: 'Music',
  },
  '10749': {
    id: 10749,
    name: 'Romance',
  },
  '10751': {
    id: 10751,
    name: 'Family',
  },
  '10752': {
    id: 10752,
    name: 'War',
  },
  '10770': {
    id: 10770,
    name: 'TV Movie',
  },
};
