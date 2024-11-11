import { Colors } from "@/constants/Colors";

type ButtonConfig = {
  label: string;
  color: string;
  blackText?: boolean;
  doubleSize?: boolean;
  onPress?: () => void;
};

// Añadimos una función para generar las configuraciones
export const createButtonRows = (actions: any): ButtonConfig[][] => [
  [
    { label: "C", color: Colors.lightGray, blackText: true, onPress: actions.resetNumber },
    { label: "+/-", color: Colors.lightGray, blackText: true, onPress: actions.toggleSign },
    { label: "del", color: Colors.lightGray, blackText: true, onPress: actions.deleteLast },
    { label: "÷", color: Colors.orange, onPress: actions.divideOperation },
  ],
  [
    { label: "7", color: Colors.darkGray, onPress: () => actions.buildNumber("7") },
    { label: "8", color: Colors.darkGray, onPress: () => actions.buildNumber("8") },
    { label: "9", color: Colors.darkGray, onPress: () => actions.buildNumber("9") },
    { label: "x", color: Colors.orange, onPress: actions.multiplyOperation },
  ],
  [
    { label: "4", color: Colors.darkGray, onPress: () => actions.buildNumber("4") },
    { label: "5", color: Colors.darkGray, onPress: () => actions.buildNumber("5") },
    { label: "6", color: Colors.darkGray, onPress: () => actions.buildNumber("6") },
    { label: "-", color: Colors.orange, onPress: actions.restOperation },
  ],
  [
    { label: "1", color: Colors.darkGray, onPress: () => actions.buildNumber("1") },
    { label: "2", color: Colors.darkGray, onPress: () => actions.buildNumber("2") },
    { label: "3", color: Colors.darkGray, onPress: () => actions.buildNumber("3") },
    { label: "+", color: Colors.orange, onPress: actions.sumOperation },
  ],
  [
    { label: "0", color: Colors.darkGray, doubleSize: true, onPress: () => actions.buildNumber("0") },
    { label: ".", color: Colors.darkGray, onPress: () => actions.buildNumber(".") },
    { label: "=", color: Colors.darkGray, onPress: actions.calculateResult },
  ],
];
