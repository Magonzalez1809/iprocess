import { FormikValues } from "formik";
import { useMediaQuery } from "@inubekit/hooks";
import { Stack } from "@inubekit/stack";
import { Text } from "@inubekit/text";
import { Button } from "@inubekit/button";
import { Fieldset } from "@inubekit/fieldset";
import { Textarea } from "@inubekit/textarea";
import { Select } from "@inubekit/select";
import { Divider } from "@inubekit/divider";

import { IEntries, IEnumeratorsProcessCoverage } from "@forms/types";
import { Datetimefield } from "@design/inputs/Datetimefield";
import { tokens } from "@design/tokens";
import { mediaQueryMobile } from "@config/environment";
import { getFieldState, validateExecutionWay } from "@forms/utils";
import { ComponentAppearance } from "@ptypes/aparences.types";
import { StyledField, StyledTextarea } from "./styles";


interface RefreshSavingCommitmentUIProps {
  data: IEntries;
  formik: FormikValues;
  comparisonData: boolean;
  optionsTypeRefresh: IEnumeratorsProcessCoverage[];
  onChange: (name: string, value: string) => void;
  onStartProcess: () => void;
}

const RefreshSavingCommitmentUI = (props: RefreshSavingCommitmentUIProps) => {
  const {
    data,
    formik,
    comparisonData,
    optionsTypeRefresh,
    onChange,
    onStartProcess,
  } = props;

  const isMobile = useMediaQuery(mediaQueryMobile);

  return (
    <Stack direction="column" gap={tokens.spacing.s250}>
      <Text type="title" size="medium" appearance="dark" weight="bold">
        Compromiso de ahorro
      </Text>
      <Divider dashed />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Stack direction="column" gap={tokens.spacing.s250}>
          <StyledField>
            <Text type="label" size="large">
              Descripción sugerida
            </Text>
            <Fieldset legend="" spacing="compact">
              <Text>{String(data?.descriptionSuggested)}</Text>
            </Fieldset>
          </StyledField>

          <StyledTextarea>
            <Textarea
              label="Descripción complementaria"
              name="descriptionComplementary"
              id="descriptionComplementary"
              placeholder=""
              value={formik.values.descriptionComplementary}
              message={formik.errors.descriptionComplementary}
              fullwidth
              maxLength={220}
              onChange={formik.handleChange}
            />
          </StyledTextarea>

          <Select
            id="typeRefresh"
            label="Tipo de refresco"
            name="typeRefresh"
            onChange={onChange}
            onBlur={formik.handleBlur}
            options={optionsTypeRefresh}
            placeholder="Seleccione uno"
            size="wide"
            message={
              getFieldState(formik, "typeRefresh") === "invalid"
                ? "La tipo de refresco es requerido"
                : ""
            }
            invalid={
              getFieldState(formik, "typeRefresh") === "invalid" &&
              formik.errors.typeRefresh
            }
            value={formik.values.typeRefresh}
            fullwidth
            required
          />

          <StyledField $smallScreen={isMobile}>
            <Text type="label" size="large">
              Fecha y hora de ejecución
            </Text>
            <Fieldset legend="" spacing="compact">
              <Text>{String(data.date)}</Text>
            </Fieldset>
          </StyledField>

          {data?.executionWay &&
            validateExecutionWay(data?.executionWay as string) && (
              <Datetimefield
                withFullwidth={true}
                id="plannedExecutionDate"
                label="Fecha planeada de ejecución"
                message={
                  getFieldState(formik, "plannedExecutionDate") === "invalid"
                    ? "La fecha es requerida"
                    : ""
                }
                name="plannedExecutionDate"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                size="wide"
                status={getFieldState(formik, "plannedExecutionDate")}
                value={formik.values.plannedExecutionDate}
                isRequired
              />
            )}

          <Stack gap={tokens.spacing.s100} justifyContent="flex-end">
            <Button
              spacing="wide"
              appearance={ComponentAppearance.PRIMARY}
              variant="filled"
              onClick={onStartProcess}
              type="submit"
              disabled={!comparisonData || !formik.isValid}
            >
              Iniciar proceso
            </Button>
          </Stack>
        </Stack>
      </form>
    </Stack>
  );
};

export { RefreshSavingCommitmentUI };
export type { RefreshSavingCommitmentUIProps };
