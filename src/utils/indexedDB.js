import Dexie from "dexie";

// Initialize IndexedDB
const db = new Dexie("QuizHistoryDB");
db.version(1).stores({
  scores: "++id, score, date",
});

// Function to save a score
export const saveQuizScore = async (score) => {
  await db.scores.add({ score, date: new Date().toISOString() });
};

// Function to get all past scores
export const getQuizHistory = async () => {
  return await db.scores.orderBy("date").reverse().toArray();
};

// Function to clear history
export const clearQuizHistory = async () => {
  await db.scores.clear();
};

export default db;
