"use client";

import { IExercise } from "@/types/exercise.type";
import { useCardContext } from "@/context/CardContext";

interface SaveButtonProps {
  exercise: IExercise;
}

const SaveButton = ({
  exercise,
}: SaveButtonProps) => {
  const {
    saveExercise,
    isSaved,
  } = useCardContext();

  const alreadySaved = isSaved(exercise.id);

  const handleSave = () => {
    if (alreadySaved) {
      return;
    }

    saveExercise(exercise);
  };

  return (
    <button
      type="button"
      onClick={handleSave}
      disabled={alreadySaved}
      className="rounded-lg border border-zinc-700 px-5 py-3 text-sm font-bold uppercase text-white transition hover:border-lime-400 hover:text-lime-400 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {alreadySaved
        ? "Saved"
        : "Save for later"}
    </button>
  );
};

export default SaveButton;
