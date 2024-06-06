import { Card, CardContent, CardHeader } from "./card";

type ProjectNavProps = {
  title: string,
  href: string,
  description: string;
}

const ProjectNav: React.FC<ProjectNavProps> = ({ title, href, description}) => {
  return (
    <li className="w-max h-max">
      <a href={href} className="w-full h-full">
        <Card className="w-full h-min p-1">
          <CardHeader className="text-lg w-full py-2 bold underline">{title}</CardHeader>
          <CardContent className="text-sm py-2">{description}</CardContent>
        </Card>
      </a>
    </li>
  );
}

export default ProjectNav