import PropTypes from 'prop-types';
import Helmet from 'preact-helmet';

import MetricsTable from '../../components/metrics-table';
import Sources from '../../components/sources';
import config from './config.json';
import locale from './locale.json';
import enhance from './container';

const Browsertime = (props) => {
  const {
    sources,
    runs,
    rows,
    addSource,
    removeSource,
  } = props;

  return (
    <div>
      <Helmet
        title={locale.title}
        description={locale.description}
      />

      <Sources
        sources={sources}
        runs={runs}
        exampleUrls={config.exampleUrls}
        exampleText={locale.loadExample}
        addSource={addSource}
        removeSource={removeSource}
      />

      {rows.length > 0 && (
        <MetricsTable
          runs={runs}
          rows={rows}
        />
      )}
    </div>
  );
};

Browsertime.propTypes = {
  /** JSON sources */
  sources: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types

  /** Metric runs */
  runs: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types

  /** Metric rows */
  rows: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types

  /** Add sources handler */
  addSource: PropTypes.func.isRequired,

  /** Remove source handler */
  removeSource: PropTypes.func.isRequired,
};

export default enhance(Browsertime);
