import React from 'react';
import Banner from './components/Banner.jsx';
import ContainerHeader from './components/ContainerHeader.jsx';
import Footer from './components/Footer.jsx';
import marked from 'marked';

const App = React.createClass ({
   updateValue(newValue) {
        this.setState ({
            value: newValue
        })
    },
    getInitialState() {
        return {
            value: 'Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n'
        }
    },
    markup(value) {
        return {__html: value}
    },
    render() {
      return (
          <div>
            <Banner />
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-6">
                        <ContainerHeader text="I N P U T" />
                        <InputText 
                            value={this.state.value}
                            updateValue={this.updateValue} />
                    </div>
                    <div className="col-xs-12 col-sm-6">
                        <ContainerHeader text="O U T P U T" />
                        <div id="output-text">
                            <span dangerouslySetInnerHTML={this.markup(marked(this.state.value))}></span>
                        </div>
                    </div>
                </div>
            </div>
              <Footer />
          </div>
      );
   }
});

const InputText = React.createClass ({
    update(e) {
        this.props.updateValue(e.target.value);
    },
    render() {
        return (
            <div>
                <textarea 
                    id="input-text" 
                    rows="18"
                    type="text"
                    value={this.props.value}
                    onChange={this.update}
                    />
            </div>
        );
    }
});

export default App;