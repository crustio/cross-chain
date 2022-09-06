import styled from 'styled-components';
import React from 'react';

interface Props {
    className?: string;
    value?: string | null;
}

function DropdownText({ className, value }: Props): React.ReactElement<Props> {
    return (
        <div className={className}>
            {value}
        </div>
    );
}

export default styled(DropdownText)(() => `
//   background: rgba(192, 192, 292, 0.25);
    display: inline-block;
    overflow: hidden;
    height: 2.4rem;
    line-height: 2.4rem;
    padding-left: 0.3rem;
`);