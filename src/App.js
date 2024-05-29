import './App.css';
import React from 'react';
import Markdown from 'marked-react';


function App() {
  return (
    <div className="App">
      <Worker />
    </div>
  );
}

class Worker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n if (firstLine == '```' && lastLine == '```') {\n   return multiLineCode;\n   }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n	- Some are bulleted.\n		- With different indentation levels.\n			- That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)",
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }

  render() {
    return (
      <div id="worker" className="worker">
        <div id="editor-container">
          <div class="toolbar">Editor</div>
          <textarea id="editor" className="textarea" type="text" onChange={this.handleChange}>
            {this.state.input}
          </textarea>
        </div>
        <div id="preview-container"> 
        <div class="toolbar">Preview</div>
        <div id="preview" class="preview">
          <Markdown>{this.state.input}</Markdown>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
