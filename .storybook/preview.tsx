import '../src/assets/fonts/fonts.css';
import '../src/styles/main.scss';

import type { Preview } from '@storybook/react';

const preview: Preview = {
    decorators: [
        (Story) => (
            <html
                style={{
                    padding: '40px',
                    margin: '-40px'
                }}
            >
                <Story />
            </html>
        )
    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            sort: 'requiredFirst',
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        },
        options: {
            storySort: {
                order: ['Atoms', 'Molecules', 'Components', '*']
            },
            showPanel: true,
            panelPosition: 'bottom'
        }
    }
};

export default preview;
