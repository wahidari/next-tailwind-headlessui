import Heading from "@components/Heading";

export default function Section({ id, name = "", className, children}) {
  return (
    <section id={id} className={`${className ? className + "": ""} pt-10`}>
      <Heading.h3 className="italic">{name}</Heading.h3>
      <div className="mb-2">{children}</div>
    </section>
  );
}
