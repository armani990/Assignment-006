"use client";

import { IExercise } from "@/types/exercise.type";
import { useCardContext } from "@/context/CardContext";

interface SaveButtonProps {
  exercise: IExercise;
}

const SaveButton = ({ exercise }: SaveButtonProps) => {
  const {
    saveExercise,
    isSaved,
  } = useCardContext();

  const alreadySaved = isSaved(exercise.id);

  const handleSave = () => {
    saveExercise(exercise);
  };

  return (
    <button
      type="button"
      onClick={handleSave}
      disabled={alreadySaved}
      className="rounded-lg border border-zinc-700 px-5 py-3 text-sm font-bold uppercase text-white transition-all duration-200 hover:-translate-y-0.5 hover:border-lime-400 hover:text-lime-400 hover:shadow-[0_8px_25px_rgba(163,230,53,0.08)] active:translate-y-0 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0 disabled:hover:shadow-none"
    >
      {alreadySaved ? "Saved" : "Save for later"}
    </button>
  );
};

export default SaveButton;