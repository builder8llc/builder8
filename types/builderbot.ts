export interface AppPlan {
  appName: string;
  entities: string[];
  features: string[];
  stack: {
    frontend: string;
    backend: string;
    database: string;
  };
  estimatedModules: number;
}
