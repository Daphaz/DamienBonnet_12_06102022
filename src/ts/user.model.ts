export type UserInfoType = {
  firstName: string;
  lastName: string;
  age: number;
};

export type KeyDataType = {
  calorieCount: number;
  proteinCount: number;
  carbohydrateCount: number;
  lipidCount: number;
};

export type SessionType = {
  day: string;
  kilogram: number;
  calories: number;
};

export interface User {
  id: number;
  userInfos: UserInfoType;
  score: number;
  keyData: KeyDataType;
}

export interface Activity {
  userId: number;
  sessions: SessionType[];
}
