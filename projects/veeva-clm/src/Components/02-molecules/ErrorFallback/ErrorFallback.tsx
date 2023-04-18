import React from 'react';
import styles from  './ErrorFallback.module.scss';
import { FallbackProps } from 'react-error-boundary';

const ErrorFallback = ({ error }: FallbackProps): JSX.Element => {
  return (
    <div role='alert' className={styles['error-container']}>
      <div className={styles['content-container']}>
        <h1 className={styles['title']}>Something went wrong</h1>
        <p className='error-message'>
          Error message: <strong>{error.message}</strong>
        </p>
      </div>
    </div>
  );
};

export default ErrorFallback;
