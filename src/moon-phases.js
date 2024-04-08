import moonPhases from "./json/moon-phases.json";

async function getMoonPhaseIcon(phaseValue) {
  const path = "./img/moon-phases/";

  // eslint-disable-next-line arrow-body-style
  const currentPhase = moonPhases.find((phase) => {
    return phase.name === phaseValue;
  });

  if (!currentPhase) return "";

  const svg = await import(`${path}${currentPhase.icon}`);

  return svg.default;
}

export default getMoonPhaseIcon;
