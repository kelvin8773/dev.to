import { h } from 'preact';
import { render } from '@testing-library/preact';
import { axe } from 'jest-axe';
import ModFaqSection from '../ChatChannelSettings/ModFaqSection';

describe('<ChannelDescriptionSection />', () => {
  it('should have no a11y violations', async () => {
    const { container } = render(<ModFaqSection email="jane@doe.com" />);
    const results = await axe(container);

    expect(results).toHaveNoViolations();
  });

  it('should render', () => {
    const { getByText } = render(<ModFaqSection email="jane@doe.com" />);

    getByText(/^Questions about Connect Channel moderation\? Contact/);
    getByText('jane@doe.com');
  });
});
