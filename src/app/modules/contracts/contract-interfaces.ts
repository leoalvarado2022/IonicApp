export interface ContractListItem {
  id: number;
  workerName: string;
  workerLastName: string;
  workerSurname: string;
  contractTypeName: string;

  // FORM OBJECT
  companyId?: number;
  workerId?: number;
  creatorId?: number;
  tempId?: number;
  nationality?: number;
  identifier?: string;
  name?: string;
  lastName?: string;
  sureName?: string;
  dob?: string;
  civilStatus?: string;
  gender?: string;
  contractType?: number;
  afp?: number;
  isapre?: number;
  retired?: boolean;
  quadrille?: number;
}
