import React, { Component } from 'react'
import Cita from './Cita'

import PropTypes from 'prop-types'

export default class ListaCitas extends Component {
    render() {
        const citas = this.props.citas

        const titulo = Object.keys(citas).length === 0 ? 'No hay citas!' : 'Citas'

        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title text-center">{titulo}</h2>
                    <div className="lista-citas">
                        {Object.keys(this.props.citas).map(cita => (
                            <Cita key={cita} info={this.props.citas[cita]} eliminarCita={this.props.eliminarCita}/>
                        ))}
                    </div>
                </div>
            </div> 
        )
    }
}

ListaCitas.propTypes = {
    citas : PropTypes.array.isRequired,
    eliminarCita : PropTypes.func.isRequired
}
