export interface HarvestEstimate {
  id: number;
  costCenter: number;
  registrationDate: string;
  user: number;
  unit: number;
  quantity: number;
  startDate: string;
  endDate: string;
  dailyAmount: number;
  workHolidays: boolean;
  userName: string;
  processPlant: number;
  destination: number;
  referenceId: number;
  active: boolean;
  arrow?: string;
  color?: string;
}
