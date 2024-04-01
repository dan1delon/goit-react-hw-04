import { forwardRef } from 'react';
import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = forwardRef(({ loadMore }, ref) => {
  return (
    <div>
      <button type="button" onClick={loadMore} className={css.btn} ref={ref}>
        Load more
      </button>
    </div>
  );
});

LoadMoreBtn.displayName = 'LoadMoreBtn';

export default LoadMoreBtn;
