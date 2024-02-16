function F({ setState }) {
	return <input type="text" onChange={e => setState({ said: e.target.value })} />;
}

export default F;