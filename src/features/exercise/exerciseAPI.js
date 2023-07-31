import axios from "axios";

const options = () => {
  return {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": import.meta.env.VITE_EXERCISE_API_KEY,
      "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    },
  };
};

const exerciseOptions = () => {
  const option = options();
  option.url = "https://exercisedb.p.rapidapi.com/exercises";
  return option;
};

const bodyPartOptions = (bodyPart) => {
  const option = options();
  option.url = `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`;
  return option;
};

const getNameOptions = (name) => {
  const option = options();
  option.url = `https://exercisedb.p.rapidapi.com/exercises/name/${name}`;
  return option;
};

export function getAllExercises() {
  return axios.request(exerciseOptions());
}

export function getBodyPartExercises(bodyPart) {
  return axios.request(bodyPartOptions(bodyPart));
}

export function getNameExercises(name) {
  return axios.request(getNameOptions(name));
}
