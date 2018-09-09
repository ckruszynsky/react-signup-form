import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const Input = ({ name, type, placeholder }) => (
	<div className="input">
		<input type={type || 'text'} />
		<label htmlFor={name} />
	</div>
);
const SignupForm = ({ className, onSubmit }) => (
	<div className={className}>
		<h1>Registration Form</h1>
		<form>
			<Input name="name" placeholder="John Doe" />
			<Input name="username" type="email" placeholder="jdoe@somewhere.com" />
			<Input name="password" type="password" placeholder="Password" />
			<button type="button" onClick={onSubmit}>
				Register <i className="fa fa-fw fa-chevron-right" />
			</button>
		</form>
	</div>
);

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			mounted: false
		};
	}

	componentDidMount = () => {
		this.setState({ mounted: true });
	};

	handleSubmit = e => {
		this.setState({ mounted: false });
		e.preventDefault();
	};

	render() {
		var child;
		if (this.state.mounted) {
			child = <SignupForm className="Modal" onSubmit={this.handleSubmit} />;
		}

		return (
			<div className="App">
				<ReactCSSTransitionGroup
					transitionName="example"
					transitionEnterTimeout={500}
					transitionLeaveTimeout={300}
				>
					{child}
				</ReactCSSTransitionGroup>
			</div>
		);
	}
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
