import styled from 'styled-components/macro';
import Button from 'Components/ui/Button';
import StyledLink from 'Components/navigation/StyledLink';

const LandingButton = styled(Button).attrs((p) => ({
  contained: 'true',
  fontSize: p.fontSize,
  as: StyledLink,
}))`
  padding: 1rem 3rem;
  box-shadow: 0 2px 5px ${(p) => p.theme.dark};
`;

export default LandingButton;
