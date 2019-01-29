import React from 'react'
import { Box, Select, FormField } from 'grommet'


const allOptions = Array(100)
  .fill()
  .map((_, i) => `option ${i + 1}`);
  
class Misc extends React.Component {
        state = { value: "", options: allOptions };
      
        render() {
          const { value, options } = this.state;
          return (

                <Box align="center" pad="large">
                <FormField label="Label" htmlFor="select" {...this.props}>
                  <Select
                    id="select"
                    placeholder="placeholder"
                    options={options}
                    value={value}
                    onChange={({ option }) => this.setState({ value: option })}
                  />
                </FormField>
              </Box>

);
        }
}
      

export default Misc