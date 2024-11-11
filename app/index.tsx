import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";
import { createButtonRows } from "@/helpers/buttonsConfig";
import { useCalculator } from "@/hooks/useCalculator";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";

const CalculatorApp = () => {
  const calculatorActions = useCalculator();
  const buttonRows = createButtonRows(calculatorActions);

  return (
    <View style={globalStyles.calculatorContainer}>
      {/* resultados */}
      <View style={{ paddingHorizontal: 30, paddingBottom: 20 }}>
        <ThemeText variant="h1">{calculatorActions.formula}</ThemeText>
        {calculatorActions.formula === calculatorActions.prevNumber ? (
          <ThemeText variant="h2"> </ThemeText>
        ) : (
          <ThemeText variant="h2">{calculatorActions.prevNumber}</ThemeText>
        )}
      </View>

      {/* Renderizado de botones */}
      {buttonRows.map((row, rowIndex) => (
        <View key={rowIndex} style={globalStyles.row}>
          {row.map((button, buttonIndex) => (
            <CalculatorButton
              key={buttonIndex}
              onPress={button.onPress || (() => {})} // Función vacía por defecto
              label={button.label}
              color={button.color}
              blackText={button.blackText}
              doubleSize={button.doubleSize}
            />
          ))}
        </View>
      ))}
    </View>
  );
};

export default CalculatorApp;
