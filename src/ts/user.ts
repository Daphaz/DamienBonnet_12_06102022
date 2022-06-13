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

export interface User {
  id: number;
  userInfos: UserInfoType;
  score: number;
  keyData: KeyDataType;
}
