import { Component } from "react"

class Button extends Component {
    state = {}
    constructor(props) {
        super(props)
        console.log('constructor', props);
    }

    componentDidMount() {
        console.log('componentDiMount');
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('component did update', prevProps, prevState);
    }

    componentWillUnmount() {
        console.log('desmontando componente', this.props, this.state);
    }

    render() {
        console.log('ejecutando metodo render de button');
    return (
        <button onClick={() => this.setState({props: 1})} >
        Enviar
        </button>
    )

    } 
}

class App extends Component {
    state = {
        valor: 3
    }
    render() {
        console.log(this.state);
        return (
            <div>
               <p>Hola mundo</p>  
               {this.state.valor === 3
               ? <Button chanchito='felizzz' /> 
            : null }
               <button onClick={() => this.setState({ valor: 2})}>
                   Enviar en App
               </button>
            </div>
        )
    }
}

export default App