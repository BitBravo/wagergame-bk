"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const teamSchema = new Schema({
  user: [{
    type: Schema.Types.ObjectId,
    ref: "user"
  }],
  sponsersLogoImg: [String],
  coverImg: String,
  profileImg: String,
  teamName: String,
  founder: String,
  location: String,
  ownersName: [String],
  manangers: [String],
  players: [],
  pendingPlayers: [String],
  selectedPlayers: [String],
  upComingEvents: [{
    eventName: String,
    eventImage: String,
    eventDate: Date
  }],
  matches: [{
    gameName: String,
    tournnamentName: String,
    date: Date,
    firstTeamName: String,
    secondTeamName: String
  }]
}, {
  timestamps: true
});
const TeamDetail = mongoose.model("teamDetail", teamSchema);
module.exports = TeamDetail;