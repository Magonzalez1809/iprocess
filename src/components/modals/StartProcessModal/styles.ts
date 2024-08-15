import styled from "styled-components";
import { inube } from "@inubekit/foundations";
import { tokens } from "@src/design/tokens";

interface IStyledModal {
  $smallScreen: boolean;
}

const StyledContainer = styled.div`
  position: relative; 
`;

const StyledModal = styled.div<IStyledModal>`
  background-color: ${({ theme }) =>
    theme?.palette?.neutral?.N10 || inube.palette.neutral.N10};

  width: ${(props) => (props.$smallScreen ? "280px" : "450px")};
  min-height: ${(props) => (props.$smallScreen ? "100vh" : "auto")};
  height: auto;
  border-radius: ${(props) => (props.$smallScreen ? `${tokens.spacing.s0}`: `${tokens.spacing.s100}`)};

  & > div {
    padding: ${(props) => (props.$smallScreen ? `${tokens.spacing.s200}` : `${tokens.spacing.s300}`)};
  }
`;


export { StyledContainer, StyledModal };