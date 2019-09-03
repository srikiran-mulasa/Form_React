import React, { Component } from 'react';
import { Card, Table } from 'react-bootstrap';

class RegistrationTable extends Component {

    render() {
        const items = this.props.items;
        return (
            <Card body>
                <Table responsive>

                    {items.map(item => {
                        return (
                            <tr>
                                <td>{item.fname} {item.lname}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.address1}, {item.address2}, {item.city},{item.sstate},{item.pin}</td>
                            </tr>
                        );
                    })}
                </Table>
            </Card>
        );
    }
    // state = {}
    // render() {

    //     console.log("props from parent", this.props.dataFromParent)
    //     const dataTable = ( this.props.dataFromParent.length > 0 && this.props.dataFromParent.map((v) => {
    //         return (
    //             <Table>
    //                 <tr>
    //                 <td>{v.fname}</td>
    //                 <td>{v.lname}</td>
    //                 <td>{v.phone}</td>
    //                 <td>{v.email}</td>
    //                 <td>{v.address1}</td>
    //                 <td>{v.address2}</td>
    //                 <td>{v.city}</td>
    //                 <td>{v.state}</td>
    //                 <td>{v.pin}</td>
    //                 </tr>
    //             </Table>
    //         );
    //     }))

    //     return (
    //         <Card body>
    //             {dataTable}
    //         </Card>
    //     );
    // }
}

export default RegistrationTable;