"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "./ui/button";
import { Chart } from "./Chart";
import { addDays, formatDate } from "@/lib/utils";
import toast from "react-hot-toast";

export const Calculator = () => {
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [operator, setOperator] = useState("+");
  const [results, setResults] = useState<number[]>([]);
  const [dates, setDates] = useState<string[]>([]);

  const onCalculateClick = () => {
    let result;
    if (operator === "/" && secondValue === "0") {
      result = "Infinity"; // or handle as error
      toast.error("Can not divide by 0");
      return;
    } else {
      const expression = `${firstValue || 0} ${operator} ${secondValue || 0}`;
      result = eval(expression);
    }

    setResults((val) => [...val, result]);
    const date = new Date();
    const dateToAdd = addDays(date, results.length + 1);
    setDates((val) => [...val, formatDate(dateToAdd)]);
  };

  const resetValues = () => {
    setFirstValue("");
    setSecondValue("");
    setDates([]);
    setResults([]);
  };

  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="flex gap-4 items-center ">
        <div className="grid  items-center gap-1.5">
          <Label className="mb-2" htmlFor="A">
            A
          </Label>
          <Input
            value={firstValue}
            onChange={(e) => {
              setFirstValue(e.target.value);
            }}
            className="text-black"
            type="number"
            id="a"
            placeholder="A"
          />
        </div>
        <div className="flex-1 w-full">
          <Label className="text-white" htmlFor="Operator">
            Operator
          </Label>
          <Select
            value={operator}
            onValueChange={(value) => {
              setOperator(value);
            }}
          >
            <SelectTrigger className="w-full mt-2 text-black">
              <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="+">+</SelectItem>
              <SelectItem value="-">-</SelectItem>
              <SelectItem value="*">*</SelectItem>
              <SelectItem value="/">/</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid max-w-sm items-center gap-1.5 ">
          <Label className="mt-2" htmlFor="B">
            B
          </Label>
          <Input
            value={secondValue}
            onChange={(e) => {
              setSecondValue(e.target.value);
            }}
            className="text-black"
            type="number"
            id="B"
            placeholder="B"
          />
        </div>
      </div>
      <div className="flex gap-4 items-center justify-center mt-4">
        <Button
          onClick={onCalculateClick}
          className="w-full"
          variant={"secondary"}
        >
          Calc
        </Button>
        <Button
          onClick={resetValues}
          variant={"destructive"}
          className="w-full"
        >
          Clear
        </Button>
      </div>
      {dates.length > 0 && <Chart results={results} dates={dates} />}
    </div>
  );
};
