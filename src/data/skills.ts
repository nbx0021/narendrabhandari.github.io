export interface SkillCategory {
  title: string;
  icon: string;
  colorClass: string;
  bgClass: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    title: "Languages",
    icon: "fa-code",
    colorClass: "text-primary",
    bgClass: "bg-primary/20",
    items: ["Python", "SQL", "Java", "DAX"],
  },
  {
    title: "Visualization",
    icon: "fa-chart-pie",
    colorClass: "text-secondary",
    bgClass: "bg-secondary/20",
    items: ["Power BI", "Tableau", "Matplotlib", "Seaborn"],
  },
  {
    title: "Engineering",
    icon: "fa-cogs",
    colorClass: "text-accent",
    bgClass: "bg-accent/20",
    items: ["dbt", "BigQuery", "Docker", "PySpark", "Databricks", "Apache Airflow"],
  },
  {
    title: "Frameworks",
    icon: "fa-brain",
    colorClass: "text-purple-400",
    bgClass: "bg-purple-500/20",
    items: ["Pandas", "Scikit-learn", "Django", "Flask", "GitHub Actions"],
  },
];
