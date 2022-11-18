import type { ReactNode } from "react";

type AnchorLinkProps = {
  children: ReactNode;
  href: string;
  className?: string;
};

const AnchorLink = ({ href, children, className }: AnchorLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={className}
    >
      {children}
    </a>
  );
};

export default AnchorLink;
