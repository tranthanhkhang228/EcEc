import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {Color} from 'styles';
import DialogueBubble from '../DialogueBubble';
import DialogueChoice from '../DialogueChoice';
import ActivityComplete from '../ActivityComplete';

const questions = [
  {
    question: "Hey! How's it going",
    options: ['Great! How are you?', "It's very delicious!"],
    answer: 0,
    text: "Not much. I'm watching Youtube",
  },
  {
    question: 'Do you know where is my bag pack?',
    options: ['You forgot it at my home!', 'I extremely like your bag pack.'],
    answer: 0,
    text: "I'm going to the cinema tomorrow",
  },
];

const Dialogue = (props) => {
  const [point, setPoint] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [currentDialogue, setCurrentDialogue] = useState([
    {
      text: questions[0].question,
      isQuestion: true,
    },
  ]);

  const onPress = (optionIndex) => {
    if (optionIndex === questions[currentQuestion].answer) {
      setPoint(point + 1);
    }

    let newDialogue = [
      {
        text:
          questions[currentQuestion].options[questions[currentQuestion].answer],
        isQuestion: false,
      },
    ];

    if (currentQuestion < questions.length - 1) {
      newDialogue = [
        ...newDialogue,
        {
          text: questions[currentQuestion + 1].question,
          isQuestion: true,
        },
      ];

      setCurrentQuestion(currentQuestion + 1);
    }

    setCurrentDialogue([...currentDialogue, ...newDialogue]);

    if (currentQuestion === questions.length - 1) {
      setTimeout(() => {
        setIsComplete(true);
      }, 2000);
    }
  };

  return (
    <>
      {!isComplete ? (
        <View style={styles.dialogue}>
          <View style={styles.iconContainer}>
            {Array(point).fill(
              <Icon size={30} name="star" color={Color.orange} />,
            )}
          </View>

          {currentDialogue.map((dialogue) => (
            <DialogueBubble
              isQuestion={dialogue.isQuestion}
              text={dialogue.text}
            />
          ))}

          {currentQuestion < questions.length ? (
            <DialogueChoice
              options={questions[currentQuestion].options}
              onPress={onPress}
            />
          ) : null}
        </View>
      ) : (
        <ActivityComplete {...props} />
      )}
    </>
  );
};

export default Dialogue;

const styles = StyleSheet.create({
  dialogue: {
    padding: 20,
    backgroundColor: 'rgba(255, 158, 35, 0.2)',
    flex: 1,
  },

  iconContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
