import * as React from 'react';
import classnames from 'classnames';

interface Props {
    className?: string;
}

export const Row: React.SFC<Props> = ({className, children}) => (
    <div className={classnames("row", className)}>{children}</div>
);