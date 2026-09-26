"use client";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { IExercise } from "@/types/exercise.type";

interface CardContextType {
  plan: IExercise[];
  saved: IExercise[];

  addToPlan: (exercise: IExercise) => void;
  removeFromPlan: (id: number) => void;

  saveExercise: (exercise: IExercise) => void;
  removeFromSaved: (id: number) => void;

  isInPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;
}

const CardContext = createContext<CardContextType | undefined>(
  undefined
);

interface CardProviderProps {
  children: ReactNode;
}

export const CardProvider = ({
  children,
}: CardProviderProps) => {
  const [plan, setPlan] = useState<IExercise[]>([]);
  const [saved, setSaved] = useState<IExercise[]>([]);

  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");

    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSaved(JSON.parse(storedSaved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(plan)
    );
  }, [plan]);

  useEffect(() => {
    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(saved)
    );
  }, [saved]);

  const addToPlan = (exercise: IExercise) => {
    setPlan((previousPlan) => {
      if (previousPlan.length >= 5) {
        return previousPlan;
      }

      const alreadyExists = previousPlan.some(
        (item) => item.id === exercise.id
      );

      if (alreadyExists) {
        return previousPlan;
      }

      return [...previousPlan, exercise];
    });
  };

  const removeFromPlan = (id: number) => {
    setPlan((previousPlan) =>
      previousPlan.filter((item) => item.id !== id)
    );
  };

  const saveExercise = (exercise: IExercise) => {
    setSaved((previousSaved) => {
      const alreadyExists = previousSaved.some(
        (item) => item.id === exercise.id
      );

      if (alreadyExists) {
        return previousSaved;
      }

      return [...previousSaved, exercise];
    });
  };

  const removeFromSaved = (id: number) => {
    setSaved((previousSaved) =>
      previousSaved.filter((item) => item.id !== id)
    );
  };

  const isInPlan = (id: number) => {
    return plan.some((item) => item.id === id);
  };

  const isSaved = (id: number) => {
    return saved.some((item) => item.id === id);
  };

  return (
    <CardContext.Provider
      value={{
        plan,
        saved,
        addToPlan,
        removeFromPlan,
        saveExercise,
        removeFromSaved,
        isInPlan,
        isSaved,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error(
      "useCardContext must be used inside CardProvider"
    );
  }

  return context;
};