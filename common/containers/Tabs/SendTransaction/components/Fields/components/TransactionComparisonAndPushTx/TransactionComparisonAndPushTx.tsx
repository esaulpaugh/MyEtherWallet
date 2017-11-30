import React from 'react';
import translate from 'translations';
import { Aux } from 'components/ui';
import { getTransactionFields, transaction } from 'libs/transaction';
import { OfflineBroadcast } from './OfflineBroadcast';
import { SerializedTransaction } from 'components/renderCbs';

const getStringifiedTx = (serializedTransaction: string) =>
  JSON.stringify(
    getTransactionFields(transaction(serializedTransaction)),
    null,
    2
  );

export const TransactionComparisonAndPushTx: React.SFC<{}> = () => (
  <SerializedTransaction
    withSerializedTransaction={serializedTransaction => (
      <Aux>
        <div className="col-sm-6">
          <label>{translate('SEND_raw')}</label>
          <textarea
            className="form-control"
            value={getStringifiedTx(serializedTransaction)}
            rows={4}
            readOnly={true}
          />
        </div>
        <div className="col-sm-6">
          <label>{translate('SEND_signed')}</label>
          <textarea
            className="form-control"
            value={serializedTransaction}
            rows={4}
            readOnly={true}
          />
        </div>
        <OfflineBroadcast />
      </Aux>
    )}
  />
);