export interface TechItem {
  name: string;
  icon: string;
  iconPrefix?: "fas" | "fab";
  hoverColor: string;
}

export const techStrip: TechItem[] = [
  { name: "Python", icon: "fa-python", iconPrefix: "fab", hoverColor: "hover:text-primary" },
  { name: "SQL", icon: "fa-database", hoverColor: "hover:text-accent" },
  { name: "Power BI", icon: "fa-chart-bar", hoverColor: "hover:text-yellow-400" },
  { name: "BigQuery", icon: "fa-server", hoverColor: "hover:text-blue-400" },
  { name: "Docker", icon: "fa-docker", iconPrefix: "fab", hoverColor: "hover:text-blue-500" },
  { name: "Spark", icon: "fa-fire", hoverColor: "hover:text-orange-500" },
  { name: "Kubernetes", icon: "fa-dharmachakra", hoverColor: "hover:text-blue-600" },
  { name: "Databricks", icon: "fa-cubes", hoverColor: "hover:text-red-500" },
  { name: "dbt", icon: "fa-layer-group", hoverColor: "hover:text-orange-400" },
  { name: "Airflow", icon: "fa-wind", hoverColor: "hover:text-teal-400" },
  { name: "GitHub Actions", icon: "fa-github", iconPrefix: "fab", hoverColor: "hover:text-white" },
  { name: "CI/CD", icon: "fa-sync", hoverColor: "hover:text-green-400" },
  { name: "Automation", icon: "fa-robot", hoverColor: "hover:text-purple-400" },
  { name: "Pandas & NumPy", icon: "fa-chart-line", hoverColor: "hover:text-yellow-500" },
];
