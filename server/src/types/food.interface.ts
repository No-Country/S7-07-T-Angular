export interface Food {
  title: string;
  description: string;
  userId: string;
  calories: number;
  macronutrients: Macronutrients;
  mark?: string;
}

interface Macronutrients {
  carbohydrates: number;
  proteins: number;
  fats: number;
}