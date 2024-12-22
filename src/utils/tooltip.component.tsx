import "./tooltip.component.css";

interface ToolTipParams {
  text: string;
  className?: string;
  children: JSX.Element | JSX.Element[];
}

export default function ToolTip({ text, className, children }: ToolTipParams) {
  return (
    <div className={"tooltip" + " " + className}>
      {children}
      <span className="tooltiptext">{text}</span>
    </div>
  );
}
