import moonPhases from "../../json/moon-phases.json";

function getMoonPhaseIcon(phaseValue) {
  // eslint-disable-next-line arrow-body-style
  const currentPhase = moonPhases.find((phase) => {
    return phase.name === phaseValue;
  });

  if (!currentPhase) return "";

  return currentPhase.icon;
}

export default getMoonPhaseIcon;
