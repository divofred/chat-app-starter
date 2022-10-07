import Head from 'next/head';
import { MDBBtn } from 'mdb-react-ui-kit';

export default function App() {
	const style = {
		display: 'flex !important',
		justifyContent: 'center !important',
		alignItems: 'center !important',
		width: '50% !important',
		height: '100vh !important',
	};
	return (
		<>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					height: '100vh',
				}}
			>
				<form>
					<h1>Chat Application</h1>
					<input
						type="text"
						class="form-control form-control-lg"
						id="username"
						placeholder="Enter Username"
					></input>
					<MDBBtn
						type="submit"
						block
						style={{
							backgroundColor: '#e7653d',
							margin: '10px 0 0 0',
						}}
					>
						Join Chat
					</MDBBtn>
				</form>
			</div>
		</>
	);
}
