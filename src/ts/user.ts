/**
 *  this type is a reference of userInfos property of User interface
 */
export type UserInfoType = {
  /**
   *  firstname of user
   */
  firstName: string;
  /**
   * lastname of user
   */
  lastName: string;
  /**
   * age of user
   */
  age: number;
};

/**
 *  this type is a reference of keyData property of User interface
 */
export type KeyDataType = {
  /**
   * daily count calories
   */
  calorieCount: number;
  /**
   * daily count protein
   */
  proteinCount: number;
  /**
   * daily count carbohydrate
   */
  carbohydrateCount: number;
  /**
   * daily count lipid
   */
  lipidCount: number;
};

export interface User {
  /**
   * unique user id
   */
  id: number;
  /**
   * user infos
   */
  userInfos: UserInfoType;
  /**
   * daily score percentage
   */
  score: number;
  /**
   * the main key data
   */
  keyData: KeyDataType;
}
