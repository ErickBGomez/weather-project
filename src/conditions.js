import conditions from "./json/conditions.json";

async function getConditionIcon(conditionCode, isDay = true) {
  const path = "./img/forecast/";

  // eslint-disable-next-line arrow-body-style
  const currentCondition = conditions.find((condition) => {
    return condition.codes.includes(conditionCode);
  });

  // Return empty string if conditionCode doesn't exist
  if (!currentCondition) return "";

  // If the condition contains time-based icons, return their corresponding icon
  // (example, clear-day and clear-night)
  const iconName = Array.isArray(currentCondition.icon)
    ? currentCondition.icon[+isDay]
    : currentCondition.icon;

  // Fetch svg from "./img/forecast"
  const svg = await import(`${path}${iconName}`);

  return svg.default;
}

export default getConditionIcon;
