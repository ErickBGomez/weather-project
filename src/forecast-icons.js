import conditions from "./conditions.json";

async function getConditionIcon(conditionCode, isDay = 1) {
  const path = "./img/forecast/";

  const currentCondition = conditions.find((condition) =>
    condition.codes.includes(conditionCode),
  );

  // If the condition contains time-based icons, return their corresponding icon
  // (example, clear-day and clear-night)
  const iconName = Array.isArray(currentCondition.icon)
    ? currentCondition.icon[isDay]
    : currentCondition.icon;

  // Fetch svg from "./img/forecast"
  const svg = await import(`${path}${iconName}`);

  return svg.default;
}

export default getConditionIcon;
