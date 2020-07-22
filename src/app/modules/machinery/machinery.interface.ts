export interface Machinery {
  id: number;
  useId: number;
  machineryCostCenterId: number;
  machineryCostCenterCode: string;
  machineryCostCenterName: string;
  implementCostCenterId: number;
  implementCostCenterCode: string;
  implementCostCenterName: string;
  costCenterId: number;
  costCenterCode: string;
  costCenterName: string;
  laborId: number;
  laborCode: string;
  laborName: string;
  workerId: number;
  workerName: string;
  companyId: number;
  date: string;
  quantity: number;
  creatorId: number;
  performance: number;
  machineryUnitId: number;
  machineryUnitCode: string;
  machineryUnitName: string;
  laborUnitId: number;
  tempId?: number;
  status?: 'new' | 'edit' | 'delete';
}
