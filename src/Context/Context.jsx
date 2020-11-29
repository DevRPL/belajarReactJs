import { React, Component, createContext } from 'react';
import ActionType from '../Redux/reducer/GlobalActionType';

const RootContext = createContext();
// PROVIDER
const Provider = RootContext.Provider;

    const GlobalProvider = (Children) => {
        return(
            class ParentComponent extends Component {
                state = {
                    total: 0
                }

                dispatch = (action) => {
                    const totalOrder = this.state.total;
                    if (action.type === ActionType.PLUSORDER) {
                        return this.setState({
                            total: totalOrder + 1
                        })
                    } else if (action.type === ActionType.MINUSORDER) {
                        let total = 0;
                        if (totalOrder > 0) {
                            total = totalOrder - 1;
                        } 
                        return this.setState({
                            total: total
                        })
                    }
                }
                
                render() {
                    return(
                        <Provider value={
                            {
                                state: this.state,
                                dispatch: this.dispatch
                            }
                        }>
                            <Children {...this.props}/>
                        </Provider>
                    )
                }
            }
        )
    }

export default GlobalProvider;

// CONSUMER

const Consumer = RootContext.Consumer;

export const GlobalConsumer = (Children) => {
    return (
        class ParentConsumer extends Component {
            render() {
                return (
                    <Consumer>
                    {
                        value => {
                            return (
                                // ... => COPY
                                <Children {... this.props } {...value } />
                            )
                        }
                    
                    }
                    </Consumer>
                )
            }
        }
    )
}