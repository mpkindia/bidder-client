import { Box, Button, FormField, Heading, Layer, TextInput } from 'grommet';
import { Close } from 'grommet-icons';
import React from 'react';
import { graphql } from 'react-apollo';
import { addBid } from '../apolloclient/mutations/bid';
import { getCurrentUser } from '../apolloclient/queries/user';

class BidInput extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        bazaar_type: this.props.bid_name.split('$')[1],
        bid_type: this.props.bid_type,
        bid_number: '',
        bid_value: '',
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
      let { name, value } = e.target 
      this.setState({ [name]: value })      
    }
    async handleSubmit (e) {
      e.preventDefault()
      let bazaar_id = this.props.bazaar_id
      let { bid_number, bid_value, bid_type, bazaar_type } = this.state

      console.log(this.state)
      let response = await this.props.mutate({
        variables: {
            bazaar_id, bid_number, bid_value, bid_type, bazaar_type
        },
        refetchQueries: [{ 
          query: getCurrentUser 
        }]
      })
      console.log(response)
      this.props.close()
    }
    render() {
      let name= this.props.bid_name.split('$')
      return(
        <React.Fragment>
          <Layer
          position="center"
          modal
          onClickOutside={this.props.close}
          onEsc={this.props.close}
        >
           <Box
            as="form"
            fill="vertical"
            overflow="auto"
            width="medium"
            pad="medium"
            align="center"
            >
            <Box flex={false} direction="row" justify="between">
              <Heading level={2} margin="none">
                Place Your Bid on {name[0]} {name[1]}
              </Heading>
              <Button icon={<Close />} onClick={this.props.close}/>
            </Box>

            <Box pad={{vertical:"small"}}>
                <FormField label={`${this.state.bid_type} Number`} htmlFor="select" {...this.props} >
                <TextInput
                  id="select"
                  placeholder="Number"
                  value={this.state.bid_number}
                  name="bid_number"
                  onChange={this.handleChange}
                 />
                </FormField>
          </Box>
          <Box pad={{vertical:"small"}}>
              <FormField label="Bid Amount" {...this.props}>
                <TextInput
                  id="select"
                  placeholder="Amount"
                  name="bid_value"
                  value={this.state.bid_value}
                  onChange={this.handleChange}
                 />
              </FormField>
            </Box>
            <Box flex={false} as="footer" align="start">
              <Button
                type="submit"
                fill
                label="Submit"
                primary
                onClick={this.handleSubmit}
              />
            </Box>
          </Box>
          </Layer>
        </React.Fragment>
      )
    }
}
const BidInputWithMutation= graphql(addBid)(BidInput)



export default BidInputWithMutation

