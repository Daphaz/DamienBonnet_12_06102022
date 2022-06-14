export type PerformanceDataType = {
  value: number;
  kind: number;
};

export type KindType = Record<number, string>;

export interface Performance {
  data: PerformanceDataType[];
  kind: KindType;
  userId: number;
}
