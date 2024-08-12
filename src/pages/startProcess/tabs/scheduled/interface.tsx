import { MdSearch } from "react-icons/md";
import { Stack } from "@inubekit/stack";
import { Textfield } from "@inubekit/textfield";


import { StartProcesses } from "../../types";
import { ChangePeriod } from "@src/components/feedback/ChangePeriod";

interface ScheduledTabUIProps {
  description: string;
  entries: StartProcesses[];
  loading: boolean;
  searchScheduled: string;
  handleSearchScheduled: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleOrderData: () => void;
}

function ScheduledTabUI(props: ScheduledTabUIProps) {
  const {
    description,
    searchScheduled,
    handleSearchScheduled,
  } = props;

  return (
    <Stack gap="32px" direction="column">
      <Stack justifyContent="space-between">
        <ChangePeriod
          description={description}
        />

        <Textfield
          name="searchScheduled"
          id="searchScheduled"
          placeholder="Búsqueda..."
          type="search"
          iconBefore={<MdSearch />}
          size="compact"
          value={searchScheduled}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleSearchScheduled(e)
          }
        />
      </Stack>
    </Stack>
  );
}

export { ScheduledTabUI };
