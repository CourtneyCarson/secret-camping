import  React from 'react';
// import ReactDOM from 'react-dom';
import { DropDownList } from '@progress/kendo-react-dropdowns';
import { filterBy } from '@progress/kendo-data-query';

const allData = [
    { id: 1, text: "Small" },
    { id: 2, text: "Medium" },
    { id: 3, text: "Large" }
];

class FilterDropDown extends React.Component {
    state = {
        data: allData.slice()
    };

    filterChange = (event) => {
        this.setState({
            data: this.filterData(event.filter)
        });
    }

    filterData(filter) {
        const data = allData.slice();
        return filterBy(data, filter);
    }

    render() {
        return (
            <DropDownList
                data={this.state.data}
                textField="text"
                filterable={true}
                onFilterChange={this.filterChange}
            />
        );
    }
}
export default FilterDropDown;