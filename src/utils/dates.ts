import { IChangeDateEntry } from "@components/modals/ChangeDateModal/types";
import { FilterProcessesForDate } from "@pages/startProcess/types";
import { monthsData } from "@mocks/domains/months";

import { capitalizeText } from "./texts";

const formatDate = (date: Date, withTime?: boolean) => {
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  };
  const dateString = date.toLocaleDateString("es-ES", options);

  const [day, month, year] = dateString.split(" ");

  let formattedDate = `${day}/${capitalizeText(month)}/${year}`;

  if (withTime) {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const formatMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formatSeconds = seconds < 10 ? `0${seconds}` : seconds;

    const timeString = `${hours}:${formatMinutes}:${formatSeconds}`;

    formattedDate += ` ${timeString}`;
  }

  return formattedDate;
};

const formatMonth=()=>{
  const today = new Date();
  const currentMonth = today.getMonth();
 return currentMonth < 10 ? `0${String(currentMonth)}` : String(currentMonth);
}

const MonthLetters =  monthsData.find((month) => month.id === formatMonth())?.label;

const filterDateChange = (selectedDate: IChangeDateEntry): FilterProcessesForDate => {
  const month = monthsData.find((month) => month.label === selectedDate.month)?.id;

  const today = new Date();
  const currentYear = String(today.getFullYear());
  
  return {
    executionDate: "",
    month: month || formatMonth(),
    year: selectedDate.year || currentYear,
  };
};

export { MonthLetters, formatDate, filterDateChange, formatMonth };
