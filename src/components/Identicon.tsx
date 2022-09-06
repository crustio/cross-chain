import Icon from '@polkadot/react-identicon';
import type { IconTheme } from '@polkadot/react-identicon/types';
import styled from 'styled-components';
import React from 'react';

interface Props {
    className?: string;
    iconTheme?: IconTheme;
    isExternal?: boolean | null;
    onCopy?: () => void;
    prefix?: number;
    value?: string | null;
}

function Identicon({ className, iconTheme, onCopy, prefix, value }: Props): React.ReactElement<Props> {
    return (
        <div className={className}>
            <Icon
                className='icon'
                onCopy={onCopy}
                prefix={prefix}
                size={32}
                theme={iconTheme}
                value={value}
            />
            
        </div>
    );
}

export default styled(Identicon)(() => `
//   background: rgba(192, 192, 292, 0.25);
  border-radius: 50%;
  display: inline-block;
  overflow: hidden;

  .container:before {
    box-shadow: none;
  }

  svg {
    circle:first-of-type {
      display: none;
    }
  }
`);