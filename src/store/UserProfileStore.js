import React from "react";
import { useLocalStore, useObserver } from "mobx-react";
import { makeAutoObservable } from "mobx";
import data from "../data/data.json";

class UserProfileStore {
  //observables ˇˇ
  selectedJobs = {};
  selectedLanguages = [];
  availability = data.days;
  info = {
    fullName: "",
    city: "",
    date: "1999-01-01",
    genre: "F",
    gdpr: false,
    phoneNumber: "+385 ",
  };
  credentials = {
    mail: "",
  };

  //action ˇˇ
  setProfile(value, property) {
    this[property] = { ...this[property], ...value };
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export default new UserProfileStore();
