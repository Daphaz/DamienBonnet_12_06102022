/**
 * this type is a reference of data property of Performance interface
 */
export type PerformanceDataType = {
  /**
   *  value of kind performance
   */
  value: number;
  /**
   * kind index value
   */
  kind: number;
};

/**
 * Generic type of kind property of Performance interface
 */
export type KindType = Record<number, string>;

export interface Performance {
  /**
   *  Array of performance data
   */
  data: PerformanceDataType[];
  /**
   *  Kind label and index
   */
  kind: KindType;
  /**
   * Unique user id
   */
  userId: number;
}
