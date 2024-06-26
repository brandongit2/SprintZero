/* Specifically for use with react-hook-form. Use Antd's plain <Input /> otherwise. */

import {Input} from "antd"
import {AnimatePresence, motion} from "framer-motion"
import {useController} from "react-hook-form"

import type {InputProps as AntdInputProps} from "antd"
import type {ReactElement} from "react"
import type {UseControllerProps} from "react-hook-form"
import type {Promisable, SetRequired, SetReturnType} from "type-fest"

const formatAsNumber = (str: string) => {
	let newStr = str.replace(/[^0-9.]/g, ``)
	if (newStr.includes(`.`)) {
		const [integer, fractional] = newStr.split(`.`)
		newStr = `${integer ?? ``}.${fractional ?? ``}`
	}
	return `${newStr}`
}

const formatAsInteger = (str: string) => {
	let newStr = str.replace(/[^0-9]/g, ``)
	return parseInt(newStr)
}

const formatAsCurrency = (str: string) => {
	let newStr = str.replace(/[^0-9.]/g, ``)
	if (newStr.includes(`.`)) {
		const [dollars, cents] = newStr.split(`.`)
		newStr = `${dollars ?? ``}.${cents?.slice(0, 2) ?? ``}`
	}
	return newStr
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FieldValues = Record<string, any>
type OnChange = Exclude<AntdInputProps[`onChange`], undefined>
export type RhfInputProps<TFieldValues extends FieldValues> = Omit<
	AntdInputProps,
	`ref` | `defaultValue` | `onChange`
> &
	SetRequired<UseControllerProps<TFieldValues>, `control`> & {
		number?: boolean | `integer` | `currency`
		onChange?: SetReturnType<OnChange, Promisable<ReturnType<OnChange>>> | undefined
	}

const RhfInput = <TFieldValues extends FieldValues = FieldValues>({
	control,
	name,
	rules,
	shouldUnregister,
	defaultValue,
	number,
	onChange,
	...props
}: RhfInputProps<TFieldValues>): ReactElement | null => {
	const {
		field,
		fieldState: {error},
	} = useController({control, name, rules, shouldUnregister, defaultValue})

	const format = (str: string) => {
		if (str.length === 0) return null
		if (number === true) return formatAsNumber(str)
		if (number === `integer`) return formatAsInteger(str)
		if (number === `currency`) return formatAsCurrency(str)
		return str
	}

	return (
		<div>
			<Input
				{...props}
				onChange={(e) => {
					field.onChange(format(e.target.value))
					onChange && Promise.resolve(onChange(e)).catch(console.error)
				}}
				onBlur={field.onBlur}
				value={field.value}
				name={field.name}
				status={error ? `error` : undefined}
				ref={(v) => field.ref(v?.input)}
			/>
			<AnimatePresence>
				{error && (
					<motion.p
						initial={{height: `0px`}}
						animate={{height: `auto`}}
						exit={{height: `0px`}}
						className="overflow-hidden leading-tight text-error"
					>
						{error.message}
					</motion.p>
				)}
			</AnimatePresence>
		</div>
	)
}

export default RhfInput
