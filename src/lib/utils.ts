import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    weekday: "short", // "Thu"
    month: "short", // "May"
    day: "2-digit", // "09"
    year: "numeric", // "2024"
  });
}

export function addDays(date: Date, numberOfDays: number) {
  return new Date(date.setDate(date.getDate() + numberOfDays));
}
