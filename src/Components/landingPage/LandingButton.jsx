import styled from 'styled-components/macro';
import Button from 'Components/ui/Button';
import StyledLink from 'Components/navigation/Link';

const LandingButton = styled(Button).attrs((p) => ({
  contained: true,
  fontSize: p.fontSize,
  as: StyledLink,
}))`
  padding: 1rem 3rem;
`;

export default LandingButton;
