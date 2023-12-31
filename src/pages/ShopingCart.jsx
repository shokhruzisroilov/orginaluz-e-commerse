import { styles } from '../util/style'
import { Link, useParams } from 'react-router-dom'
import { AddToCart } from '../components'
import visa from '../assets/svg/visa.svg'
import payPal from '../assets/svg/pay-pal.svg'
import masterCard from '../assets/svg/master-card.svg'
import Slider from '../components/Slider'
import { productsData } from '../util/productsData'

function ShopingCart() {
	let { postId } = useParams()
	console.log(postId)
	const dataFilter = productsData.filter(item => {
		if (item.id == postId) {
			return item
		}
	})

	return (
		dataFilter &&
		dataFilter.map((item, id) => {
			return (
				<div className='w-full my-[75px] bg-mainBg' key={item.id}>
					<div
						className={`${styles.container} lg:flex items-center  gap-y-20 gap-x-[120px] pt-14 overflow-hidden`}
					>
						<div className='max-w-[600px]'>
							<Slider image={item.image} />
						</div>
						<div className='mt-10 lg:0'>
							<h3 className='text-textColor text-[18px] font-normal '>
								{item.type}
							</h3>
							<h2 className='text-textColor sm:text-[28px] text-[24px] font-[400] leading-normal'>
								{item.name}
							</h2>
							<p className='max-w-[500px] text-textColor text-[16px] font-light py-2'>
								{item.descreption}
							</p>
							<p>Cost: {item.price}</p>
							<form className='mt-6'>
								<p className=' text-textColor text-[16px] font-normal'>
									Color:
								</p>
								<select className='xs:w-[348px] w-[250px] bg-white py-3 px-4 outline-none mt-2 border-2 rounded border-gray-400'>
									<option value=''>Blue</option>
									<option value=''>Black</option>
									<option value=''>Withe</option>
									<option value=''>Gray</option>
								</select>
								<div className='py-10 flex col-x-10'>
									<input
										type='number'
										placeholder='1'
										className='xs:max-w-[180px] max-w-[80px] border-2 rounded border-gray-400  py-3 px-4 outline-none mr-6'
									/>
									<div className=''>
										<Link
											href='#'
											className='flex items-center justify-center rounded-md border border-transparent bg-orange-400 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-300'
										>
											Add to cart
										</Link>
									</div>
								</div>
							</form>
							<div className='flex flex-wrap gap-6 cursor-pointer'>
								<img src={visa} alt='visa' />
								<img src={payPal} alt='pay-pal' />
								<img src={masterCard} alt='master-cart' />
							</div>
						</div>
					</div>
					<AddToCart />
				</div>
			)
		})
	)
}

export default ShopingCart
