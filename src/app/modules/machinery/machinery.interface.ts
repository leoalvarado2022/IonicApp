export interface Machinery {
  companyId: number;
  costCenterId: number;
  costCenterCode: string;
  costCenterName: string;
  date: string;
  id: number;
  implementCostCenterId: number;
  implementCostCenterCode: string;
  implementCostCenterName: string;
  laborId: number;
  laborCode: string;
  laborName: string;
  machineryCostCenterId: number;
  machineryCostCenterCode: string;
  machineryCostCenterName: string;
  unitId: number;
  unitCode: string;
  unitName: string;
  workerId: number;
  workerName: string;
  quantity: number;
  useId: number;
  tempId?: number;
  status?: 'new' | 'edit' | 'delete';
}
