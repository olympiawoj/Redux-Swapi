import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getCharacters } from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      <h2>....Fetching...</h2>;
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => {
  console.log(state);
  return {
    characters: state.charsReducer.characters,
    error: state.charsReducer.error,
    fetching: state.charsReducer.fetching
  };
};

export default connect(
  mapStateToProps /* mapStateToProps replaces null here */,
  {
    getCharacters
    /* action creators go here */
  }
)(CharacterListView);
