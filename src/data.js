import { genID } from "./utils";

import countingGameImg from './imgs/screenshot-counting-game.jpg';
import todoListImg from './imgs/screenshot-todo-list.jpg';
import typingFastImg from './imgs/screenshot-typing-fast.png';
import vocabStudyImg from './imgs/screenshot-vocab-study.png';

export const PROJECTS_DATA = [
    {
        id: genID(),
        backgroundImg: typingFastImg, 
        title: 'Typing Fast', 
        description: 'This is a simple game to practice typing on a computer keyboard. Letters will be dropped from the sky, and users must type on their keyboard to destroy them before they reach the ground.',
        techs: [
            {id: genID(), content: 'Vanila Javascript'},
            {id: genID(), content: 'webpack'},        
        ],
        githubLink: 'https://github.com/ledminh/jsTypingGame', 
        demoLink: 'https://ledminh.github.io/typing-fast/', 
    },

    {
        id: genID(),
        backgroundImg: vocabStudyImg, 
        title: 'Vocabulary', 
        description: 'I built this application to help myself studying vocabulary. It mimicked my daily routine.' , 
        techs: [
            {id: genID(), content: 'react'},
            {id: genID(), content: 'styled-components'},
            {id: genID(), content: 'webpack'},
            {id: genID(), content: 'howler'},
        ],
        githubLink: 'https://github.com/ledminh/vocabStudy', 
        demoLink: 'https://ledminh.github.io/vocab-study/'
    },
    
    {
        id: genID(),
        backgroundImg: todoListImg, 
        title: 'ToDo List', 
        description: 'Users can add and delete list as well as tasks in each list. Users can also export the list to a text file.', 
        techs: [
            {id: genID(), content: 'Vanila Javascript'}
        ],
        githubLink: 'https://github.com/ledminh/ToDoListJS', 
        demoLink: 'https://codepen.io/ledminh-the-lessful/pen/dydbvGB'
    },

    {
        id: genID(),
        backgroundImg: countingGameImg, 
        title: 'Counting Game', 
        description: 'This is a small game for children to learn to count. First, you set how many numbers you want to count and press PLAY. In order to win, you have to click on these numbers one by one from smallest to largest.', 
        techs: [
            {id: genID(), content: 'Vanila Javascript'}
        ],
        githubLink: 'https://github.com/ledminh/countingGameJS', 
        demoLink: 'https://codepen.io/ledminh-the-lessful/pen/oNpdJpw'
    }



]