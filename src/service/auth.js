import axios from "./api";

const AuthService = {
	async userRegister(user) {
		const response = await axios.post('/user/create/', {user})
		return response.data
	}
}
export default AuthService