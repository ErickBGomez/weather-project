const conditions = [
  {
    codes: [1000],
    icon: "clear-day.svg",
  },
  {
    codes: [1006, 1009, 1030, 1135],
    icon: "cloud.svg",
  },
];

function getConditionIcon(conditionCode) {
  const icon = conditions.find((condition) =>
    condition.codes.includes(conditionCode),
  );

  return icon;
}

export default getConditionIcon;
