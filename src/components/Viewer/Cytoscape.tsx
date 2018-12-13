import * as React from "react";
import * as cytoscape from 'cytoscape';
import { Modal, ModalBody } from 'reactstrap'
import './Cytoscape.css'

export class Cytoscape extends React.Component<any, any> {

  cy: any
  cache: Map<string, any> = new Map()
  BASE_URL = 'http://localhost:8080/data/'
  URL = {
    chromosome: this.BASE_URL + 'chromosomes/chr' ,
    gene: this.BASE_URL + 'genes/' ,
    range: this.BASE_URL + 'ranges/' ,
  }

  constructor(props: any) {
    super(props);
    this.state = {cytoscape_loading: true};
  }

  componentDidUpdate(prevProps: any) {
    if ((this.props.chromosome != prevProps.chromosome) && this.props.chromosome != 'Choose') {
      this.setState({cytoscape_loading: true});
      const url = this.chromosomePath(this.props.chromosome)
      this.onDownloadChange(url)
      if(this.cache.has(this.props.chromosome)) {
        let cy = this.cache.get(this.props.chromosome)

        let promise = new Promise((resolve, reject) => {
          setTimeout(() => {
            this.cy = this.buildNetwork(cy.elements().jsons())
            resolve(this.cy);
          }, 500);
        });
      } else if (this.props.chromosome != 'Choose') {
        let promise = new Promise((resolve, reject) => {
          setTimeout(() => {
            const cy_json_elements = this.fetchAsyncJson(url)
            this.cache.set(this.props.chromosome, this.buildNetwork(cy_json_elements))
            this.cy = this.cache.get(this.props.chromosome)
            resolve(this.cy);
          }, 500);
        });
      }
    } else if ((this.props.gene != prevProps.gene) && this.props.gene != 'Choose') {
      this.setState({cytoscape_loading: true});
      const url = this.genePath(this.props.gene)
      this.onDownloadChange(url)
      if(this.cache.has(this.props.gene)) {
        let cy = this.cache.get(this.props.gene)
        let promise = new Promise((resolve, reject) => {
          setTimeout(() => {
            this.cy = this.buildNetwork(cy.elements().jsons())
            resolve(this.cy);
          }, 500);
        });
      } else if (this.props.gene != 'Choose') {
        let promise = new Promise((resolve, reject) => {
          setTimeout(() => {
            const cy_json_elements = this.fetchAsyncJson(url)
            this.cache.set(this.props.gene, this.buildNetwork(cy_json_elements))
            this.cy = this.cache.get(this.props.gene)
            resolve(this.cy);
          }, 500);
        });
      }

    } else if ((this.props.range != prevProps.range) && this.props.range != 'Choose') {
      this.setState({cytoscape_loading: true});
      const url = this.rangePath(this.props.range)
      this.onDownloadChange(url)
      if(this.cache.has(this.props.range)) {
        let cy = this.cache.get(this.props.range)
        let promise = new Promise((resolve, reject) => {
          setTimeout(() => {
            this.cy = this.buildNetwork(cy.elements().jsons())
            resolve(this.cy);
          }, 500);
        });
      } else if (this.props.range != 'Choose') {
        let promise = new Promise((resolve, reject) => {
          setTimeout(() => {
            const cy_json_elements = this.fetchAsyncJson(url)
            this.cache.set(this.props.range, this.buildNetwork(cy_json_elements))
            this.cy = this.cache.get(this.props.range)
            resolve(this.cy);
          }, 500);
        });
      }

    } else if (this.props.feature != prevProps.feature) {
      this.cy.style()
        .selector('node')
        .style({
          'background-color': 'mapData('+ this.props.feature + ', 0, 1, black, green)',
        })
        .update()
    }
  }

  componentDidMount (){
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const url = this.chromosomePath(this.props.chromosome)
        this.onDownloadChange(url)
        const cy_json_elements = this.fetchAsyncJson(url)
        this.cache.set(this.props.chromosome, this.buildNetwork(cy_json_elements))
        this.cy = this.cache.get(this.props.chromosome)
        resolve(this.cy);
      }, 500);
    });
  }


  onDownloadChange = (download : string) => {
    this.props.onDownloadChange(download)
  }

  genePath(gene: string): string {
    return this.URL['gene'] + gene + '.json';
  }

  chromosomePath(chromosome: string): string {
    return this.URL['chromosome'] + chromosome + '.json';
  }

  rangePath(range: string): string {
    return this.URL['range'] + range + '.json';
  }

  async fetchAsyncJson(url: string) {
    // Warning: The network file has to be serve before by a http server
    // http-server is provided to help to the development thanks to `yarn serve` command
    // In this case, the port used to serve is the 8080
    return fetch(url).then(response => {
      const json = response.json();
      return json;
    });
  }

  buildNetwork (cy_json_elements: any) {
    return cytoscape({

      container: document.getElementById('cytoscape_container'), // container to render in

      elements: cy_json_elements,

      style: [ // the stylesheet for the graph
        {
          selector: 'node',
          style: {
            'background-color': 'mapData('+ this.props.feature + ', 0, 1, black, green)',
            'label': 'data(curated_gene_name)',
            'color': 'white',
            'font-size': 4,
            'text-valign': 'center',
            'text-halign': 'center',
            'width': 35,
            'height': 35
          }
        },
        {
          selector: 'node[type = "bait"]',
          style: {
            'shape': 'rectangle',
          }
        },
        {
          selector: 'node[type = "oe"]',
          style: {
            'shape': 'ellipse',
          }
        },
        {
          selector: 'edge',
          style: {
            'width': 5,
            'line-color': '#ccc',
            'target-arrow-color': '#ccc',
            'target-arrow-shape': 'triangle'
          }
        },
      ],

      layout: {
        name: 'preset',
        animate: false,
        stop: () => this.setState({cytoscape_loading: false})
      }
    });
  }

  render() {

    const margin_style = {
      border: '#aaa',
      borderRadius: '5px',
      borderStyle: 'solid',
      borderWidth: '2px'
    };

    return (
      <div className='container-fluid'>
        <Modal isOpen={this.state.cytoscape_loading} centered={true} className='text-center'>
          <ModalBody>
            Be patient please
            <br/>
  Rendering {this.props.chromosome != 'Choose' ? 'Chromosome ' + this.props.chromosome : 'Gene ' + this.props.gene }
  <div className='spinner'></div>
</ModalBody>
        </Modal>
        <div id='cytoscape_container' style={margin_style}></div>
      </div>
    );
  }
}
