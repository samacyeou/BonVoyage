import colors from './colors';

interface ColorDotProp {
  colorName: string;
  size: number;
  check?: boolean;
}

export default function BigColorDot({ colorName, size, check }: ColorDotProp) {
  const circleRadius = size / 2; // 원의 반지름 계산

  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="14" cy="14" r="14" fill={colors[colorName]} />
      {check && (
        <path
          d="M11.7536 16.8875L19.5223 9.11875C19.7057 8.93542 19.9234 8.84375 20.1755 8.84375C20.4275 8.84375 20.6453 8.93542 20.8286 9.11875C21.0119 9.30208 21.1036 9.51979 21.1036 9.77188C21.1036 10.024 21.0119 10.2417 20.8286 10.425L12.3953 18.8583C12.2119 19.0417 11.998 19.1333 11.7536 19.1333C11.5091 19.1333 11.2953 19.0417 11.1119 18.8583L7.17025 14.9167C6.98692 14.7333 6.89907 14.5156 6.90671 14.2635C6.91435 14.0115 7.00983 13.7938 7.19317 13.6104C7.3765 13.4271 7.59421 13.3354 7.84629 13.3354C8.09838 13.3354 8.31608 13.4271 8.49942 13.6104L11.7536 16.8875Z"
          fill="white"
        />
      )}
    </svg>
  );
}
