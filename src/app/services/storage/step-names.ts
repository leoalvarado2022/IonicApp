export enum StepNames {
  RecordTallies = 0,
  RecordDevices,
  CleanMemory,
  GetSyncData,
  StartStoring,

  // REM Module Steps
  GetRemSyncData,
  StartStoringRem,

  // Tallies Module Steps
  GetTalliesSyncData,
  StartStoringTallies,

  EndStoring // THIS NEEDS TO BE THE LAST STEP
}

export const StepsArray = [
  'Grabar Tarjas',
  'Grabar Dispositivos',
  'Limpiar Memoria',
  'Obtener Sync',
  'Guardando en Almacenamiento',
  'Terminado'
];
