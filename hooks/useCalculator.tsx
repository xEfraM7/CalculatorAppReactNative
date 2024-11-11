import { useEffect, useRef, useState } from "react";

enum Operator {
  add = "+",
  subtract = "-",
  multiply = "x",
  divide = "÷",
}

export const useCalculator = () => {
  const [formula, setFormula] = useState("0");
  const [number, setNumber] = useState("0");
  const [prevNumber, setPrevNumber] = useState("0");
  const lastOperation = useRef<Operator>();

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(" ").at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    const subResult = calculateSubResult();
    setPrevNumber(`${subResult}`);
  }, [formula]);

  const resetNumber = () => {
    setNumber("0");
    setPrevNumber("0");
    setFormula("0");

    lastOperation.current = undefined;
  };

  const toggleSign = () => {
    if (number.includes("-")) {
      return setNumber(number.replace("-", ""));
    }
    setNumber("-" + number);
  };

  const deleteLast = () => {
    let currentSign = "";
    let temporalNumber = number;

    if (number.includes("-")) {
      currentSign = "-";
      temporalNumber = number.substring(1);
    }

    if (temporalNumber.length > 1) {
      return setNumber(currentSign + temporalNumber.slice(0, -1));
    }

    setNumber("0");
  };

  const setLastNumber = () => {
    if (number.endsWith(".")) {
      setPrevNumber(number.slice(0, -1));
    }
    setPrevNumber(number);
    setNumber("0");
  };

  const divideOperation = () => {
    calculateResult();
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const multiplyOperation = () => {
    calculateResult();
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const restOperation = () => {
    calculateResult();
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };

  const sumOperation = () => {
    calculateResult();
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const calculateSubResult = () => {
    const [firstValue, operation, secondValue] = formula.split(" ");
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);
    if (isNaN(num2)) return num1;

    switch (operation) {
      case Operator.add:
        return num1 + num2;
      case Operator.subtract:
        return num1 - num2;
      case Operator.divide:
        return num1 / num2;
      case Operator.multiply:
        return num1 * num2;
      default:
        throw new Error(`Operation ${operation} not implemented`);
    }
  };

  const calculateResult = () => {
    const results = calculateSubResult();
    setFormula(`${results}`);

    lastOperation.current = undefined;
    setPrevNumber("0");
  };

  const buildNumber = (numberString: string) => {
    // verificar si ya existe el punto decimal
    if (number.includes(".") && numberString === ".") return;
    if (number.startsWith("0") || number.startsWith("-0")) {
      if (numberString === ".") {
        return setNumber(number + numberString);
      }
      // evaluar si es otro cero y no hay punto
      if (numberString === "0" && number.includes(".")) {
        return setNumber(number + numberString);
      }
      // evaluar si es diferente de cero y no hay punto y es el primer numero
      if (numberString !== "0" && !number.includes(".")) {
        return setNumber(numberString);
      }
      if (numberString === "0" && !number.includes(".")) {
        return;
      }
    }

    setNumber(number + numberString);
  };

  return {
    // props
    formula,
    number,
    prevNumber,
    // methods
    buildNumber,
    resetNumber,
    toggleSign,
    deleteLast,

    divideOperation,
    multiplyOperation,
    restOperation,
    sumOperation,
    calculateSubResult,
    calculateResult,
  };
};
