const conditions = [
  {
    codes: [1000],
    icon: ["clear-night.svg", "clear-day.svg"],
  },
  {
    codes: [1006, 1009, 1030, 1135],
    icon: "cloud.svg",
  },
];

function getConditionIcon(conditionCode, isDay = 1) {
  const currentCondition = conditions.find((condition) =>
    condition.codes.includes(conditionCode),
  );

  // If the condition contains time-based icons, return their corresponding icon
  // (example, clear-day and clear-night)
  const conditionIcon = Array.isArray(currentCondition.icon)
    ? currentCondition.icon[isDay]
    : currentCondition.icon;

  return conditionIcon;
}

export default getConditionIcon;
