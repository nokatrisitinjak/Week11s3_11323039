import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props);

        this.state = {
            provinsis: [
                { id: 17, provinsi: 'Nokatri' }
            ],
            newID: "",
            newProvinsi: "" 
        }

        this.setId = this.setId.bind(this);
        this.setProvinsi = this.setProvinsi.bind(this);
        this.tambahData = this.tambahData.bind(this);
        this.renderTableData = this.renderTableData.bind(this);
    }

    setId(e) {
        this.setState({ newID: parseInt(e.target.value) }); 
    }

    setProvinsi(e) {
        this.setState({ newProvinsi: e.target.value });
    }

    tambahData(e) {
        const { newID, newProvinsi } = this.state;
        const newProvinsiData = { id: newID, provinsi: newProvinsi };
        this.setState(prevState => ({
            provinsis: [...prevState.provinsis, newProvinsiData],
            newID: "",
            newProvinsi: ""
        }));
    }

    renderTableData() {
        return this.state.provinsis.map((provinsiData, index) => {
            const { id,provinsi } = provinsiData;
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{provinsi}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div className="body">
                <h1>{this.props.judul}</h1>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>KELUARGA</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>

                <div style={styles.container}>
                    ID: <input type="text" name="id" value={this.state.newID} onChange={this.setId} />
                    &nbsp;&nbsp;
                    KELUARGA: <input type="text" name="provinsi" value={this.state.newProvinsi} onChange={this.setProvinsi} />
                    &nbsp;
                    <button onClick={this.tambahData}>Tambah</button>
                </div>

                <div style={styles.container}>
                    Baru saja ditambahkan:
                    <br />ID: <span>{this.state.provinsis[this.state.provinsis.length - 1]?.id}</span>
                    <br />KELUARGA: <span>{this.state.provinsis[this.state.provinsis.length - 1]?.provinsi}</span>
                </div>
            </div>
        )
    }
}

const styles = {
    container: {
        border: '1px solid black',
        padding: '8px',
        marginTop: '8px',
    }
}

export default Table;