import { useState } from "react";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { Button } from "@inubekit/button";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";

import { ChangeDateModal } from "@components/modals/ChangeDateModal";
import { IChangeDateEntry } from "@components/modals/ChangeDateModal/types";

interface ChangeDateProps {
  laterYears: number; 
  previousYears: number;
  description: string;
  setSelectedDate: (show: IChangeDateEntry) => void;
}

const ChangeDate = (props: ChangeDateProps) => {
  const { description, laterYears, previousYears, setSelectedDate} = props;

  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <Stack gap="20px" alignItems="center">
      <Text type="title" size="medium" appearance="dark">
        {description}
      </Text>

      <Button
        onClick={() => setShowModal(true)}
        iconBefore={<MdOutlineCalendarMonth size={"18px"} />}
      >
        Modificar mes
      </Button>
      {showModal && (
        <ChangeDateModal
          laterYears={laterYears}
          previousYears={previousYears}
          portalId={"modals"}
          onCloseModal={handleToggleModal}
          selectedDate={setSelectedDate}
        />
      )}
    </Stack>
  );
};

export { ChangeDate };
