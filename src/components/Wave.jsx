const Wave = ({
  position = "bottom",
  fill = "#ffffff",
  height = "h-16 md:h-24",
}) => {
  return (
    <div
      className={`absolute left-0 w-full overflow-hidden leading-none pointer-events-none ${
        position === "top" ? "top-0 rotate-180" : "bottom-0"
      }`}
    >
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        className={`block w-full ${height}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,28 C220,68 420,72 600,40 C780,8 980,6 1200,28 V120 H0 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export default Wave;