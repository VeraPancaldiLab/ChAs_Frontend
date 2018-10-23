import * as React from "react";
import { FeaturesPanelContainer } from './../../../containers/FeaturesPanelContainer';
import { ChromosomesPanelContainer } from './../../../containers/ChromosomesPanelContainer';
import { DownloadButtonContainer } from './../../../containers/DownloadButtonContainer'

export class ControlPanel extends React.Component<{},{}> {
  render() {
    return (
      <div className='container-fluid'>
          <div className="col" style={{ margin: '5px' }}>
            <ChromosomesPanelContainer/>
            <FeaturesPanelContainer/>
            <DownloadButtonContainer/>
        </div>
      </div>
    );
  }
}
