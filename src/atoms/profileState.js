import { atom } from "recoil";
import data from "../data/data.json";

export const infoState = atom({
  key: "infoState",
  default: {
    fullName: "",
    city: "",
    date: new Date("1999-01-01"),
    genre: "F",
    gdpr: false,
  },
});

export const credentialsState = atom({
  key: "credState",
  default: {
    mail: "",
    password: "",
  },
});

export const availabilityState = atom({
  key: "availabilityState",
  default: data.days,
});

export const languageState = atom({
  key: "languageState",
  default: [],
});

export const jobsState = atom({
  key: "jobsState",
  default: [],
});
