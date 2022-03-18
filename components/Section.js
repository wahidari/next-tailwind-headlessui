import Link from "next/link";
import Badge from "@components/Badge";
import Heading from "@components/Heading";
export default function Section({
  id,
  name,
  children,
}) {
  return (
    <section id={id} className="pt-16">
      <Heading.h3 className="group transition-all duration-500">
        <span className="transition-all duration-500 text-neutral-500 group-hover:text-black dark:group-hover:text-white">
          #
        </span>{" "}
        <Link href={`#${id}`}>{name}</Link>
      </Heading.h3>
      <div className="mb-2">{children}</div>
    </section>
  );
}
