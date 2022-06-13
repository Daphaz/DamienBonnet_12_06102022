export type SessionActivityType = {
  day: string;
  kilogram: number;
  calories: number;
};

export interface Activity {
  userId: number;
  sessions: SessionActivityType[];
}
