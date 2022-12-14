/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from "react"
import {useRouter} from "next/router"
// import Image from "next/image";
import {Button, Typography, message, Image} from "antd"
import {GoogleOutlined, WindowsFilled, AppleFilled} from "@ant-design/icons"
import {googleProvider, microsoftProvider, appleProvider} from "../config/authMethods"
import SocialMediaAuth from "../service/auth"
import {auth} from "../config/firebase-config"
import {db} from "../config/firebase-config"
import {useAuth} from "../contexts/AuthContext"
// import { usePaymentConfirm } from "../contexts/PaymentContext";

import {useGoogleReCaptcha} from "react-google-recaptcha-v3"
import {activeProductState} from "../atoms/productAtom"
import {useRecoilValue, useRecoilState} from "recoil"

const {Title, Text} = Typography

const Login = () => {
	const router = useRouter()
	const {user} = useAuth()
	const {type, product} = router.query
	const {executeRecaptcha} = useGoogleReCaptcha()
	// const paid = usePaymentConfirm();
	// const [activeProduct, setActiveProduct] = useState();
	const [activeProduct, setActiveProduct] = useRecoilState(activeProductState)

	const fetchProducts = async (user) => {
		if (user) {
			const res = await db.collection("Products").where("owner", "==", user.uid).get()
			setActiveProduct(res.docs.map((doc) => ({id: doc.id, ...doc.data()}))[0])
      const product = res.docs.map((doc) => ({id: doc.id, ...doc.data()}))[0]
      return product;
		}
	}

  useEffect(() => {
    fetchProducts(user);
  }, [user])

	useEffect(() => {
		if (user && activeProduct) {
			router.push(`/${activeProduct.slug}/dashboard`)
		}
	}, [activeProduct])

	// const handleOnClick = (provider) => {
	//   try {
	//     auth.signInWithPopup(provider).then(async (res) => {
	//       var user = res.user;
	//       console.log(res);
	//       // Adding user to a product team
	//       if (type && product) {
	//         await db.collection("teams").add({
	//           user: {
	//             uid: user.uid,
	//             email: user.email,
	//             name: user.displayName,
	//             avatar: user.photoURL,
	//           },
	//           expiry: "unlimited",
	//           type: type,
	//           product_id: product,
	//         });
	//       }

	//       // Checking if user is new
	//       if (res.additionalUserInfo.isNewUser) {
	//         // if user has a company custom email
	//         if (!/@gmail.com\s*$/.test(user.email)) {
	//           router.push("/enterprise-contact");
	//         } else {
	//           message.success({
	//             content: "Successfully logged in",
	//             className: "custom-message",
	//           });
	//           router.push("/loginsuccess");
	//         }
	//       } else {
	//         message.success({
	//           content: "Successfully logged in",
	//           className: "custom-message",
	//         });
	//         router.push("/dashboard");
	//       }
	//     });
	//   } catch (error) {
	//     console.log(error.message);
	//     message.error({
	//       content: "An error occurred while trying to log you in",
	//       className: "custom-message",
	//     });
	//   }
	// };

	const handleOnClick = async (provider) => {
		try {
			auth.signInWithPopup(provider).then(async (res) => {
				var user = res.user

				await fetchProducts(user).then(async (product) => {
          console.log(product)
					if (res.additionalUserInfo.isNewUser) {
						// if user has a company custom email
						if (!/@relentlesspersistenceinc.com\s*$/.test(user.email)) {
							message.error({
								content: "Sorry, you can't login at this moment.",
								className: "custom-message",
							})
							await auth.signOut()
							router.push("https://www.sprintzero.app/")
						} else {
							message.success({
								content: "Successfully logged in",
								className: "custom-message",
							})
							router.push("/loginsuccess")
						}
					} else {
						message.success({
							content: "Successfully logged in",
							className: "custom-message",
						})
						router.push(`/${product.slug}/dashboard`)
					}
				})

				// Checking if user is new
			})
		} catch (error) {
			console.log(error.message)
			message.error({
				content: "An error occurred while trying to log you in",
				className: "custom-message",
			})
		}
	}

	return (
		<>
			<div className="mb-4 flex items-center justify-center">
				<div>
					<Title level={1} style={{fontWeight: "normal"}}>
						Authenticate Yourself Before You Wreck Yourself
					</Title>
					<Text className="text-left text-xl">Select a provider to create your account</Text>
				</div>
			</div>

			<div className="mt-10 flex flex-col items-center justify-center space-y-[24px]">
				<Button
					className="flex h-[54px] w-[345px] items-center justify-start space-x-4 rounded-[10px] border-black bg-white text-[20px] font-semibold"
					onClick={() => handleOnClick(appleProvider)}
					icon={<AppleFilled style={{fontSize: "20px", marginTop: "-5px"}} />}
				>
					<p>Sign in with Apple</p>
				</Button>
				<Button
					className="flex h-[54px] w-[345px] items-center justify-start space-x-4 rounded-[10px] border-black bg-white text-[20px] font-semibold"
					onClick={() => handleOnClick(googleProvider)}
				>
					<Image src="/images/googleIcon.png" alt="google" width={23} height={23} preview={false} />
					<p>Sign in with Google</p>
				</Button>

				<Button
					className="flex h-[54px] w-[345px] items-center justify-start space-x-4 rounded-[10px] border-black bg-white text-[20px] font-semibold"
					onClick={() => handleOnClick(microsoftProvider)}
				>
					<Image src="/images/microsoftIcon.png" alt="microsoft" width={24} height={24} preview={false} />
					<p>Sign in with Microsoft</p>
				</Button>
			</div>
			<div className="absolute bottom-20 lg:right-80">
				<Button onClick={() => router.push("/")}>Cancel</Button>
			</div>
		</>
	)
}

export default Login
