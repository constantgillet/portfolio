export default function Container({ children, className = "" }) {
  return (
    <div className={"mx-auto max-w-[864px] px-4 " + className}>{children}</div>
  );
}
