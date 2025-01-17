import { MdOutlineSubtitles } from "react-icons/md";
import { Icon } from "@inubekit/icon";

import { StartProcesses } from "@pages/startProcess/types";
import { formatDate } from "@utils/dates";
import { Details } from "../components/Details";

const normailzeValidateProgress = (process: StartProcesses[]) =>
  process.map((entry) => ({
    ...entry,
    id: entry.id,
    process: entry.description,
    aplication: entry.aplication,
    date: entry.dateAndHour && formatDate(new Date(entry.dateAndHour)),
    dateAndHour:
      entry.dateAndHour && formatDate(new Date(entry.dateAndHour), true),
    totalPersonsCoversProcess: entry.totalPerson,
    totalPersonsProsecuted: entry.totalPersonsProsecuted,
    dailyDetail: entry.dailyDetail,
    actions: actions,
    dateWithoutFormat: entry.date,
  }));

const mapValidateProgress = (entry: StartProcesses) => {
  return {
    id: entry.id,
    aplication: entry.aplication?.abbreviatedName || "",
    process: entry.description,
    referenceNumberRequirement: entry.referenceNumberRequirement
  };
};

const actions = [
  {
    id: "Details",
    content: (process: StartProcesses) => (
      <Details data={mapValidateProgress(process)} />
    ),
  },
  {
    id: "statusExecute",
    content: () => (
      <Icon
        appearance="dark"
        icon={<MdOutlineSubtitles />}
        size="16px"
        cursorHover
      />
    ),
  },
];

const labelsDetails = [
  {
    id: "aplication",
    titleName: "Aplicación",
  },
  {
    id: "process",
    titleName: "Proceso",
  },
  {
    id: "statusText",
    titleName: "Requisitos",
  },
]

export { actions, labelsDetails, normailzeValidateProgress };