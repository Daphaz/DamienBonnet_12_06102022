/**
 * This type is a reference of sessions property of Activity interface
 */
export type SessionActivityType = {
  /**
   * number of day
   */
  day: string;
  /**
   * daily kilogram user
   */
  kilogram: number;
  /**
   * daily calories user
   */
  calories: number;
};

export interface Activity {
  /**
   * unique user id
   */
  userId: number;
  /**
   * Array of session activity data
   */
  sessions: SessionActivityType[];
}
