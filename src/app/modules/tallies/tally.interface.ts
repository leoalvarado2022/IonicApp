export interface Tally {
  id: number;
  date: string;
  workerId: number;
  costCenterId: number;
  laborId: number;
  workingDay: number;
  hoursExtra: number;
  performance: number;
  validity: number;
  bondValidity: number;
  bondId: number;
  dealValidity: number;
  dealId: number;
  notes: string;
  creatorId?: number;
  tempId?: number;
  status?: 'new' | 'edit' | 'delete';
}
