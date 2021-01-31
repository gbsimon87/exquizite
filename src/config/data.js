const initialState = {
  quizzes: [
    {
      id: "1",
      name: "Random things I like",
      questions: [
        {
          id: "question-1-a",
          title: "When did the American Revolution begin?",
          answers: [
            {
              description: "1774",
              correct: false,
            },
            {
              description: "1874",
              correct: true,
            },
            {
              description: "1765",
              correct: true,
            },
            {
              description: "1776",
              correct: true,
            },
          ],
        },
        {
          id: "question-1-b",
          title: "Is setTimeout async?",
          answers: [
            {
              description: "always",
              correct: true,
            },
            {
              b: "never",
              correct: false,
            },
            {
              c: "depends on the outer function",
            },
            {
              d: "only when deployed live",
            },
          ],
        },
        {
          id: "question-1-c",
          title: "What is the best use of Redux?",
          answers: [
            {
              description: "As a state management library",
              correct: true,
            },
            {
              b: "As a database",
              correct: false,
            },
            {
              c: "depends on the outer function",
              correct: false,
            },
            {
              d: "to push history stacks on top of each other",
              correct: false,
            },
          ],
        },
      ],
    },
    {
      id: "2",
      name: "Javascript",
      questions: [
        {
          id: "question-2-b",
          title: "What is Javascript for?",
          answers: [
            {
              description: "Make things happen on a browser",
              correct: true,
            },
            {
              description: "This is some random text",
              correct: false,
            },
            {
              description: "This is some random text",
              correct: false,
            },
            {
              description: "This is some random text",
              correct: false,
            },
          ],
        },
        {
          id: "question-2-c",
          title: "What is a const",
          answers: [
            {
              description: "This is some random text",
              correct: false,
            },
            {
              description:
                "A constant variaable that once asssigned its vaalue cannot be changed",
              correct: true,
            },
            {
              description: "This is some random text",
              correct: false,
            },
            {
              description: "This is some random text",
              correct: false,
            },
          ],
        },
      ],
    },
  ],
};

export default initialState;
