import React, { Component } from 'react';
import TeaserFigure from "./TeaserFigure";
import TeaserBackground from "./TeaserBackground"

class Teaser extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  async getManifest(url) {
    const response = await fetch(url);
    const manifest = await response.json();
    return manifest;
  }

  componentDidMount() {
    this.props.sequence.map((item, index) => {
      this.getManifest(item.manifest).then(data => {
        this.state.data[index] = data
        this.setState({
          loaded: true
        })
      });
    })
  }

  render() {

    if (this.state.loaded) {
      if (this.state.data.length > 1) {
        if (typeof(this.state.data[0]) !== 'undefined') {

          let region = 'full';
          let size = '!700,700';

          if (this.props.sequence[0].region !== undefined) {
            region = this.props.sequence[0].region
          }

          if (this.props.mode === 'comparison') {
            return (
              <div className="yith-teaser">
                <TeaserFigure data={this.state.data[0]} canvas={this.props.sequence[0].canvas} region={region} size={size} />
              </div>
            )
          } else {
            return (
              <div className="yith-teaser yith-teaser-background">
                <TeaserFigure data={this.state.data[0]} canvas={this.props.sequence[0].canvas} region={region} size={size} />
                <TeaserBackground data={this.state.data[0]} canvas={this.props.sequence[0].canvas} region={region} size={size} />
              </div>
            )
          }

        } else {
          return null
        }
      } else {
        return null
      }
    } else {
      return null
    }

  }

}

export default Teaser;
