import { StartProcesses } from "@pages/startProcess/types";

const mapConfirmInitiatedApiToEntity = (
  process: Record<string, string | number | object>
): StartProcesses => {
  const processes: StartProcesses = {
    id: String(process.processControlId),
    publicCode: String(process.publicCode),
    description: String(process.processDescription),
    dateAndHour: new Date(String(process.executionDate)),
    totalPerson: Number(process.totalPerson),
    timeUsedToInsertPeople: Number(process.timeUsedToInsertPeople),
    executionParameters: Object(process.executionParameters),
    generalError: String(process.generalError),
    referenceNumberRequirement: String(process.uniqueReferenceNumberRequirement),
    plannedExecutionDate: String(process.plannedExecution),
    executionOfTheProcess: String(process.confirmationForExecutionOfTheProcess),
    processControlId: String(process.processControlId),
  };
  return processes;
};

const mapConfirmInitiatedApiToEntities = (
  processes: Record<string, string | number | object>[]
) => {
  return processes
    .map(mapConfirmInitiatedApiToEntity).sort((a, b) => (a.dateAndHour?.getTime() || 0) - (b.dateAndHour?.getTime() || 0));
};

export { mapConfirmInitiatedApiToEntity, mapConfirmInitiatedApiToEntities };
