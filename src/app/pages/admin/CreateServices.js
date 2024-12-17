import React, { useEffect, useState } from 'react'
import { Box, Grid, Button, Stack, Typography, List, ListItemButton, Collapse, IconButton, TextField, Select, MenuItem, InputLabel } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import TodoCar from './TodoCar';
import TodoClean from './TodoClean';
import TodoPack from './TodoPack';
import TodoAll from './TodoAll';
import { useDispatch, useSelector } from "react-redux";
import { CarType, cleanTypeSubmit, packageTypeSubmit, DeletePackageType, DeleteCarType, DeleteCleanType, getAllCarType, getAllCleanType, getAllPackageType, servicePackage, getAllServicePackage } from "../../store/slices/AuthSlice.js";
import { unwrapResult } from "@reduxjs/toolkit";
import { ToastContainer, toast } from 'react-toastify';
import AppTheme from '../../themes/AppTheme.js'
import { LocalCafeOutlined } from '@mui/icons-material';

const CreateServices = (props) => {

	const { Loading, UserInfo, packagetype, cartype, cleantype, getallcarType, getallcleantype, getallpackagetype, getservicepackage } = useSelector((state) => state?.AUTH)

	const dispatch = useDispatch()
	// const [carType, setcarType] = useState('');
	// const [cleanType, setcleanType] = useState('');
	// const [packageType, setpackageType] = useState('');


	const [carItem, setCarItem] = useState("");
	const [newCarItem, setNewCarItem] = useState([]);



	// Clean car
	const [cleanItem, setCleanItem] = useState("");
	const [newCleanItem, setNewCleanItem] = useState([]);


	// Package car
	const [packItem, setPackItem] = useState("");
	const [newPackItem, setNewPackItem] = useState([]);

	// console.log("getAllcartype data of frontend page", getallcarType?.data?.[0]?.cartype)
	var CarTypeArray = getallcarType?.data?.[0]?.cartype
	var cleanTypeArray = getallcleantype?.data?.[0]?.cleainingType
	var packageTypeArray = getallpackagetype?.data?.[0]?.packagetype





	useEffect(() => {
		dispatch(getAllCarType());
		dispatch(getAllCleanType());
		dispatch(getAllPackageType());
	}, [])


	// const handleCarChange = (event) => {

	// 	setcarType(event.target.value);
	// };
	// const handleCleanChange = (event) => {
	// 	setcleanType(event.target.value);
	// };
	// const handlePackageChange = (event) => {
	// 	setpackageType(event.target.value);
	// };

	const [carType, setCarType] = useState('');
	const [cleanType, setcleanType] = useState('');
	const [packageType, setpackageType] = useState('');
	const [price, setPrice] = useState(null)



	const handleCarChange = (event) => {
		setCarType(event.target.value);
	};
	const handleCleanChange = (event) => {
		setcleanType(event.target.value);
	};
	const handlePackageChange = (event) => {
		setpackageType(event.target.value);
	};


	const changePrice = (event) => {
		setPrice(event.target.value)
	}










	const carEvent = (event) => {
		setCarItem(event.target.value);
	};

	const listCarItem = () => {
		if (!carItem) {
		} else {
			setNewCarItem([...newCarItem, carItem]);
			// console.log("Checking car item", ...newCarItem)
			setCarItem('')
		}
	};
	// delete car item
	const deleteCarItems = (id) => {
		// console.log("deleted");
		setNewCarItem((preValue) => {
			return preValue.filter((arrElem, index) => {
				return index !== id
			});
		});
	};

	const cleanEvent = (clean) => {
		setCleanItem(clean.target.value);
	};
	const listCleanItem = () => {
		if (!cleanItem) {
		} else {
			setNewCleanItem([...newCleanItem, cleanItem]);
			setCleanItem('')
		}
	};
	// delete clean item
	const deleteCleanItems = (id) => {
		// console.log("deleted");
		setNewCleanItem((cleanValue) => {
			return cleanValue.filter((arrElem, index) => {
				return index !== id
			});
		});
	};

	const packEvent = (pack) => {
		setPackItem(pack.target.value);
	};
	const listPackItem = () => {
		if (!packItem) {
		} else {
			setNewPackItem([...newPackItem, packItem]);
			setPackItem('')
		}
	};
	// delete Pack item
	const deletePackItems = (id) => {
		// console.log("deleted");
		setNewPackItem((packValue) => {
			return packValue.filter((arrElem, index) => {
				return index !== id
			});
		});
	};
	// all items
	const [allItem, setAllItem] = useState("");
	const [newAllItem, setNewAllItem] = useState([]);
	const allEvent = (event) => {
		setAllItem(event.target.value);
	};


	const listAllItem = () => {
		if (!allItem) {

		} else {

			setNewAllItem([...newAllItem, allItem]);

			setAllItem('')
		}
	};




	// delete all item
	const deleteAllItems = (id) => {

		setNewAllItem((preValue) => {
			return preValue.filter((arrElem, index) => {
				return index !== id
			});
		});
	};
	// for car type
	// const [openCar, setOpenCar] = React.useState(false);


	// const handleClick1 = () => {
	// 	setOpenCar(!openCar);
	// };
	// // for clean type
	// const [openClean, setOpenClean] = React.useState(false);
	// const handleClick2 = () => {
	// 	setOpenClean(!openClean);
	// };
	// // for packege type
	// const [openPack, setOpenPack] = React.useState(false);
	// const handleClick3 = () => {
	// 	setOpenPack(!openPack);
	// };



	const showAllItems = () => {
		if (carType && cleanType && packageType && newAllItem && price) {

			var planObject = {
				message: newAllItem,
				cleanType: cleanType,
				packageType: packageType,
				cartype: carType,
				price: price
			}

			dispatch(servicePackage(planObject)).then(unwrapResult).then((e) => {
				if (e.status) {
					dispatch(getAllServicePackage())
				}
			})
		}

	}










	// submit=====================================================================================================


	const carTypeSubmit = () => {

		dispatch(CarType(newCarItem))
			.then(unwrapResult)?.then((e) => {
				if (e?.status) {
					dispatch(getAllCarType())
				}

			})



	}
	const cleanTypeSubmitt = () => {
		setNewCleanItem([...newCleanItem]);
		dispatch(cleanTypeSubmit(newCleanItem))?.then(unwrapResult)?.then((e) => {
			if (e?.status) {
				dispatch(getAllCleanType())
			}
		})


	}

	const packageTypeSubmitt = () => {
		setNewPackItem([...newPackItem]);
		dispatch(packageTypeSubmit(newPackItem)).then(unwrapResult).then((res) => {
			if (res.status) {
				dispatch(getAllPackageType())
			}
		})

	}




	//delete the data==================================================
	// console.log("package type data console :", packagetype)
	const carTypeDelete = () => {
		dispatch(DeleteCarType()).then(unwrapResult).then((res) => {
			if (res?.status) {
				dispatch(getAllCarType())
			}
		})
	}
	const cleanTypeDelete = () => {
		dispatch(DeleteCleanType()).then(unwrapResult).then((res) => {
			if (res.status) {
				dispatch(getAllCleanType())
			}
		})

	}

	const packageTypeDelete = () => {
		dispatch(DeletePackageType()).then(unwrapResult).then((res) => {
			if (res.status) {
				dispatch(getAllPackageType())
			}
		})
	}




	return (
		<>
			<Box sx={{ backgroundColor: '#fdfdfd' }}>
				{/* top page */}
				<Grid xs={12} spacing={1} display={{ xs: "block", md: 'flex', sm: 'block', lg: 'flex' }} justifyContent={'space-between'} gap={2} margin={'auto'} height={'50%'}
					sx={{
						backgroundColor: '#ffffff',
					}}>
					{/* car type */}
					<Grid height={'50%'} xs={4}
						sx={{
							boxShadow: '1px 1px 5px -1px #9e9e9e',
							borderRadius: '10px',
							width: { sx: '30%', sm: '90%', md: '90%' },
							p: 1,
							my: 2,
						}}>
						<Typography color="initial" sx={{
							backgroundColor: '#6200ea',
							color: '#fdfdfd',
							textAlign: 'center',
							fontSize: '20px',
							borderRadius: '5px',
							p: '10px',
							m: 1,
							my: 2,
						}}>Car Type</Typography>
						<Box sx={{
							backgroundColor: '#cfd8dc',
							borderRadius: '10px',
							p: 2,
							m: 1,
						}}>
							{/* add items */}
							<Stack spacing={2} justifyContent={'space-between'} alignItems={'center'} direction={'row'} sx={{
								backgroundColor: '#ffffff',
								borderRadius: "5px",
								boxShadow: 0,
								p: '4px',
								px: 1,
							}}>
								<TextField
									value={carItem}
									onChange={carEvent}
									variant='standard'
									size="small"
									fullWidth
									placeholder="Input Car Types..."
								/>
								<IconButton >
									<AddIcon onClick={listCarItem} />
								</IconButton>
							</Stack>
							{/* show items */}
							<Box sx={{ mt: 3 }}>
								<Stack spacing={2} display='flex' alignItems={'center'} justifyContent='space-between' direction={'column'}
									sx={{
										borderRadius: '2px',
										my: 2,
										m: 'auto',
									}}>
									{newCarItem.map((val, index) => {
										return <TodoCar key={index} id={index} onSelect={deleteCarItems} text={val} />
									})}
								</Stack>
							</Box>
							{/* submit button */}
							<Grid xs={12} display={'flex'} justifyContent="space-between">
								<Button sx={{

									backgroundColor: AppTheme.palette.primary.main,
									color: AppTheme.palette.common.white,
									borderRadius: '5px',
									p: '10px',
									px: 4,
									mt: 2,
									'&:hover': {
										backgroundColor: AppTheme.palette.primary.light,
									}
								}} onClick={carTypeDelete}>Clear</Button>
								<Button sx={{

									backgroundColor: AppTheme.palette.primary.main,
									color: AppTheme.palette.common.white,
									borderRadius: '5px',
									p: '10px',
									px: 4,
									mt: 2,
									'&:hover': {
										backgroundColor: AppTheme.palette.primary.light,
									}
								}} onClick={carTypeSubmit}>Submit</Button>
							</Grid>
						</Box>
					</Grid>
					{/* clean type */}
					<Grid height={'50%'} xs={4}
						sx={{
							boxShadow: '1px 1px 5px -1px #9e9e9e',
							borderRadius: '10px',
							width: { sx: '30%', sm: '90%', md: '90%' },
							p: 1,
							my: 2,
						}}>
						<Typography color="initial" sx={{
							backgroundColor: '#6200ea',
							color: '#fdfdfd',
							textAlign: 'center',
							fontSize: '20px',
							borderRadius: '5px',
							p: '10px',
							m: 1,
							my: 2
						}}>Clean Type</Typography>
						<Box sx={{
							backgroundColor: '#cfd8dc',
							borderRadius: '10px',
							p: 2,
							m: 1,
						}}>
							{/* add items */}
							<Stack spacing={2} justifyContent={'space-between'} alignItems={'center'} direction={'row'} sx={{
								backgroundColor: '#ffffff',
								borderRadius: "5px",
								boxShadow: 0,
								p: '4px',
								px: 1,
								heigth: '10px',
							}}>
								<TextField
									value={cleanItem}
									onChange={cleanEvent}
									variant='standard'
									size="small"
									fullWidth
									placeholder="Input Car Types..."
								/>
								<IconButton >
									<AddIcon onClick={listCleanItem} />
								</IconButton>
							</Stack>
							{/* show items */}
							<Box sx={{ mt: 3 }}>
								<Stack spacing={2} display='flex' alignItems={'center'} justifyContent='space-between' direction={'column'}
									sx={{
										borderRadius: '2px',
										my: 2,
										m: 'auto',
									}}>
									{newCleanItem.map((val, index) => {
										return <TodoClean key={index} id={index} onSelect={deleteCleanItems} text={val} />
									})}
								</Stack>
							</Box>
							{/* submit button */}


							<Grid xs={12} display={'flex'} justifyContent="space-between">
								<Button sx={{

									backgroundColor: AppTheme.palette.primary.main,
									color: AppTheme.palette.common.white,
									borderRadius: '5px',
									p: '10px',
									px: 4,
									mt: 2,
									'&:hover': {
										backgroundColor: AppTheme.palette.primary.light,
									}
								}} onClick={cleanTypeDelete}>Clear</Button>
								<Button sx={{

									backgroundColor: AppTheme.palette.primary.main,
									color: AppTheme.palette.common.white,
									borderRadius: '5px',
									p: '10px',
									px: 4,
									mt: 2,
									'&:hover': {
										backgroundColor: AppTheme.palette.primary.light,
									}
								}} onClick={cleanTypeSubmitt}>Submit</Button>
							</Grid>
						</Box>
					</Grid>
					{/* packege type */}
					<Grid height={'50%'} xs={4}
						sx={{
							boxShadow: '1px 1px 5px -1px #9e9e9e',
							borderRadius: '10px',
							width: { sx: '30%', sm: '90%', md: '90%' },
							p: 1,
							my: 2
						}}>
						<Typography color="initial" sx={{
							backgroundColor: '#6200ea',
							color: '#fdfdfd',
							textAlign: 'center',
							fontSize: '20px',
							borderRadius: '5px',
							p: '10px',
							m: 1,
							my: 2
						}}>Package Type</Typography>
						<Box sx={{
							backgroundColor: '#cfd8dc',
							borderRadius: '10px',
							p: 2,
							m: 1,
						}}>
							{/* add items */}
							<Stack spacing={2} justifyContent={'space-between'} alignItems={'center'} direction={'row'} sx={{
								backgroundColor: '#ffffff',
								borderRadius: "5px",
								boxShadow: 0,
								p: '4px',
								px: 1,
							}}>
								<TextField
									value={packItem}
									onChange={packEvent}
									variant='standard'
									size="small"
									fullWidth
									placeholder="Input Car Types..."
								/>
								<IconButton >
									<AddIcon onClick={listPackItem} />
								</IconButton>
							</Stack>
							{/* show items */}
							<Box sx={{ mt: 3 }}>
								<Stack spacing={2} display='flex' alignItems={'center'} justifyContent='space-between' direction={'column'}
									sx={{
										borderRadius: '2px',
										my: 2,
										m: 'auto',
									}}>
									{newPackItem.map((val, index) => {
										return <TodoPack key={index} id={index} onSelect={deletePackItems} text={val} />
									})}
								</Stack>
							</Box>
							{/* submit button */}


							<Grid xs={12} display={'flex'} justifyContent="space-between">
								<Button sx={{
									backgroundColor: AppTheme.palette.primary.main,
									color: AppTheme.palette.common.white,
									borderRadius: '5px',
									p: '10px',
									px: 4,
									mt: 2,
									'&:hover': {
										backgroundColor: AppTheme.palette.primary.light,
									}
								}} onClick={packageTypeDelete}>Clear</Button>
								<Button sx={{

									backgroundColor: AppTheme.palette.primary.main,
									color: AppTheme.palette.common.white,
									borderRadius: '5px',
									p: '10px',
									px: 4,
									mt: 2,
									'&:hover': {
										backgroundColor: AppTheme.palette.primary.light,
									}
								}} onClick={packageTypeSubmitt}>Submit</Button>
							</Grid>
						</Box>
					</Grid>
				</Grid>
				{/* middle page */}
				<Box sx={{
					backgroundColor: '#cfd8dc',
					borderRadius: '10px',
					p: 2,
					mx: 'auto',
					width: { sx: '65%', md: '80%', sm: '100%', xs: '100%' },
				}}>
					<Grid heigth={'20%'} spacing={2} display={{ xs: "block", md: 'flex', sm: 'block', lg: 'flex' }} justifyContent={'space-between'} gap={2} margin={1}>
						{/* car type drop down */}
						<Grid xs={4}
							sx={{
								my: 2,
								boxShadow: '1px 1px 5px -1px #9e9e9e',
								borderRadius: '10px',
								width: { sx: '30%', md: '43%', sm: '100%', xs: '100%', lg: '40%' },
							}}>
							<Box sx={{
								backgroundColor: '#ffffff',
								borderRadius: '10px',
								p: 3,
							}}>
								{/* add items */}

								<InputLabel id="demo-simple-select-label">Car Type</InputLabel>
								<Select
									size='small'
									fullWidth
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									name="Car Type"
									placeholder='Car Type'
									value={carType}
									label="Car Type"
									onChange={handleCarChange}
								>

									{CarTypeArray?.map((e) => (
										<MenuItem key={e} value={e}>{e}</MenuItem>
									))}

									{/* <MenuItem value={CarTypeArray}>{CarTypeArray}</MenuItem>
									<MenuItem value={30}>Thirty</MenuItem> */}
								</Select>
							</Box>
						</Grid>
						{/* clean type drop down */}
						<Grid xs={4} spacing={2}
							sx={{
								my: 2,
								boxShadow: '1px 1px 5px -1px #9e9e9e',
								borderRadius: '10px',
								width: { sx: '30%', md: '43%', sm: '100%', xs: '100%', lg: '40%' },
							}}>
							<Box sx={{
								backgroundColor: '#ffffff',
								borderRadius: '10px',
								p: 3,
							}}>
								{/* add items */}
								<InputLabel id="demo-simple-select-label">Clean Type</InputLabel>
								<Select
									size='small'
									fullWidth
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									name="Clean Type"
									placeholder='Car Type'
									value={cleanType}
									label="Clean Type"
									onChange={handleCleanChange}
								>

									{cleanTypeArray?.map((e) => (
										<MenuItem key={e} value={e}>{e}</MenuItem>
									))}
								</Select>
							</Box>
						</Grid>
						{/* packege type  drop down*/}
						<Grid xs={4} spacing={2}
							sx={{
								my: 2,
								boxShadow: '1px 1px 5px -1px #9e9e9e',
								borderRadius: '10px',
								width: { sx: '30%', md: '43%', sm: '100%', xs: '100%', lg: '40%' },
							}}>
							<Box sx={{
								backgroundColor: '#ffffff',
								borderRadius: '10px',
								p: 3,
							}}>
								{/* add items */}
								<InputLabel id="demo-simple-select-label">Package Type</InputLabel>
								<Select
									size='small'
									fullWidth
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									name="Package Type"
									placeholder='Car Type'
									value={packageType}
									label="Package Type"
									onChange={handlePackageChange}
								>

									{packageTypeArray?.map((e) => (
										<MenuItem key={e} value={e}>{e}</MenuItem>
									))}
								</Select>
							</Box>
						</Grid>
					</Grid>
					{/* type items */}
					<Box sx={{
						backgroundColor: '#ffffff',
						borderRadius: '10px',
						p: 3,
						m: 1,
						mx: 'auto',
						boxShadow: '-1px 1px 5px 1px #9e9e9e',
						width: { sx: '55%', md: '70%', sm: '100%', xs: '100%', lg: '90%' },
					}}>
						{/* add items */}
						<Stack spacing={2} justifyContent={'space-between'} alignItems={'center'} direction={'row'} sx={{
							backgroundColor: '#cfd8dc',
							borderRadius: '5px',
							boxShadow: 0,
							p: '4px',
							px: 1,
						}}>
							<TextField
								value={allItem}
								onChange={allEvent}
								variant='standard'
								size="small"
								placeholder="Input Text Here..."
								fullWidth
							/>
							<IconButton >
								<AddIcon onClick={listAllItem} />
							</IconButton>
						</Stack>
						{/* show items */}
						<Box sx={{ mt: 3 }}>
							<Stack spacing={2} display='flex' alignItems={'center'} justifyContent='space-between' direction={'column'}
								sx={{
									borderRadius: '2px',
									my: 2,
									m: 'auto',
								}}>
								{newAllItem.map((val, index) => {
									return <TodoAll key={index} id={index} onSelect={deleteAllItems} text={val} />
								})}
							</Stack>
						</Box>
						{/* submit button */}
						<Box display='flex' justifyContent="space-between">

							<TextField
								size='small'
								id="outlined-basic"
								label="INR"
								variant="outlined"
								value={price}
								onChange={changePrice}


							/>




							<Button sx={{
								ml: 'auto',
								backgroundColor: '#fdfdfd',
								color: 'inherit',
								borderRadius: '5px',
								p: '10px',
								px: 4,
								mt: 2,
							}} onClick={showAllItems}>Submit</Button>
						</Box>
					</Box>
				</Box>
			</Box >
		</>
	)
}

export default CreateServices