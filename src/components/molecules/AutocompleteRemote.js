import React, { Component } from 'react';
import Autocomplete from 'react-autocomplete';
import Tooltip from 'rc-tooltip';
import '../../styles/rc-tooltip.css';

const notValidatedColor = 'red';
const validatedColor = 'green';

class AutocompleteRemote extends Component {
    constructor(props, context) {
        super(props, context);
        // Set initial State
        this.state = {
            value: props.defaultValue ? props.defaultValue : '',
            autocompleteData: [],
            isValidated: props.isValid,
            inputProps: { onFocus: this.props.onFocus, style: { border: '1px solid ' + (props.isValid ? validatedColor : notValidatedColor) } },
        };
        this.onChange = this.onChange.bind(this);
        this.onSelect = this.onSelect.bind(this);
        this.renderItem = this.renderItem.bind(this);
        this.retrieveDataAsynchronously = this.retrieveDataAsynchronously.bind(this);
    }
    retrieveDataAsynchronously(searchText) {
        let _this = this;
        fetch(this.props.url + searchText + '&' + (this.props.addParameter ? this.props.addParameter : ''))
            .then(response => response.json())
            .then(data => {
                var res = this.props.responseObj ? data[this.props.responseObj] : data;
                var arr = this.props.resultsObj ? res[this.props.resultsObj] : res;
                var filtered = this.props.filter && this.props.filter.type === 'startsWith' ? arr.filter(item => item[this.props.filter.property].startsWith(this.props.filter.value)) : arr;
                _this.setState({
                    autocompleteData: filtered,
                });
            });
    }
    onChange(e) {
        var value = e.target.value;
        this.setState({
            value: value,
        });
        this.retrieveDataAsynchronously(value);
        if (this.props.onKeypress) this.props.onKeypress(e);
        //if(value==''){
        this.setState({
            isValidated: false,
            inputProps: Object.assign(this.state.inputProps, { style: { border: '1px solid ' + notValidatedColor } }),
        });
        //}
    }
    onSelect(val, item) {
        this.setState({
            value: val,
            isValidated: true,
            inputProps: Object.assign(this.state.inputProps, { style: { border: '1px solid ' + validatedColor } }),
        });
        this.props.onSelect(item);
    }

    renderItem(item, isHighlighted) {
        return (
            <Tooltip
                key={item.id}
                placement="left"
                trigger={['hover']}
                overlay={
                    <div style={{ width: '300px' }}>
                        <div>{item.id ? item.id : ''}</div>
                    </div>
                }>
                <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                    <b>{item.name.english}</b>
                </div>
            </Tooltip>
        );
    }
    renderInput(props) {
        return <input {...props} />;
    }

    render() {
        return (
            <div style={this.props.style}>
                <div
                    style={{
                        display: 'block',
                        fontSize: '10px',
                        padding: '0px',
                        marginBottom: '-5px',
                        position: 'relative',
                    }}>
                    Please write the name of the crop
                </div>
                <Autocomplete
                    getItemValue={this.props.getItemValue}
                    items={this.state.autocompleteData}
                    renderItem={this.renderItem}
                    renderInput={this.renderInput}
                    value={this.state.value}
                    onChange={this.onChange}
                    onSelect={this.onSelect}
                    inputProps={this.state.inputProps}
                />
            </div>
        );
    }
}
export default AutocompleteRemote;
