"use strict";

const poll = {
  question: "What is your favourite programming lenguage?",
  options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join(
          "\n"
        )}\n(Write your option number)`
      )
    );
    //short circuing
    typeof answer === "number" &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults("string");
  },
  displayResults(type = "array") {
    type === "array"
      ? console.log(this.answers)
      : console.log(`Poll results are: ${this.answers.join(", ")}`),
      showPullResults();
  },
};

const callPoll = document.querySelector(".poll");
callPoll.addEventListener("click", poll.registerNewAnswer.bind(poll));

const pollResults = document.querySelector(".pollResults");
const pollResultsDiv = pollResults.appendChild(document.createElement("div"));
const showPullResults = () => {
  pollResultsDiv.textContent = `Poll results are: ${poll.answers.join(", ")}`;
};
