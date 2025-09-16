import axios from "axios";
import { useState } from "react";

function ProductCreate(){
	const [form, setForm] = useState({
		name: '',
		price: '',
		description: '',
		image: null
	});

	const [message, setMessage] = useState('');
	const [error, setError] = useState('');

	const handleChange = (e) => {
		if (e.target.name === 'image') {
			setForm({ ...form, image: e.target.files[0]});
		}else{
			setForm({...form, [e.target.name]: e.target.value});
		}
	};

	const handleSubmit = async (e) =>{
		e.preventDefault();

		const formData = new FormData();
		formData.append('name', form.name);
		formData.append('price', form.price);
		formData.append('description',form.description);
		if (form.image) {
			formData.append('image',form.image);
		}

		try {
			await axios.post('http://127.0.0.1:8000/api/products',formData,{
				headers: {
					'Content-Type': 'multipart/form-data',
				}
			});
			setMessage("Tạo sản phẩm thành công");
			setError('');
		} catch (error) {
			console.log(error);
			setError('Lỗi khi tạo sản phẩm!');
			setMessage('');
		}
	};

	return(
		<div className="flex justify-center mt-4">
			<form className="border border-sm border-black p-4" action="" onSubmit={handleSubmit}>
				<h2 className="text-center mb-2">Thêm sản phẩm</h2>

				{message && <p className="text-green-600 font-semibold mb-2">{message}</p>}
				{error && <p className="text-red-600 font-semibold mb-2">{error}</p>}

				<input className="border border-sm border-black w-full" type="text" name="name" placeholder="Tên sản phẩm" onChange={handleChange} required/><br />
				<input className="border border-sm border-black w-full mt-2" type="number" name="price" placeholder="Gía sản phẩm" onChange={handleChange} required/><br />
				<textarea className="border border-sm border-black w-full mt-2" name="description" placeholder="Mô tả" onChange={handleChange} id=""></textarea><br />
				<input type="file" name="image" accept="image/*" onChange={handleChange} /><br />
				<button className="mt-2 rounded-sm bg-green-600 p-4 w-full text-white font-bold" type="submit">Tạo</button>
			</form>
		</div>
	);
}

export default ProductCreate;