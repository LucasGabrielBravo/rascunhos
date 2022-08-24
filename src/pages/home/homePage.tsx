import { motion } from 'framer-motion';
import React from 'react';
import { FaChevronUp, FaHome, FaShoppingCart } from 'react-icons/fa';
import { MdAttachment, MdDelete, MdDownload, MdEdit, MdSort, MdThumbUpOffAlt } from 'react-icons/md';

const HomePage: React.FC = () => {
	const [isOpen, setIsOpen] = React.useState(true);
	return (
		<div className='flex flex-col h-screen'>
			<div className='h-20 w-full bg-gradient-to-br from-primary to-primary-focus shadow-sm drop-shadow-sm'>
				<div className='text-3xl h-full flex items-center px-4 font-bold text-gray-50 drop-shadow'>
					VejaPixel
				</div>
			</div>
			<div className='flex flex-row flex-1 bg-gradient-to-br from-base-300/50 to-base-200/50'>
				<div className='w-72 bg-slate-50 shadow-lg'>
					<MenuBtn />
					<div className={`flex flex-col transition-all duration-500 ${isOpen && 'bg-gradient-to-br from-primary/20 to-primary-focus/20'}`}>						
						<button className={`flex flex-row text-gray-600 items-center gap-x-2 py-4 px-6 border-l-2 ${isOpen && 'bg-gradient-to-br from-primary/20 to-primary-focus/20 border-primary-focus text-primary-focus'}`} onClick={() => setIsOpen(!isOpen)}>
							<FaShoppingCart className='h-6 w-6' />
							<span>Order and Invoice</span>
							<div className={`ml-auto transition-all duration-500 ${isOpen && 'rotate-180'}`}>
								<FaChevronUp />
							</div>
						</button>

						<motion.div
							variants={{
								hidden: {
									opacity: 0,
									height: 0,
								},
								visible: {
									opacity: 1,
									height: 'auto',
								}
							}}
							initial='hidden'
							animate={isOpen ? 'visible' : 'hidden'}
						>
							<ul>
								<li className='flex flex-row text-gray-600 items-center gap-x-2 py-4 px-6'>									
									<span>Coisa 1</span>
								</li>
								<li className='flex flex-row text-gray-600 items-center gap-x-2 py-4 px-6'>									
									<span>Coisa 2</span>
								</li>
								<li className='flex flex-row text-gray-600 items-center gap-x-2 py-4 px-6'>									
									<span>Coisa 3</span>
								</li>
								<li className='flex flex-row text-gray-600 items-center gap-x-2 py-4 px-6'>									
									<span>Coisa 4</span>
								</li>
								<li className='flex flex-row text-gray-600 items-center gap-x-2 py-4 px-6'>									
									<span>Coisa 5</span>
								</li>
							</ul>
						</motion.div>
					</div>
					<MenuBtn />
					<MenuBtn />
					<MenuBtn />
					<MenuBtn />
					<MenuBtn />
					<MenuBtn />
					<MenuBtn />
				</div>
				<div className='flex flex-col p-8 flex-1 gap-4'>
					<div className='flex flex-row justify-between items-center w-full'>
						<span className='text-2xl text-gray-800 font-medium drop-shadow-md'>Vendor Invoce</span>

						<div className='flex flex-row gap-x-2'>
							<button className='p-2 bg-slate-50 rounded-sm shadow-md text-gray-600'><MdDownload className='w-5 h-5' /></button>
							<button className='p-2 bg-slate-50 rounded-sm shadow-md text-gray-600'><MdAttachment className='w-5 h-5' /></button>
						</div>
					</div>

					<div className='flex flex-col flex-1 items-stretch bg-slate-50 shadow-lg drop-shadow-md rounded-lg p-6 gap-y-4'>
						<div className='flex flex-row justify-between items-center'>
							<span className='font-bold text-xl'>US Foods</span>
							<button className='inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-secondary-focus bg-secondary/20 hover:bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-focus'>
								<MdEdit />
								<span>Editar</span>
							</button>
						</div>

						<div className='flex flex-row gap-x-16 border-b p-8 border-gray-300'>
							<div className=''>
								<div className='flex flex-row gap-x-8'>
									<span className='text-base text-gray-500'>Review date</span>
									<span className='text-base font-medium text-gray-800'>23/08/2022</span>
								</div>
								<div className='flex flex-row gap-x-8'>
									<span className='text-base text-gray-500'>Invoice date</span>
									<span className='text-base font-medium text-gray-800'>R$ 575.20</span>
								</div>
							</div>

							<span className='h-full border-r border-gray-300' />

							<div>
								<div className='flex flex-row gap-x-8'>
									<span className='text-base text-gray-500'>Review date</span>
									<span className='text-base font-medium text-gray-800'>23/08/2022</span>
								</div>
								<div className='flex flex-row gap-x-8'>
									<span className='text-base text-gray-500'>Invoice date</span>
									<span className='text-base font-medium text-gray-800'>R$ 575.20</span>
								</div>
							</div>

							<span className='h-full border-r border-gray-300' />

							<div>
								<div className='flex flex-row gap-x-8'>
									<span className='text-base text-gray-500'>Review date</span>
									<span className='text-base font-medium text-gray-800'>23/08/2022</span>
								</div>
								<div className='flex flex-row gap-x-8'>
									<span className='text-base text-gray-500'>Invoice date</span>
									<span className='text-base font-medium text-gray-800'>R$ 575.20</span>
								</div>
							</div>
						</div>

						<div className='grid grid-cols-12'>
							<div className='pl-2 py-2 bg-secondary/10'>
								<MdSort />
							</div>
							<div className='py-2 bg-secondary/10'>
								<span>SKU</span>
							</div>
							<div className='py-2 col-span-6 bg-secondary/10'>
								<span>ITEMS</span>
							</div>
							<div className='py-2 col-span-1 bg-secondary/10'>
								<span>QUANTITY</span>
							</div>
							<div className='py-2 col-span-1 bg-secondary/10'>
								<span>PRICE</span>
							</div>
							<div className='py-2 col-span-1 bg-secondary/10'>
								<span>AMMOUNT</span>
							</div>
							<div className='py-2 bg-secondary/10'></div>

							<Damy />
							<Damy />
							<Damy />
							<Damy />
							<Damy />
						</div>

						<span className='border-b border-gray-300 w-full' />

						<div className='mt-auto flex flex-row justify-between items-end'>
							<div className='flex flex-row gap-x-2'>
								<button className='inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'>
									Button 01
								</button>

								<button className='inline-flex items-center px-12 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-primary-content bg-gradient-to-br from-primary to-primary-focus  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'>
									Button 02
								</button>

								<button className='inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'>
									Button 03
								</button>

								<button className='inline-flex items-center px-3 py-2 border border-gray-300 shadow-sm text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'>
									Button 04
								</button>
							</div>

							<div className='ml-auto min-w-max'>
								<div className='flex flex-row gap-x-8'>
									<span className='text-base text-gray-500 w-2/3'>Sub total</span>
									<span className='text-sm font-medium text-gray-800 min-w-max'>R$ 1029.10</span>
								</div>
								<div className='flex flex-row gap-x-8'>
									<span className='text-base text-gray-500 w-2/3'>Total</span>
									<span className='text-lg font-bold text-gray-800 min-w-max'>R$ 1029.10</span>
								</div>
							</div>
						</div>
					</div>

					<div className='flex flex-row items-center justify-end gap-x-4'>
						<button className='flex flex-row justify-center items-center gap-x-2 bg-gray-50 border border-orange-500 px-4 py-2 text-orange-500 rounded shadow-md'>
							<MdDelete />
							<span>Delete Invoice</span>
						</button>
						<button className='flex flex-row justify-center items-center gap-x-2 bg-gray-50 border border-green-800 px-4 py-2 text-green-800 rounded shadow-md'>
							<MdThumbUpOffAlt />
							<span>Approve Invoice</span>
						</button>
						<button className='flex flex-row justify-center items-center gap-x-2 text-gray-50 bg-gradient-to-br from-green-700 to-green-800 px-4 py-2 rounded shadow-md'>
							<MdThumbUpOffAlt />
							<span>Approve and Next</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

const MenuBtn: React.FC = () => {
	return (
		<div className='flex flex-row text-gray-600 items-center gap-x-2 py-4 px-6'>
			<FaHome className='h-6 w-6' />
			<span>Home</span>
		</div>
	)
}

const Damy: React.FC = () => {
	return (
		<div className='col-span-full odd:bg-gray-200/50'>
			<div className='grid grid-cols-12'>
				<div className='pl-3 py-3'>
					01
				</div>
				<div className='py-3'>
					-
				</div>
				<div className='py-3 col-span-6'>
					<span className='text-primary'>
						Suco de tomate com adoçante
					</span>
				</div>
				<div className='py-3 col-span-1'>
					<span>QUANTITY</span>
				</div>
				<div className='py-3 col-span-1'>
					<span>PRICE</span>
				</div>
				<div className='py-3 col-span-1'>
					<span>AMMOUNT</span>
				</div>
				<div className='py-3 gap-x-4 flex'>
					<button className='p-2 from-orange-100 to-orange-200 shadow-sm  bg-gradient-to-br text-orange-300 rounded-md'><MdDelete className='w-5 h-5' /></button>
					<button className='p-2 from-secondary/40 to-secondary-focus/60 shadow-sm  bg-gradient-to-br text-secondary rounded-md'><MdEdit className='w-5 h-5' /></button>
				</div>
			</div>
		</div>
	)
}

export default HomePage;