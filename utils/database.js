import { collection, addDoc } from "firebase/firestore";
import { database } from '../config/firebase';


// Create new question for current quiz
export const createQuestion = (question) => {
  return  addDoc(collection(database, "Quizzes"), question);
};
