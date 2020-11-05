export interface ApplicationListInterface {
  id: number;
  applicationOrderId: number;
  costCenterId: number;
  costCenterCode: string;
  costCenterName: string;
  costCenterMachineryId: number;
  applicationBalance: number;
  applicationRegistry: number;
  endDate: string;
  startDate: string;
  hectaresQuantity: number;
  humidity: number;
  litersQuantity: number;
  temperature: number;
  wind: number;
}
