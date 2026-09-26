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
  completed: number[];

  addToPlan: (exercise: IExercise) => void;
  removeFromPlan: (id: number) => void;

  saveExercise: (exercise: IExercise) => void;
  removeFromSaved: (id: number) => void;

  markAsDone: (id: number) => void;
  isCompleted: (id: number) => boolean;

  isInPlan: (id: number) => boolean;
  isSaved: (id: number) => boolean;

  showToast: (message: string, type?: ToastType) => void;
}

type ToastType = "success" | "error" | "info";

interface Toast {
  id: number;
  message: string;
  type: ToastType;
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
  const [completed, setCompleted] = useState<number[]>([]);
  const [toast, setToast] = useState<Toast | null>(null);

  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");
    const storedCompleted =
      localStorage.getItem("fitlog-completed");

    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSaved(JSON.parse(storedSaved));
    }

    if (storedCompleted) {
      setCompleted(JSON.parse(storedCompleted));
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

  useEffect(() => {
    localStorage.setItem(
      "fitlog-completed",
      JSON.stringify(completed)
    );
  }, [completed]);

  const showToast = (
    message: string,
    type: ToastType = "success"
  ) => {
    const toastId = Date.now();

    setToast({
      id: toastId,
      message,
      type,
    });

    setTimeout(() => {
      setToast((currentToast) =>
        currentToast?.id === toastId
          ? null
          : currentToast
      );
    }, 2500);
  };

  const addToPlan = (exercise: IExercise) => {
    setPlan((previousPlan) => {
      if (previousPlan.length >= 5) {
        showToast(
          "Your plan is already full.",
          "error"
        );

        return previousPlan;
      }

      const alreadyExists = previousPlan.some(
        (item) => item.id === exercise.id
      );

      if (alreadyExists) {
        showToast(
          "This workout is already in your plan.",
          "info"
        );

        return previousPlan;
      }

      showToast(
        "Added to today's plan.",
        "success"
      );

      return [...previousPlan, exercise];
    });
  };

  const removeFromPlan = (id: number) => {
    setPlan((previousPlan) => {
      const workout = previousPlan.find(
        (item) => item.id === id
      );

      if (!workout) {
        return previousPlan;
      }

      showToast(
        "Removed from today's plan.",
        "success"
      );

      return previousPlan.filter(
        (item) => item.id !== id
      );
    });

    setCompleted((previousCompleted) =>
      previousCompleted.filter(
        (completedId) => completedId !== id
      )
    );
  };

  const saveExercise = (exercise: IExercise) => {
    setSaved((previousSaved) => {
      const alreadyExists = previousSaved.some(
        (item) => item.id === exercise.id
      );

      if (alreadyExists) {
        showToast(
          "This workout is already saved.",
          "info"
        );

        return previousSaved;
      }

      showToast(
        "Saved for later.",
        "success"
      );

      return [...previousSaved, exercise];
    });
  };

  const removeFromSaved = (id: number) => {
    setSaved((previousSaved) => {
      const workout = previousSaved.find(
        (item) => item.id === id
      );

      if (!workout) {
        return previousSaved;
      }

      showToast(
        "Removed from saved.",
        "success"
      );

      return previousSaved.filter(
        (item) => item.id !== id
      );
    });
  };

  const markAsDone = (id: number) => {
    setCompleted((previousCompleted) => {
      if (previousCompleted.includes(id)) {
        return previousCompleted;
      }

      showToast(
        "Workout marked as done.",
        "success"
      );

      return [...previousCompleted, id];
    });
  };

  const isCompleted = (id: number) =>
    completed.includes(id);

  const isInPlan = (id: number) =>
    plan.some((item) => item.id === id);

  const isSaved = (id: number) =>
    saved.some((item) => item.id === id);

  return (
    <CardContext.Provider
      value={{
        plan,
        saved,
        completed,

        addToPlan,
        removeFromPlan,

        saveExercise,
        removeFromSaved,

        markAsDone,
        isCompleted,

        isInPlan,
        isSaved,

        showToast,
      }}
    >
      {children}

      {/* Toast */}
      {toast && (
        <div
          className={`fixed right-5 top-20 z-[100] flex items-center gap-3 rounded-xl border px-4 py-3 shadow-2xl backdrop-blur-md animate-[toastIn_0.3s_ease-out] ${
            toast.type === "success"
              ? "border-lime-400/30 bg-[#111217]/95"
              : toast.type === "error"
                ? "border-red-400/30 bg-[#111217]/95"
                : "border-zinc-700 bg-[#111217]/95"
          }`}
        >
          <span
            className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
              toast.type === "success"
                ? "bg-lime-400 text-black"
                : toast.type === "error"
                  ? "bg-red-400 text-black"
                  : "bg-zinc-700 text-white"
            }`}
          >
            {toast.type === "success"
              ? "✓"
              : toast.type === "error"
                ? "!"
                : "i"}
          </span>

          <p className="whitespace-nowrap text-xs font-medium text-white">
            {toast.message}
          </p>
        </div>
      )}
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