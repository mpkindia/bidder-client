import React from 'react'
import { Box, Heading , Button, Layer, FormField, Select, TextInput } from 'grommet'
import { Close } from 'grommet-icons'
import { graphql } from 'react-apollo'
import { addBid } from '../apolloclient/mutations/bid'
import { getCurrentUser } from '../apolloclient/queries/user';
const allSingleOptions = Array(10)
  .fill()
  .map((_, i) => `${i}`);

  const allJodiOptions = Array(100)
  .fill()
  .map((_, i) => `${i}`);

for (let i=0; i<allJodiOptions.length; i++){
    allJodiOptions[i] = allJodiOptions[i].toString()
    if (allJodiOptions[i].length===1)
    allJodiOptions[i] = '0'+ allJodiOptions[i] 

}

class SingleBidInput extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        // bazaar_type: this.props.item.name,
        bazaar_type: this.props.bid_name.split('$')[1],
        bid_type: this.props.bid_type,
        bid_number: '',
        bid_value: '',
        options: allSingleOptions 
      }
      this.handleSubmit = this.handleSubmit.bind(this)
      this.handleChange = this.handleChange.bind(this)
    }
    handleChange(e) {
      let { value } = e.target 
      this.setState({ bid_value: value })      
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
      const { options } = this.state
      console.log(this.props)
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
                <FormField label=" Single Number" htmlFor="select" {...this.props} >
                  <Select
                    id="select"
                    placeholder="placeholder"
                    options={options}
                    value={this.state.bid_number}
                    onChange={({ option }) => this.setState({ bid_number : option })}
                  />
                </FormField>
          </Box>
          <Box pad={{vertical:"small"}}>
              <FormField label="Bid Amount" {...this.props}>
                <TextInput
                  id="select"
                  placeholder="placeholder"
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
const SingleBidInputWithMutation= graphql(addBid)(SingleBidInput)

class JodiBidInput extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // bazaar_type: this.props.item.name,
      bazaar_type: this.props.bid_name.split('$')[1],
      bid_type: this.props.bid_type,
      bid_number: '',
      bid_value: '',
      options: allJodiOptions 
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    let { value } = e.target 
    this.setState({ bid_value: value })      
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
    const { options } = this.state
    console.log(this.props)
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
              <FormField label=" Jodi Number" htmlFor="select" {...this.props} >
                <Select
                  id="select"
                  placeholder="placeholder"
                  options={options}
                  value={this.state.bid_number}
                  onChange={({ option }) => this.setState({ bid_number : option })}
                />
              </FormField>
        </Box>
        <Box pad={{vertical:"small"}}>
            <FormField label="Bid Amount" {...this.props}>
              <TextInput
                id="select"
                placeholder="placeholder"
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
const JodiBidInputWithMutation= graphql(addBid)(JodiBidInput)



export {
  SingleBidInputWithMutation,
  JodiBidInputWithMutation
}
