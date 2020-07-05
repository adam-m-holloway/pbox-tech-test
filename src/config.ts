const styles = {
  spacing: '20px',
  font: {
    baseFamily: "'Open Sans Regular', Helvetica, Arial, sans-serif",
    baseSize: '16px',
    baseColour: '#3b4153',
  },
  colour: {
    teal: '#007377',
    border: '#d3d3d3',
  },
};

const bpSize = {
  sMin: '320px',
  sMax: '479px',
  smMin: '480px',
  smMax: '767px',
  mdMin: '768px',
  mdMax: '1023px',
  lgMin: '1024px',
  lgMax: '1439px',
  xlMin: '1440px',
};

const breakpoint = {
  s: `@media (min-width: ${bpSize.sMin})`,
  sm: `@media (min-width: ${bpSize.smMin})`,
  sm_to_md: `@media (min-width: ${bpSize.smMin}) and (max-width: ${bpSize.smMax})`,
  md: `@media (min-width: ${bpSize.mdMin})`,
  lg: `@media (min-width: ${bpSize.lgMin})`,
  xl: `@media (min-width: ${bpSize.xlMin})`,
};

export const config = { styles, breakpoint };
