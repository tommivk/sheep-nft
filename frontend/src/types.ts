export type Sheep = {
  id: string;
  name: string;
  level: string;
  lastFeedTime: string;
  concecutiveFeedingDays: string;
  isAlive: boolean;
  svg: string;
};

export type BlockData = {
  blockNumber: number;
  blockTime: number;
};
