/**
 * This type is reference od sessions property of Average interface
 */
export type SessionAverageType = {
  /**
   * the number of day
   */
  day: string;
  /**
   *  session length for chart
   */
  sessionLength: number;
};

export interface Average {
  /**
   *  unique user id
   */
  userId: number;
  /**
   * Array of session average data
   */
  sessions: SessionAverageType[];
}
