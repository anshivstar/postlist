
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Posts from './components/Posts'
import EditPost from './components/EditPost'

const App = () => {

    return (
        

            <Router>
                < Route path='/' component={Posts} exact/>
                < Route path='/edit' component={EditPost} />
                <Route exact path="/posts/edit/:id" component={EditPost} />
            </Router>
        
    )


}

export default App