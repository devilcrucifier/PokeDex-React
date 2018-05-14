import React from 'react'
import TextField from 'material-ui/TextField';

const Search = ({ onChange }) => (
  <TextField
    type="text"
    onChange={onChange}
    placeholder="Search..."
  />
)

export default Search
