import { Box, DataTable, Text } from 'grommet';
import React from 'react';
import { graphql } from 'react-apollo';
import { getAllUserBids } from '../apolloclient/queries/bid';


const columns = [
  {
    property: "bazaar_name",
    header: <Text>Bazaar Name</Text>,
    primary: true,
  },
  {
    property: "bazaar_type",
    header: <Text>Bazaar Type</Text>
  },
  {
    property: "bid_type",
    header: <Text>Bid Type</Text>
  },
  {
    property: "bid_number",
    header: <Text>Bid Number</Text>
  },
  {
    property: "bid_value",
    header: <Text>Bid Value</Text>
  },
  {
    property: "created_at",
    header: <Text>Time</Text>,
    render: ({created_at}) => created_at.split('GMT')[0]
  }
];

const controlledColumns = columns.map(col => Object.assign({}, col));

class ControlledDataTable extends React.Component {
  render() {
    const { data: { loading, getAllUserBids }} = this.props
    console.log(loading, getAllUserBids)
    if (loading) return <Text>Loading...</Text>
    return (
        <Box align="center" pad="medium" background="light-2">
          <DataTable
            columns={[
              ...controlledColumns
            ].map(col => ({ ...col }))}
            data={getAllUserBids}
            sortable
            size="medium"
          />
        </Box>
    );
  }
}
export default graphql(getAllUserBids)(ControlledDataTable)