import { Link } from "react-router-dom";
import styled from "styled-components";
import { tokens } from "@design/tokens";

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding-bottom: ${tokens.spacing.s500};
  height: 100vh;
  overflow-y: auto;
`;
const StyledContainerSection = styled.div`
  @media screen and (max-width: 532px) {
    display: flex;
    flex-direction: column;
    height: 100vh;
    padding: 16px;
    gap: 24px;
  }
`;

const StyledHeaderContainer = styled.div`
  & div > div {
    cursor: pointer;
  }
`;

const StyledContentImg = styled(Link)`
  width: 100px;
`;

const StyledLogo = styled.img`
  max-width: 100px;
`;

const StyledTitle = styled.div`
  padding: ${tokens.spacing.s600} ${tokens.spacing.s1600} ${tokens.spacing.s1000};

  @media screen and (max-width: 805px) {
    display: flex;
    padding: var(--spacing-S200, 16px);
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-S300, 24px);
    align-self: stretch;
  }
`;

const StyledContainerCards = styled.div`
  box-sizing: border-box;
  padding: ${tokens.spacing.s0} ${tokens.spacing.s1400} ${tokens.spacing.s400} 170px;
  display: flex;
  flex-wrap: wrap;
  gap: ${tokens.spacing.s400};

  @media screen and (max-width: 805px) {
    justify-content: center;
    padding: 0px;
  }
`;

const StyledFooter = styled.footer`
  display: flex;
  margin-top: auto;
  padding: ${tokens.spacing.s0} ${tokens.spacing.s1600} ${tokens.spacing.s0};
  justify-content: center;

  @media screen and (max-width: 532px) {
    padding-top: 50px;
    margin: 0;
  }
`;

export {
  StyledContainer,
  StyledHeaderContainer,
  StyledTitle,
  StyledContentImg,
  StyledLogo,
  StyledContainerCards,
  StyledFooter,
  StyledContainerSection,
};
