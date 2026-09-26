"use client";

import { IExercise } from "@/types/exercise.type";
import { useCardContext } from "@/context/CardContext";

interface AddButtonProps {
  exercise: IExercise;
}

const AddButton = ({
  exercise,
}: AddButtonProps) => {
  const {
    addToPlan,
    isInPlan,
    plan,
  } = useCardContext();

  const alreadyAdded = isInPlan(exercise.id);
  const planFull = plan.length >= 5;

  const handleAdd = () => {
    if (alreadyAdded || planFull) {
      return;
    }

    addToPlan(exercise);
  };

  return (
    <button
      type="button"
      onClick={handleAdd}
      disabled={alreadyAdded || planFull}
      className="rounded-lg bg-lime-400 px-5 py-3 text-sm font-bold uppercase text-black transition hover:bg-lime-300 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {alreadyAdded
        ? "Already in plan"
        : planFull
          ? "Plan is full"
          : "Add to today's plan"}
    </button>
  );
};

export default AddButton;
