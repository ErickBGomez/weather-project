import conditions from "./json/conditions.json";

function getConditionIcon(conditionCode, isDay = true) {
  // eslint-disable-next-line arrow-body-style
  const currentCondition = conditions.find((condition) => {
    return condition.codes.includes(conditionCode);
  });

  // Return empty string if conditionCode doesn't exist
  if (!currentCondition) return "";

  // If the condition contains time-based icons, return their corresponding icon
  // (example, clear-day and clear-night)
  const condition = Array.isArray(currentCondition.condition)
    ? currentCondition.condition[+isDay]
    : currentCondition.condition;

  return condition.icon;
}

export default getConditionIcon;
