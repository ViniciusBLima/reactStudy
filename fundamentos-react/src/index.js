import ReactDOM from 'react-dom';
import React from 'react'

import Primeiro from './components/basicos/primeiroComponente'

const mainElement = document.getElementById('root')
ReactDOM.render(<div>
                    <Primeiro></Primeiro>
                </div>,
                mainElement)