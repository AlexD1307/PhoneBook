import React from "react"

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "",
            name: "",
            num: ""
        }
        this.currentUser = this.currentUser.bind(this)
        this.onChange = this.onChange.bind(this)
        this.getAll = this.getAll.bind(this)
        this.get = this.get.bind(this)
        this.post = this.post.bind(this)
        this.put = this.put.bind(this)
        this.del = this.del.bind(this)
        this.remove = this.remove.bind(this)
    }

    currentUser(id, name, num) {
        this.setState(({
            id: id,
            name: name,
            num: num
        }))
    }

    onChange(event) {
        let {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    remove(id) {
        this.props.del(id)
        this.getAll()
    }

    getAll() {
        this.props.getAll()
    }

    get() {
        this.props.get(this.state.id)
    }
    post() {
        this.props.post(this.state.name, this.state.num)
    }
    put() {
        this.props.put(this.state.id, this.state.name, this.state.num)
    }
    del() {
        this.props.del(this.state.id)
    }

    render() {
        return (
            <div>
                <div>
                    Contact id:<input type="text" name="id" value={this.state.id} onChange={this.onChange} />
                    <br />
                    Contact name:<input type="text" name="name" value={this.state.name} onChange={this.onChange} />
                    <br />
                    Contact number:<input type="number" name="num" value={this.state.num} onChange={this.onChange} />
                </div>
                <div>
                    <button type="button" onClick={this.getAll}>Contact list</button>
                    <button type="button" onClick={this.get}>Contact info</button>
                    <button type="button" onClick={this.post} >Add contact</button>
                    <button type="button" onClick={this.put}>Edit contact</button>
                    <button type="button" onClick={this.del}>Remove contact</button>
                    <div>{this.props.status}</div>
                    <div>{this.props.header}</div>
                    {
                        this.props.data.map(e => <div key={e._id}>
                            <p onClick={() => { this.currentUser(e._id, e.name, e.num) }}>Contact Id: {e._id} name: {e.name} number: {e.num}</p>
                            <button onClick={() => this.remove(e._id)}>Remove</button>
                        </div>)
                    }
                </div>
            </div>
        )
    }
}

export default App