export const ShadowGlassBox = ({ invisible }) => {
  return (
    <div
      className={`aspect-square w-20 border-[3px] rounded-2xl shadow-inner  ${
        invisible && 'invisible'
      }`}
    ></div>
  );
};

export const GlassBox = ({ invisible }) => {
  return (
    <div
      className={`aspect-square w-20 border-[3px] rounded-2xl ${
        invisible && 'invisible'
      }`}
    ></div>
  );
};
