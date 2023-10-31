import Link from "next/link";

export interface BreadcrumbItem {
  label: string;
  link: string;
}

interface BreadcrumbsProps {
  crumbs: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ crumbs }) => {
  return (
    <nav className="text-sm mb-4">
      {crumbs.map((crumb, index) => (
        <span key={crumb.link}>
          <Link href={crumb.link}>
            <span className="text-bannerBlue text-[16px] hover:underline">
              {crumb.label}
            </span>
          </Link>
          {index < crumbs.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
