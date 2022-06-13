export type SessionAverageType = {
  day: string;
  sessionLength: number;
};

export interface Average {
  userId: number;
  sessions: SessionAverageType[];
}
