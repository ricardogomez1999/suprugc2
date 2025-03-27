export type PlanFeature = {
  description: string;
  included: boolean;
};

export type Card = {
  title: string;
  subtitle: string;
  price: number;
  included1: PlanFeature;
  included2: PlanFeature;
  included3: PlanFeature;
  included4: PlanFeature;
  included5: PlanFeature;
};

export type FAQ = {
  question: string;
  answer: string;
};
