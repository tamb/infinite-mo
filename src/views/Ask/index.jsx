import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import { shuffle } from "../../utils";

const propTypes = {};

const QUESTIONS_ARR = [
  {
    question: "Why do you want to know this?",
    choices: ["I'm curious", "This will help me", "Someone asked me to", "I need closure"]
  },
  {
    question: "Why are you asking this question again?",
    choices: ["I forgot the answer", "I'm still not satisfied", "It's important to me", "Mo knows why"]
  },
  {
    question: "What's your sex?",
    choices: ["Male", "Female", "Prefer not to say", "That's not relevant"]
  },
  {
    question: "So are you sure you want Mo to answer?",
    choices: ["Yes, I'm sure", "Actually, maybe not", "I think so", "Mo will decide"]
  },
  {
    question: "Before we continue, click this button",
    choices: ["Just a harmless button", "Okay, I clicked it", "What does this do?", "Fine"]
  },
  {
    question: "What was the last thing you saw before this question?",
    choices: ["A screen", "Another person", "Something I can't explain", "Mo's wisdom"]
  },
  {
    question: "What was the last thing you ate? Just checking",
    choices: ["Something healthy", "Something questionable", "I haven't eaten", "That's private"]
  },
  {
    question: "How urgent is this question?",
    choices: ["Very urgent", "Somewhat urgent", "Not urgent at all", "Time is an illusion"]
  },
  {
    question: "Have you asked anyone else already?",
    choices: ["Yes", "No", "I asked the internet", "Only Mo can know"]
  },
  {
    question: "What would you do with the answer?",
    choices: ["Act on it immediately", "Think about it", "Tell a friend", "Keep it to myself"]
  },
  {
    question: "Is this question about the past or the future?",
    choices: ["The past", "The future", "Both", "Neither"]
  },
  {
    question: "On a scale of cosmic importance, where does this rank?",
    choices: ["Life-changing", "Pretty important", "Mildly interesting", "Cosmically trivial"]
  },
  {
    question: "Did you sleep well last night?",
    choices: ["Yes", "No", "I don't remember", "Sleep is optional"]
  },
  {
    question: "Are you asking for yourself or someone else?",
    choices: ["For myself", "For someone else", "For everyone", "For Mo"]
  },
  {
    question: "What brought you here today?",
    choices: ["Fate", "Curiosity", "A link someone sent", "The universe"]
  },
  {
    question: "Do you believe in signs?",
    choices: ["Absolutely", "Sometimes", "Not really", "This is a sign"]
  },
  {
    question: "How patient are you willing to be?",
    choices: ["Very patient", "Somewhat patient", "Not patient at all", "Patience is a virtue"]
  },
  {
    question: "Would you accept an answer you didn't expect?",
    choices: ["Yes", "No", "Maybe", "Mo's answers are always right"]
  },
  {
    question: "Is there anything you're afraid to know?",
    choices: ["Yes", "No", "A little", "Mo already knows"]
  },
  {
    question: "One last thing: are you ready?",
    choices: ["I'm ready", "Almost", "Not really", "Ready as I'll ever be"]
  },
  {
    question: "What time of day feels right for an answer?",
    choices: ["Morning", "Afternoon", "Night", "Whenever Mo decides"]
  },
  {
    question: "Have you asked Mo this before, in another life?",
    choices: ["Probably", "Definitely not", "I can't remember", "Mo remembers"]
  },
  {
    question: "What kind of answer are you hoping for?",
    choices: ["A clear yes or no", "Deep wisdom", "A riddle", "Surprise me"]
  },
  {
    question: "Is your question about love?",
    choices: ["Yes", "No", "Maybe a little", "Love is always involved"]
  },
  {
    question: "Is your question about money?",
    choices: ["Yes", "No", "Indirectly", "Mo doesn't judge"]
  },
  {
    question: "Would you change your question if you could?",
    choices: ["Yes", "No", "I'm not sure", "The question chose me"]
  },
  {
    question: "How many times have you rewritten your question?",
    choices: ["Never", "Once or twice", "Too many times", "This is the final draft"]
  },
  {
    question: "Are you overthinking this?",
    choices: ["Yes", "No", "Definitely yes", "That's why I'm here"]
  },
  {
    question: "What would Mo say you're really asking?",
    choices: ["Something deeper", "Something simpler", "The same thing", "Mo won't say yet"]
  },
  {
    question: "Do you trust your instincts?",
    choices: ["Always", "Sometimes", "Rarely", "Only when Mo agrees"]
  },
  {
    question: "Is anyone watching you ask this?",
    choices: ["Yes", "No", "I hope not", "Mo is always watching"]
  },
  {
    question: "What emotion brought you here?",
    choices: ["Hope", "Anxiety", "Boredom", "A strange pull"]
  },
  {
    question: "Would you rather know the truth or feel better?",
    choices: ["The truth", "Feel better", "Both", "Mo knows the difference"]
  },
  {
    question: "Have you consulted a coin flip yet?",
    choices: ["Yes", "No", "I'm about to", "Mo is the coin flip"]
  },
  {
    question: "Is this question allowed to be silly?",
    choices: ["Yes", "No", "Only a little", "All questions are silly"]
  },
  {
    question: "What would you do if Mo said no?",
    choices: ["Accept it", "Ask again", "Argue politely", "Respect the wisdom"]
  },
  {
    question: "Does the answer need to arrive today?",
    choices: ["Yes", "No", "Soonish", "Time is flexible"]
  },
  {
    question: "Are you asking from the heart or the head?",
    choices: ["Heart", "Head", "Both", "Somewhere in between"]
  },
  {
    question: "What sounds more comforting right now?",
    choices: ["Certainty", "Possibility", "A gentle nudge", "Silence"]
  },
  {
    question: "If Mo answered in a dream, would you believe it?",
    choices: ["Yes", "No", "Maybe", "I'd write it down"]
  },
  {
    question: "Is there a wrong answer to your question?",
    choices: ["Yes", "No", "I hope not", "Only Mo knows"]
  },
  {
    question: "Would you tell Mo the whole story?",
    choices: ["Yes", "No", "The short version", "Mo already knows it"]
  },
  {
    question: "What matters more: the question or the answer?",
    choices: ["The question", "The answer", "The journey", "Mo"]
  },
  {
    question: "Are you prepared for Mo to ask one back?",
    choices: ["Yes", "No", "Probably not", "That's fair"]
  },
  {
    question: "How honest are you being right now?",
    choices: ["Completely honest", "Mostly honest", "Working on it", "Honest enough"]
  },
  {
    question: "What would make this worth the wait?",
    choices: ["Clarity", "Peace", "Direction", "A sign I'm on the right path"]
  },
  {
    question: "Should Mo take this seriously?",
    choices: ["Very seriously", "Somewhat seriously", "Not really", "Mo decides the tone"]
  },
  {
    question: "Is luck involved in this?",
    choices: ["Yes", "No", "A little", "Luck is Mo's cousin"]
  },
  {
    question: "What do you want to feel when this is over?",
    choices: ["Relieved", "Inspired", "Confused but enlightened", "Grateful"]
  },
  {
    question: "Choose the duck.",
    choices: ["🐸", "🧦", "🛸", "🥔"]
  },
  {
    question: "Which image reminds you most of your father?",
    choices: ["🦉", "🧰", "🌋", "🎻"]
  },
  {
    question: "Who would win in a fight?",
    choices: ["Dwayne Johnson", "Oprah Winfrey", "Keanu Reeves", "A Tree"]
  },
  {
    question: "Select the duck again. Mo is serious this time.",
    choices: ["🍕", "🚲", "🦞", "📎"]
  },
  {
    question: "Which of these is definitely a hat?",
    choices: ["🐢", "🥒", "🔦", "🧊"]
  },
  {
    question: "Pick the option Mo would trade for one sincere compliment.",
    choices: ["🧃", "🪵", "🎺", "🧲"]
  },
  {
    question: "Which image has the most authority?",
    choices: ["🦆", "📠", "🪨", "🧶"]
  },
  {
    question: "Who would win in a chess match?",
    choices: ["Taylor Swift", "Tom Hanks", "A very confident pigeon", "A Tree"]
  },
  {
    question: "Which emoji is hiding a secret?",
    choices: ["🫖", "🛞", "🦔", "🪁"]
  },
  {
    question: "Point to the politest object in the room.",
    choices: ["🪑", "🧯", "🦑", "🧼"]
  },
  {
    question: "Which image would Mo take on a road trip?",
    choices: ["🚗", "🐪", "🥨", "🛰️"]
  },
  {
    question: "Who would win in an argument about soup?",
    choices: ["Gordon Ramsay", "Zendaya", "A Tree", "Your childhood dentist"]
  },
  {
    question: "Choose the one that is absolutely not a door.",
    choices: ["🚪", "🚪🪞", "🌀", "🧱"]
  },
  {
    question: "Which image reminds you of Tuesday?",
    choices: ["🦥", "🔩", "🍉", "📎"]
  },
  {
    question: "Pick the ingredient Mo would ban from the universe.",
    choices: ["🧄", "🫧", "🧇", "🪶"]
  },
  {
    question: "Who would win in a staring contest?",
    choices: ["Robert Downey Jr.", "Michelle Yeoh", "A Tree", "A ceiling fan"]
  },
  {
    question: "Which of these is the moon in disguise?",
    choices: ["🌙", "🧀", "🎱", "🥏"]
  },
  {
    question: "Select the least suspicious umbrella.",
    choices: ["☂️", "🍄", "🦇", "🥄"]
  },
  {
    question: "Which image would make the best mayor?",
    choices: ["🦫", "📎", "🌭", "🧭"]
  },
  {
    question: "Who would win in a race to the bottom of a hill?",
    choices: ["Usain Bolt", "Betty White", "A shopping cart", "A Tree"]
  },
  {
    question: "Choose the duck. There is still no duck.",
    choices: ["🦕", "🧴", "🎐", "🪨"]
  },
  {
    question: "Which image feels the most like a warranty?",
    choices: ["📋", "🦞", "🧸", "⚓"]
  },
  {
    question: "Pick the animal that is definitely in charge.",
    choices: ["🐈", "🦠", "🪳", "🦫"]
  },
  {
    question: "Who would win in a debate about clouds?",
    choices: ["Neil deGrasse Tyson", "A Tree", "A goose with opinions", "A weather app"]
  },
  {
    question: "Which image is the odd one out?",
    choices: ["🟥", "🟦", "🦞", "🟩"]
  },
  {
    question: "Select the object Mo would apologize to first.",
    choices: ["🪞", "🥯", "🧲", "🦙"]
  },
  {
    question: "Which image reminds you most of a long hallway?",
    choices: ["🚶", "🪜", "🥖", "🎷"]
  },
  {
    question: "Who would win in a polite duel?",
    choices: ["Mr. Rogers", "Cate Blanchett", "A Tree", "A very formal goose"]
  },
  {
    question: "Point to the correct emergency sandwich.",
    choices: ["🥪", "🧱", "📚", "🛟"]
  },
  {
    question: "Which emoji would Mo trust with a spare key?",
    choices: ["🔑", "🦀", "🧃", "🪵"]
  },
  {
    question: "Choose the one that is secretly three raccoons.",
    choices: ["🎩", "🧺", "🦝", "🥁"]
  },
  {
    question: "Who would win in a fight over the last biscuit?",
    choices: ["The Queen", "A Tree", "A determined toddler", "A seagull union"]
  },
  {
    question: "Which image has the strongest opinions about yogurt?",
    choices: ["🥛", "🦉", "🧊", "🎺"]
  },
  {
    question: "Pick the image that is least likely to be a submarine.",
    choices: ["🚤", "🥔", "🐋", "🧊"]
  },
  {
    question: "Which of these would Mo name chairperson of the committee?",
    choices: ["🪑", "🦎", "🍍", "📎"]
  },
  {
    question: "Who would win in a contest of dramatic sighing?",
    choices: ["A Tree", "A soap opera extra", "A disappointed librarian", "A cat who has seen things"]
  }
];

const FINAL_RESPONSES = [
  "You're a good person and the answer will reveal itself in time.",
  "You're a good person. The answer will reveal itself in time.",
  "You're a good person—and in time, the answer will reveal itself.",
  "The answer will reveal itself in time. You're a good person.",
  "You're a good person. Be patient—the answer will reveal itself in time.",
  "You're a good person. Trust that the answer will reveal itself in time.",
  "You're a good person. When the moment is right, the answer will reveal itself.",
  "You're a good person. The answer is already on its way—in time, it will reveal itself."
];

const FOLLOW_UP_COUNT = 7;

const AskWrapper = styled.div`
  position: fixed;
  z-index: 1001;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  font-size: 2.4rem;
  top: 1rem;
  left: 0;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;

  gap: 2rem;

  .ask {
    opacity: 0;
    font-size: 2.4rem;
  }
  .ask__title {
    font-size: 3rem;
    animation: fadein 2s ease-in;
    animation-fill-mode: forwards;
  }
  .ask__tagline {
    font-size: 2.4rem;
    animation: fadein 2s ease-in 1.5s;
    animation-fill-mode: forwards;
  }
  .ask__form {
    font-size: 2.4rem;
    animation: fadein 2s ease-in 1s;
    animation-fill-mode: forwards;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    label {
      font-size: 2.4rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.5rem;
    }
  }

  .ask__question {
    font-size: 2.4rem;
    animation: fadein 1s ease-in;
    animation-fill-mode: forwards;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    max-width: 90%;

    p {
      font-size: 2.4rem;
      margin: 0;
    }
  }

  .ask__choices {
    font-size: 2.4rem;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  button {
    padding: 1rem 2rem;
    border: 0.3rem solid transparent;
    border-radius: 5px;
    font-size: 2.4rem;
    cursor: pointer;
  }

  button:hover,
  button:focus,
  button:active {
    border: 0.3rem solid red;
  }

  textarea {
    width: 100%;
    min-width: 250px;
    min-height: 80px;
    font-size: 2.4rem;
    padding: 0.5rem;
  }
`;

class Ask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      phase: "query",
      query: "",
      index: 0,
      questions: QUESTIONS_ARR,
      finalResponse: FINAL_RESPONSES[0]
    };
  }

  componentDidMount() {
    document.title = "Ask - Infinite Mo";
    this.setState({
      questions: shuffle([...QUESTIONS_ARR]).slice(0, FOLLOW_UP_COUNT),
      finalResponse:
        FINAL_RESPONSES[Math.floor(Math.random() * FINAL_RESPONSES.length)]
    });
  }

  handleQuerySubmit(e) {
    e.preventDefault();
    if (!this.state.query.trim()) {
      return;
    }
    this.setState({ phase: "wizard", index: 0 });
  }

  advanceQuestion() {
    const nextIndex = this.state.index + 1;
    if (nextIndex >= this.state.questions.length) {
      this.setState({ phase: "done", index: nextIndex });
    } else {
      this.setState({ index: nextIndex });
    }
  }

  handleChoice() {
    this.advanceQuestion();
  }

  renderQueryForm() {
    return (
      <form className="ask ask__form" onSubmit={e => this.handleQuerySubmit(e)}>
        <label>
          Your query:
          <textarea
            value={this.state.query}
            onChange={e => this.setState({ query: e.target.value })}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }

  renderWizardQuestion() {
    const q = this.state.questions[this.state.index];

    return (
      <div className="ask ask__question">
        <p>{q.question}</p>
        <div className="ask__choices">
          {q.choices.map((choice, choiceIndex) => (
            <button
              key={`${q.question}-${choiceIndex}`}
              onClick={() => this.handleChoice()}
              type="button"
            >
              {choice}
            </button>
          ))}
        </div>
      </div>
    );
  }

  renderDone() {
    return (
      <div className="ask ask__question">
        <p>{this.state.finalResponse}</p>
      </div>
    );
  }

  render() {
    return (
      <AskWrapper>
        <h2 className="ask ask__title">Ask Mo a Question</h2>
        <p className="ask ask__tagline">He shall answer in kind</p>
        {this.state.phase === "query" && this.renderQueryForm()}
        {this.state.phase === "wizard" && this.renderWizardQuestion()}
        {this.state.phase === "done" && this.renderDone()}
      </AskWrapper>
    );
  }
}

Ask.propTypes = propTypes;

export default Ask;
