enum StepNames {
  RecordTallies = 0,
  RecordDevices,
  RecordDevicesTallies,
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

const StepsArray = [
  { index: StepNames.RecordTallies, title: 'Grabar Tarjas', valid: true },
  { index: StepNames.RecordDevices, title: 'Grabar Dispositivos', valid: true },
  { index: StepNames.RecordDevicesTallies, title: 'Grabar Tratos y Tarjas', valid: true },
  { index: StepNames.CleanMemory, title: 'Limpiar Memoria', valid: true },
  { index: StepNames.GetSyncData, title: 'Sincronizando', valid: true },
  { index: StepNames.StartStoring, title: 'Almacenando datos en memoria', valid: true },
  { index: StepNames.EndStoring, title: 'Completado', valid: true }
];

export { StepNames, StepsArray };
