import { createSignal, Component } from 'solid-js'
import { render } from 'solid-js/web'

const App: Component = () => {
	const [count, setCount] = createSignal(0)

	return (
		<>
			<h1>{count()}</h1>
			<button onClick={() => setCount(count() + 1)}>Increment</button>
		</>
	)
}

const root = document.getElementById('app') as HTMLElement
render(() => <App />, root)
