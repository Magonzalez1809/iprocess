import { Button } from "@inubekit/button";

import { StyledContainerButton } from "./styles";

const stringToTime = (timeString: string): Date => {
  const [hours, minutes, seconds] = timeString.split(":").map(Number);
  const date = new Date();
  date.setHours(hours, minutes, seconds, 0);
  return date;
};

const calculateSeconds = (dateProcess: Date) => {
  return (
    dateProcess.getHours() * 3600 +
    dateProcess.getMinutes() * 60 +
    dateProcess.getSeconds()
  );
};

const requirementsData = () => {
  const status = [
    { name: "Cumple", appearance: "success" },
    { name: "No cumple", appearance: "danger" },
    { name: "Sin evaluar", appearance: "warning" },
  ];
  const getRandomIndex = () => Math.floor(Math.random() * status.length);

  return status[getRandomIndex()];
};

const requirementsButton = () => {
  const status = requirementsData();
  return (
    <>
      <StyledContainerButton>
        <Button
          spacing="compact"
          appearance={
            status.appearance as
              | "success"
              | "danger"
              | "warning"
              | "primary"
              | "help"
              | "dark"
              | "gray"
              | "light"
              | undefined
          }
        >
          {status.name}
        </Button>
      </StyledContainerButton>
    </>
  );
};

export {
  stringToTime,
  calculateSeconds,
  requirementsData,
  requirementsButton,
};
