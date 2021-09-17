import React from 'react';

import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { Footer } from '~/components/Layout/Footer';

describe('Components', () => {
  it('should render Footer', () => {
    const { getByText } = render(<Footer />);

    expect(getByText('Footer')).toBeInTheDocument();
  });
});
